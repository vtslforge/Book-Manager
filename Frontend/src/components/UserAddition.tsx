import { Link } from "react-router";
import { useBooks } from "../Hook/Fetch";

const UserAddition = () => {
  const { book, setBook, handlePost } = useBooks();

  return (
    <div className="justify-center items-center p-40">
      <Link className="border p-3" to="/">
        HOME
      </Link>

      <p className="mt-10">ADD TITLE</p>
      <input
        onChange={(e) => setBook({ ...book, title: e.target.value })}
        value={book.title}
        className="h-10 w-90 border mt-5 pl-3"
        type="text"
        placeholder="Enter title"
      />

      <p className="mt-10">ADD AUTHOR</p>
      <input
        onChange={(e) => setBook({ ...book, author: e.target.value })}
        value={book.author}
        className="h-10 w-90 border mt-5 pl-3"
        type="text"
        placeholder="Enter author"
      />

      <p className="mt-10">ADD GENRE</p>
      <input
        onChange={(e) => setBook({ ...book, genre: e.target.value })}
        value={book.genre}
        className="h-10 w-90 border mt-5 pl-3"
        type="text"
        placeholder="Enter genre"
      />

      <p className="mt-10">ADD PUBLISHED YEAR</p>
      <input
        onChange={(e) =>
          setBook({
            ...book,
            publishedYear: Number(e.target.value),
          })
        }
        value={book.publishedYear || ""}
        className="h-10 w-90 border mt-5 pl-3"
        type="number"
        placeholder="Enter published year"
      />

      <p className="mt-10">ADD PRICE</p>
      <input
        onChange={(e) =>
          setBook({
            ...book,
            price: Number(e.target.value),
          })
        }
        value={book.price || ""}
        className="h-10 w-90 border mt-5 pl-3"
        type="number"
        placeholder="Enter price"
      />

      <br />

      <button
        onClick={handlePost}
        className="border p-3 mt-5 mv-5 cursor-pointer"
      >
        ADD DATA
      </button>

      <p>{book.title}</p>
      <p>{book.author}</p>
      <p>{book.genre}</p>
      <p>{book.publishedYear}</p>
      <p>{book.price}</p>
    </div>
  );
};

export default UserAddition;
