import { Link } from "react-router";
import { addUserData } from "../Hook/UserAdd";

const UserAddition = () => {
  const {
    name,
    setName,
    age,
    setAge,
    email,
    setCourse,
    setEmail,
    course,
    handleAdd,
  } = addUserData();

  return (
    <div className=" justify-center items-center p-40">
      <Link className="border p-3" to={"/"}>
        HOME
      </Link>
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
        onClick={handleAdd}
        className="border p-3 mt-5 mv-5 cursor-pointer"
      >
        ADD DATA
      </button>
      <p>{name}</p>
      <p>{age}</p>
      <p>{course}</p>
      <p>{email}</p>
    </div>
  );
};

export default UserAddition;
