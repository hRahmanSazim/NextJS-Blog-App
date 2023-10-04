import React from "react";
import { Params } from "@/app/blog/[id]/page";
import Image from "next/image";
import { Center, Flex, Text, Paper } from "@mantine/core";
import { db } from "@/firebase/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import UserPostList from "@/components/UserPostList";
import NewPostModal from "@/components/NewPostModal";

export default async function User({ params }: Params) {
  const userRef = doc(db, "users", `${params.id}`);
  const userSnap = await getDoc(userRef);
  const userData = userSnap.data();

  return (
    <Flex w={"100%"} h={"100vh"} justify={"center"} align={"center"}>
      <Flex w={"80%"} h={"80%"}>
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
                <Flex direction={"row"} justify={"center"} align={"center"}>
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
        <Flex w={"67%"} h={"100%"} justify={"center"} align={"center"}>
          <Flex w={"90%"} h={"90%"} direction={"column"}>
            <Flex direction={"row"} justify={"space-between"}>
              <Text size="3rem" fw={700}>
                My Posts
              </Text>
              <NewPostModal />
            </Flex>
            <Flex w={"100%"} h={"100%"}>
              <UserPostList params={params} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
