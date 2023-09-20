"use client";

import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/");
  };
  return (
    <div className="wrapper border-2 border-red-400 w-screen">
      <div className="flex justify-center items-center form-wrapper border-2 border-green-800 h-screen ">
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              className="border-2 border-gray-400"
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              className="border-2 border-gray-400"
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <button type="submit" className="border-2 border-blue-600">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
