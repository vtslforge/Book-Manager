import { useNavigate } from "react-router";
import type { BookID } from "../types/userType";
import { useBooks } from "../Hook/Fetch";

const DataDisplay = () => {
  const { books, dataFetch, handleDelete } = useBooks();

  const navigate = useNavigate();

  function handleEdit(id: BookID) {
    navigate(`/edit/${id}`);
  }

  return (
    <div className="mt-10 border h-full w-full p-3">
      <button onClick={dataFetch} className="border p-3 cursor-pointer">
        Refresh Data
      </button>

      <div className="w-full mt-10 overflow-hidden border">
        {books.map((items) => (
          <div
            key={items.id}
            className="grid grid-cols-6 items-center border-b px-5 py-4"
          >
            <div>{items.title}</div>
            <div>{items.author}</div>
            <div>{items.genre}</div>
            <div>{items.publishedYear}</div>
            <div>{items.price}</div>

            <button
              onClick={() => handleDelete(items.id)}
              className="border bg-gray-300 cursor-pointer"
            >
              Delete
            </button>

            <button
              onClick={() => handleEdit(items.id)}
              className="border bg-gray-300 cursor-pointer"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataDisplay;