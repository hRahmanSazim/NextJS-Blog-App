"use client";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import { Flex, Paper, Text, Button, TextInput } from "@mantine/core";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
