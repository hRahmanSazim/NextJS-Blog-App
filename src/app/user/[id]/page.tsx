import React from "react";
import { Params } from "@/app/blog/[id]/page";
import Image from "next/image";
import { Flex, Text } from "@mantine/core";
import PostModal from "@/components/NewPostModal";
import { db } from "@/firebase/firebase-config";
import { doc, getDoc } from "firebase/firestore";

export default async function User({ params }: Params) {
  // const users = await getUsers();
  // const posts = await getPosts();
  const userRef = doc(db, "users", `${params.id}`);
  const userSnap = await getDoc(userRef);
  const userData = userSnap.data();
  // const randomImage = Array.from(
  //   { length: 3 },
  //   (max: number = 29, min: number = 1) =>
  //     Math.floor(Math.random() * (max - min + 1)) + min
  // );

  return (
    <Flex justify={"center"} align={"center"} h={"100vh"}>
      <Flex
        direction={"row"}
        w={"80%"}
        justify={"space-between"}
        h={"80%"}
        m={"2.5rem"}
        bg={"teal"}
      >
        <Flex
          direction={"column"}
          w={"33%"}
          justify={"center"}
          ml={"6rem"}
          mb={"1rem"}
          bg={"orange"}
          align={"center"}
        >
          <Flex
            direction={"column"}
            w={"16rem"}
            h={"24rem"}
            align={"center"}
            bg={"grape"}
          >
            <Flex justify={"start"}>
              <Image
                src={userData?.avatar}
                alt="avatar"
                height={192}
                width={276}
              ></Image>
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <Text>My Posts</Text>
          <PostModal />
        </Flex>
      </Flex>
    </Flex>
  );
}
