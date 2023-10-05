"use client";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Textarea, TextInput, Text } from "@mantine/core";
import { FormEvent, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  serverTimestamp,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/firebase/firebase-config";
import { useRouter } from "next/navigation";
import { HiOutlinePencil } from "react-icons/hi";
export interface ParamObjects {
  obj: {
    id: string;
    body: string;
    cover_photo: string;
    created_at: any;
    title: string;
    user: {
      avatar: string;
      email: string;
      firstName: string;
      lastName: string;
    };
    userId: string;
  };
}

export default function EditModal({ obj }: ParamObjects) {
  const router = useRouter();
  console.log(obj);

  const [opened, { open, close }] = useDisclosure(false);

  const [title, setTitle] = useState<string>(obj.title);
  const [body, setBody] = useState<string>(obj.body);
  const postsRef = collection(db, "posts");
  const postRef = doc(db, "posts", obj.id);

  const handlePost = async (event: FormEvent) => {
    close();
    event.preventDefault();
    editPost();
  };
  const editPost = async () => {
    const q = query(postsRef, where("userId", "==", `${obj.userId}`));
    const res: any = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      res.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    await updateDoc(postRef, {
      title: title,
      body: body,
      created_at: serverTimestamp(),
    });
    router.refresh();
  };
  return (
    <>
      <Modal opened={opened} onClose={close} c={"blue"} size={"50rem"} centered>
        <Text size="xl" fw={"bolder"}>
          Edit your blog post
        </Text>
        <TextInput
          data-autofocus
          label="Title"
          my="md"
          size="lg"
          defaultValue={obj.title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          size="xl"
          radius="xs"
          label="Description"
          description=""
          defaultValue={obj.body}
          autosize
          minRows={2}
          maxRows={6}
          onChange={(e) => setBody(e.target.value)}
        />
        <Button onClick={handlePost} mt={"md"}>
          Post
        </Button>
      </Modal>
      <Button onClick={open} bg={"violet"}>
        <HiOutlinePencil size="1.5rem"></HiOutlinePencil>
      </Button>
    </>
  );
}
