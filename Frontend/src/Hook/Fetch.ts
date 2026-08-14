import { useState } from "react";

export function studentDataFetch() {
  const [studata, setStudata] = useState<any>();
  const [errorFound, seterrorFound] = useState<any>();

  async function dataFetch() {
    try {
      const response = await fetch("http://localhost:3000/students");
      if (!response.ok) {
        throw new Error("failed to fetch");
      }
      const studentData = await response.json();
      setStudata(studentData);
    } catch (error) {
      seterrorFound(error);
    }
  }

  return { studata, setStudata, errorFound, seterrorFound, dataFetch };
}
