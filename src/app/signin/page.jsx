"use client";
import { useState } from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/user/2");
  };
  return (
    <div className="wrapper border-2 border-red-400 w-screen">
      <div className="flex justify-center items-center form-wrapper border-2 border-green-800 h-screen ">
        {/* <h1 className="mt-60 mb-30">Sign up</h1> */}
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              className="border-2 border-gray-600"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="border-2 border-gray-600"
            />
          </label>
          <button type="submit" className="border-2 border-green-600">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
