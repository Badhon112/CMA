"use client";
import { useState } from "react";

interface formData {
  name: string;
  email: string;
}

export default function Test() {
  const [formdata, setFormdata] = useState<formData>({ name: "", email: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(formdata);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={formdata.name}
          name="name"
          id="name"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={formdata.email}
          name="email"
          id="email"
          onChange={handleChange}
        />
        <button>Button</button>
      </form>
    </div>
  );
}
