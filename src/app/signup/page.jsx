"use client";
import signUp from "@/firebase/auth/signup";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Flex, Paper, Text, Button, TextInput } from "@mantine/core";

import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/firebase/firebase-config";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const usersCollectionRef = collection(db, "users");
  const postsCollectionRef = collection(db, "posts");
  // const uuidRef = doc(db, "UUID", "users");
  const router = useRouter();

  const handleForm = async (event) => {
    try {
      event.preventDefault();
      const { result } = await signUp(email, password);

      // else successful
      createUser();
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };
  const createUser = async () => {
    // const userRef = doc(usersCollectionRef);
    const docRef = await addDoc(usersCollectionRef, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      UUID: localStorage.getItem("myUID"),
    });
    // await updateDoc(uuidRef, {
    //   UUID: docRef.id,
    // });
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);

      setUsers(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getUsers();
    getPosts();
  }, []);

  // console.log("users", users);
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const data = await getDocs(postsCollectionRef);
    setPosts(data.docs.map((doc) => ({ ...doc.data() })));
    // console.log(posts);
  };

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
              onChange={(e) => setFirstName(e.target.value)}
              label="First Name"
              required
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name..."
              radius="md"
              variant="filled"
              size="lg"
            />
            <TextInput
              onChange={(e) => setLastName(e.target.value)}
              label="Last Name"
              required
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name..."
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

            <Flex direction="column" gap={"md"} pt={"lg"}>
              <Button type="submit" size="lg">
                Sign up
              </Button>
              <Flex direction="row" justify={"space-between"}>
                <Text size="xl" pt={"0.3rem"}>
                  Already registered? Login here:
                </Text>
                <Button size="md">
                  <Link href={"/signin"}>Sign in</Link>
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </form>
      </Paper>
    </Flex>
  );
}
