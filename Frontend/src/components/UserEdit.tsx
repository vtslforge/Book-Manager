import { Link } from "react-router";
import { useBooks } from "../Hook/Fetch";

const inputClass =
  "mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100";

const UserEdit = () => {
  const { book, setBook, handleUpdate } = useBooks();

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl">
        <Link
          className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
          to="/"
        >
          ← Back to books
        </Link>
        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Edit book
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Update the details below, then save your changes.
          </p>
          <div className="mt-7 space-y-5">
            <label className="block text-sm font-medium text-slate-700">
              Title
              <input
                onChange={(e) => setBook({ ...book, title: e.target.value })}
                value={book.title}
                className={inputClass}
                type="text"
                placeholder="Enter title"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Author
              <input
                onChange={(e) => setBook({ ...book, author: e.target.value })}
                value={book.author}
                className={inputClass}
                type="text"
                placeholder="Enter author"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Genre
              <input
                onChange={(e) => setBook({ ...book, genre: e.target.value })}
                value={book.genre}
                className={inputClass}
                type="text"
                placeholder="Enter genre"
              />
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                Published year
                <input
                  onChange={(e) =>
                    setBook({ ...book, publishedYear: Number(e.target.value) })
                  }
                  value={book.publishedYear || ""}
                  className={inputClass}
                  type="number"
                  placeholder="Enter year"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Price
                <input
                  onChange={(e) =>
                    setBook({ ...book, price: Number(e.target.value) })
                  }
                  value={book.price || ""}
                  className={inputClass}
                  type="number"
                  placeholder="Enter price"
                />
              </label>
            </div>
            <button
              onClick={handleUpdate}
              className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save changes
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default UserEdit;
