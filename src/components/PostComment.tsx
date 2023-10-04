"use client";
import { db } from "@/firebase/firebase-config";
import { Button, Flex, TextInput } from "@mantine/core";
import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { Params } from "@/app/blog/[id]/page";
import { useRouter } from "next/navigation";
export default function PostComment({ params }: Params) {
  const router = useRouter();
  const [comment, setComment] = useState("");
  const commentsRef = collection(
    doc(collection(db, "posts"), `${params.id}`),
    "comments"
  );
  const handleComment = async () => {
    if (localStorage.getItem("myUID") !== null) {
      setComment("");
      await addDoc(commentsRef, {
        firstName: localStorage.getItem("firstName"),
        lastName: localStorage.getItem("lastName"),
        avatar: localStorage.getItem("avatar"),
        body: comment,
        userID: localStorage.getItem("myUID"),
        created_at: serverTimestamp(),
      });
      router.refresh();
    }
  };
  return (
    <Flex direction={"column"}>
      <TextInput
        // className="h-[120px] w-11/12 border-gray-300 border-4 "
        placeholder="Your comments...."
        h={"60px"}
        // size="2rem"
        label=""
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
      <Flex>
        <Button
          onClick={handleComment}
          bg={"blue"}
          w={"4.5rem"}
          h={"2.25rem"}
          c={"white"}
        >
          Post
        </Button>
      </Flex>
    </Flex>
  );
}
