"use client";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Textarea, TextInput, Text } from "@mantine/core";
import { FormEvent, useState } from "react";
import {
  collection,
  addDoc,
  doc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "@/firebase/firebase-config";
import { useRouter } from "next/navigation";

function randomNumber(max: number, min: number): string {
  return String(Math.trunc(Math.random() * (max - min) + min));
}
export default function PostModal() {
  const router = useRouter();

  const [opened, { open, close }] = useDisclosure(false);
  const [coverphoto, setCoverPhoto] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const postsCollectionRef = collection(db, "posts");

  const handlePost = async (event: FormEvent) => {
    close();
    event.preventDefault();
    createPost();
  };
  const createPost = async () => {
    const userDocRef = doc(db, "users", `${localStorage.getItem("myUID")}`);
    const docSnap = await getDoc(userDocRef);
    const data = docSnap.data();
    const docRef = await addDoc(postsCollectionRef, {
      title: title,
      body: body,
      created_at: serverTimestamp(),
      cover_photo: `https://picsum.photos/${randomNumber(3000, 2700)}/449`,
      user: {
        avatar: `https://www.gravatar.com/avatar/${localStorage.getItem(
          "myUID"
        )}?d=robohash`,
        email: data?.email,
        firstName: data?.firstName,
        lastName: data?.lastName,
      },
      userId: localStorage.getItem("myUID"),
    });
    router.refresh();
  };
  return (
    <>
      <Modal opened={opened} onClose={close} c={"blue"} size={"50rem"} centered>
        <Text size="xl" fw={"bolder"}>
          Write your blog post
        </Text>
        <TextInput
          data-autofocus
          label="Title"
          placeholder="Title here..."
          my="md"
          size="lg"
          onChange={(e) => setTitle(e.target.value)}
        ></TextInput>
        <Textarea
          size="xl"
          radius="xs"
          label="Description"
          description=""
          placeholder="Start writing your blog..."
          autosize
          minRows={2}
          maxRows={6}
          onChange={(e) => setBody(e.target.value)}
        />
        <Button onClick={handlePost} mt={"md"}>
          Post
        </Button>
      </Modal>
      <Button onClick={open}>Make a new post</Button>
    </>
  );
}
