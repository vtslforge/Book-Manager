import { Link } from "react-router";
import DataDisplay from "../components/DataDisplay";

const Dashboard = () => {
  return (
    <main className="flex flex-col justify-center items-center p-6">
      <h1 className="text-3xl underline">Welcome to Student Dashboard</h1>
      <section  className="border h-10vh w-full mt-10 p-3 flex justify-evenly ">
        <Link className="border p-3 cursor-pointer" to={"/add"} >Add user</Link>
        <button className="border p-3 cursor-pointer">Patch data</button>
        <button className="border p-3 cursor-pointer">moreee</button>
      </section>
      <DataDisplay/>
    </main>
  );
};

export default Dashboard;
