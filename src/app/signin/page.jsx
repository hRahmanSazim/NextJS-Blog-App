"use client";
import { useEffect, useState } from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";
import { Flex, Paper, Button, TextInput } from "@mantine/core";
// import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const userRef = collection(db, "users");

  const [test, setTest] = useState("");

  useEffect(() => {
    const getDoc = async () => {
      const q = query(citiesRef, where("email", "==", result.user.email));
      const user = await getDocs(q);
    };
  }, []);

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);
    console.log(result);
    // localStorage.setItem("accessToken", result.user.uid);

    // clean this up
    if (error) {
      alert("wrong credentials");
      return console.log(error);
    } else {
      router.push("/");
    }

    // else successful
    console.log(result);
  };

  // if (test === "") {
  //   return <div>You are not logged in</div>;
  // }
  return (
    <Flex mih={"100%"} justify="center" align="center" direction="row">
      <Paper shadow={"xl"} radius="lg" withBorder w={"auto"} p={"6rem"}>
        <form onSubmit={handleForm}>
          <Flex direction={"column"} gap="md" justify={"center"} w={"25rem"}>
            <TextInput
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              radius="md"
              variant="filled"
              size="lg"
            />

            <TextInput
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
              radius="md"
              variant="filled"
              size="lg"
            />

            <Flex direction="column" gap={"xs"}>
              <Button type="submit" size="lg">
                Sign in
              </Button>
            </Flex>
          </Flex>
        </form>
      </Paper>
    </Flex>
  );
}
