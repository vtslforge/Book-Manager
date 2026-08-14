import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

const UserEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function updateData() {
      const response = await fetch(`http://localhost:3000/students/${id}`);
      let data = await response.json();
      setName(data.name);
      setAge(data.age);
      setCourse(data.course);
      setEmail(data.email);
    }
    updateData();
  }, [id]);

  async function handleAddUpdate() {
    const response = await fetch(`http://localhost:3000/students/${id}`, {
      method: "Put",
      body: JSON.stringify({ name, age, course, email }),
    });
    if (response) {
      alert("data updated ");
    }
    navigate("/");
  }

  return (
    <div className="p-50">
      <Link className="border p-3" to={"/"}>
        Home
      </Link>
      <div className="mt-10">Data to edit</div>

      <p className="mt-10">ADD NAME</p>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="h-10 w-90 border mt-5 pl-3"
        type="text"
        placeholder="Enter name"
      />
      <p className="mt-10">ADD AGE</p>
      <input
        onChange={(e) => setAge(e.target.value)}
        value={age}
        className="h-10 w-90 border mt-5 pl-3"
        type="text"
        placeholder="Enter age"
      />
      <p className="mt-10">ADD COURSE</p>
      <input
        onChange={(e) => setCourse(e.target.value)}
        value={course}
        className="h-10 w-90 border mt-5 pl-3"
        type="text"
        placeholder="Enter course"
      />
      <p className="mt-10">ADD EMAIL</p>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="h-10 w-90 border mt-5 pl-3"
        type="text"
        placeholder="Enter email"
      />
      <br />
      <button
        onClick={handleAddUpdate}
        className="border p-3 mt-5 mv-5 cursor-pointer"
      >
        Update DATA
      </button>
    </div>
  );
};

export default UserEdit;
