import { Link } from "react-router";
import DataDisplay from "../components/DataDisplay";

const Dashboard = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
              Library
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Book manager
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Keep your book collection organized in one place.
            </p>
          </div>
          <Link
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            to="/add"
          >
            Add book
          </Link>
        </header>
        <DataDisplay />
      </div>
    </main>
  );
};

export default Dashboard;
