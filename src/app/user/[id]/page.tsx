import React from "react";
import { Params } from "@/app/blog/[id]/page";
import Image from "next/image";
import { Center, Flex, Text, Paper, Container } from "@mantine/core";
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
    <Flex w={"100%"} h={"100vh"} justify={"center"} align={"center"}>
      <Flex
        // direction={"column"}
        w={"80%"}
        h={"80%"}
      >
        <Flex w={"33%"} h={"100%"} justify={"center"} align={"center"}>
          <Flex h={"55%"} w={"50%"} direction={"column"}>
            <Flex h={"60%"} w={"100%"}>
              <Paper shadow="xl" withBorder radius={"xl"}>
                <Image
                  alt="user_image"
                  src={`${userData?.avatar}`}
                  width={260}
                  height={250}
                ></Image>
              </Paper>
            </Flex>
            <Center>
              <Flex direction={"column"} m={"lg"}>
                <Flex direction={"row"} justify={"center"}>
                  <Text size="1.5rem">
                    {userData?.firstName.toUpperCase()}{" "}
                    {userData?.lastName.toUpperCase()}
                  </Text>
                </Flex>
                <Flex mt={"1rem"}>{userData?.email}</Flex>
                <Flex direction={"row"} mt={"sm"} justify={"center"}>
                  <Image
                    alt="linkedin"
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/f/f8/LinkedIn_icon_circle.svg"
                    }
                    width={25}
                    height={25}
                  ></Image>
                  <Image
                    alt="twitter"
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/1024px-X_logo_2023.svg.png"
                    }
                    width={22}
                    height={22}
                  ></Image>
                </Flex>
              </Flex>
            </Center>
          </Flex>
        </Flex>
        <Flex
          w={"67%"}
          h={"100%"}
          bg={"yellow"}
          justify={"center"}
          align={"center"}
        >
          <Flex w={"90%"} h={"90%"} bg={"teal"}>
            <Text size="3rem" fw={700}>
              My Posts
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
