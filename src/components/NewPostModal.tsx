"use client";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Textarea, TextInput, Text } from "@mantine/core";
import { FormEvent, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  setDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "@/firebase/firebase-config";

export default function PostModal() {
  const [opened, { open, close }] = useDisclosure(false);
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
      user: {
        avatar: "",
        email: data?.email,
        firstName: data?.firstName,
        lastName: data?.lastName,
      },
      userId: localStorage.getItem("myUID"),
    });
    // await updateDoc(uuidRef, {
    //   UUID: docRef.id,
    // });

    // if uuid should be same as generated auto document id :-
    // await setDoc(
    //   doc(db, "users", docRef.id),
    //   {
    //     UUID: docRef.id,
    //   },
    //   { merge: true }
    // );
    // localStorage.setItem("myUID", docRef.id);
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
