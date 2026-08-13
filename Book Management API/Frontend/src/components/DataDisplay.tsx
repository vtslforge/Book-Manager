import { studentDataFetch } from "../Hook/Fetch";

const DataDisplay = () => {
  // to display fetch data
  const { studata, dataFetch } = studentDataFetch();
  // handle to delete data

  async function handleDelete(id: number) {
    const res = fetch(`http://localhost:3000/students/${id}`, {
      method: "DELETE",
    });
    if (await res) {
      alert("deleted");
      dataFetch()
    }
  }

  return (
    <div className="mt-10 border h-full w-full p-3">
      <button onClick={dataFetch} className="border p-3 cursor-pointer">
        Refresh Data
      </button>
      <div className="w-full mt-10 overflow-hidden border">
        {studata?.map((items: any) => (
          <div
            key={items.id}
            className="grid grid-cols-5 items-center border-b px-5 py-4"
          >
            <div className="font-medium">{items.name}</div>
            <div>{items.age}</div>
            <div>{items.course}</div>
            <div>{items.email}</div>
            <button
              onClick={() => handleDelete(items.id)}
              className="border bg-gray-300 cursor-pointer"
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataDisplay;
