import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type { BookID, User } from "../types/userType";

export function useBooks() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [books, setBooks] = useState<User[]>([]);
  const [book, setBook] = useState<Omit<User, "id">>({
    title: "",
    author: "",
    genre: "",
    publishedYear: 0,
    price: 0,
  });

  const [error, setError] = useState<unknown>();

  // GET ALL BOOKS
  async function dataFetch() {
    try {
      const response = await fetch("http://localhost:3000/books");

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data: User[] = await response.json();
      setBooks(data);
    } catch (error) {
      setError(error);
    }
  }

  // GET SINGLE BOOK FOR EDIT
  useEffect(() => {
    if (!id) return;

    async function fetchBook() {
      try {
        const response = await fetch(
          `http://localhost:3000/books/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch book");
        }

        const data: User = await response.json();

        setBook({
          title: data.title,
          author: data.author,
          genre: data.genre,
          publishedYear: data.publishedYear,
          price: data.price,
        });
      } catch (error) {
        setError(error);
      }
    }

    fetchBook();
  }, [id]);

  // POST
  async function handlePost() {
    try {
      const response = await fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });

      if (!response.ok) {
        throw new Error("Failed to add book");
      }

      alert("Posted");
      await dataFetch();
    } catch (error) {
      setError(error);
    }
  }

  // DELETE
  async function handleDelete(id: BookID) {
    try {
      const response = await fetch(
        `http://localhost:3000/books/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete book");
      }

      await dataFetch();
    } catch (error) {
      setError(error);
    }
  }

  // EDIT / UPDATE
  async function handleUpdate() {
    if (!id) return;

    try {
      const response = await fetch(
        `http://localhost:3000/books/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(book),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update book");
      }

      alert("Book updated");
      navigate("/");
    } catch (error) {
      setError(error);
    }
  }

  return {
    books,
    book,
    setBook,
    error,
    dataFetch,
    handlePost,
    handleDelete,
    handleUpdate,
  };
}