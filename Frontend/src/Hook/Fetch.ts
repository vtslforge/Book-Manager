import { useState } from "react";
import type { BookID, User } from "../types/userType";

export function useBooks() {
  const [books, setBooks] = useState<User[]>([]);
  const [book, setBook] = useState<Omit<User, "id">>({
    title: "",
    author: "",
    genre: "",
    publishedYear: 0,
    price: 0,
  });

  const [error, setError] = useState<unknown>();

  // GET
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

  return {
    books,
    book,
    setBook,
    error,
    dataFetch,
    handlePost,
    handleDelete,
  };
}
