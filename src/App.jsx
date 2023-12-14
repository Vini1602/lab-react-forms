
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  // State variables for form inputs
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("Web Dev");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle special cases like checkbox and select
    if (type === "checkbox") {
      setGraduated(checked);
    } else {
      // Set other state variables based on input name
      switch (name) {
        case "fullName":
          setFullName(value);
          break;
        case "image":
          setImage(value);
          break;
        case "phone":
          setPhone(value);
          break;
        case "email":
          setEmail(value);
          break;
        case "program":
          setProgram(value);
          break;
        case "graduationYear":
          setGraduationYear(Number(value));
          break;
        default:
          break;
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Handle form submission, e.g., add the new student to the students array
    const newStudent = {
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduated,
    };

    setStudents((prevStudents) => [...prevStudents, newStudent]);

    // Clear the form after submission
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("Web Dev");
    setGraduationYear(2023);
    setGraduated(false);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleFormSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={image}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Program
            <select name="program" value={program} onChange={handleInputChange}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={graduationYear}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={graduated}
              onChange={handleInputChange}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
      {/* FORM END */}

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
