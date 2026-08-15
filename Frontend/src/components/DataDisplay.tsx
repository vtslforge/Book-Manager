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
    <section className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-slate-200 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-semibold text-slate-900">Your collection</h2>
          <p className="mt-1 text-sm text-slate-500">
            {books.length} {books.length === 1 ? "book" : "books"} displayed
          </p>
        </div>
        <button
          onClick={dataFetch}
          className="rounded-lg border border-slate-300 px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Refresh list
        </button>
      </div>

      {books.length === 0 ? (
        <div className="px-5 py-12 text-center">
          <p className="font-medium text-slate-700">No books to show yet.</p>
          <p className="mt-1 text-sm text-slate-500">
            Add a book or refresh the list to see your collection.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-190 text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-5 py-3 font-semibold">Title</th>
                <th className="px-5 py-3 font-semibold">Author</th>
                <th className="px-5 py-3 font-semibold">Genre</th>
                <th className="px-5 py-3 font-semibold">Published</th>
                <th className="px-5 py-3 font-semibold">Price</th>
                <th className="px-5 py-3 text-right font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {books.map((items) => (
                <tr key={items.id} className="transition hover:bg-slate-50/80">
                  <td className="px-5 py-4 font-medium text-slate-900">{items.title}</td>
                  <td className="px-5 py-4 text-slate-600">{items.author}</td>
                  <td className="px-5 py-4 text-slate-600">{items.genre}</td>
                  <td className="px-5 py-4 text-slate-600">{items.publishedYear}</td>
                  <td className="px-5 py-4 text-slate-600">{items.price}</td>
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-3">
                      <button onClick={() => handleEdit(items.id)} className="font-medium text-indigo-600 hover:text-indigo-800">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(items.id)} className="font-medium text-rose-600 hover:text-rose-800">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default DataDisplay;
