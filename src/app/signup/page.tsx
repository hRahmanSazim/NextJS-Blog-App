"use client";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { Flex, Paper, Text, Button, TextInput } from "@mantine/core";

import {
  collection,
  getDocs,
  addDoc,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/firebase/firebase-config";

export default function Signup() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const usersCollectionRef = collection(db, "users");
  const router = useRouter();
  const handleForm = async (event: FormEvent) => {
    try {
      event.preventDefault();
      const { result } = await signUp(email, password);
      createUser();
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
      UUID: "",
      avatar: "",
      created_at: "",
    });
    localStorage.setItem("myUID", docRef.id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    await setDoc(
      doc(db, "users", docRef.id),
      {
        UUID: docRef.id,
        avatar: `https://www.gravatar.com/avatar/${localStorage.getItem(
          "myUID"
        )}?d=robohash`,
        created_at: serverTimestamp(),
      },

      { merge: true }
    );
    localStorage.setItem(
      "avatar",
      `https://www.gravatar.com/avatar/${localStorage.getItem(
        "myUID"
      )}?d=robohash`
    );

    router.push(`/user/${localStorage.getItem("myUID")}`);
  };

  const [users, setUsers] = useState<object[]>([]);
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);

      setUsers(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getUsers();
  }, []);

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
