import { useState } from "react";

export function addUserData() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");

  async function handleAdd() {
    const response = await fetch("http://localhost:3000/students", {
      method: "Post",
      body: JSON.stringify({ name, age, course, email }),
    });
    if ( response.ok) {
      alert("data added ");
    }
  }
  return {
    name,
    setName,
    age,
    setAge,
    course,
    setCourse,
    email,
    setEmail,
    handleAdd,
  };
}
