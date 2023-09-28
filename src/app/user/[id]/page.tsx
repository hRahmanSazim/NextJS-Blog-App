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
        justify={"center"}
        h={"80%"}
        m={"2.5rem"}
      >
        <Flex
          direction={"column"}
          w={"33.333%"}
          justify={"center"}
          ml={"6rem"}
          mb={"1rem"}
        >
          <Flex direction={"column"} w={"16rem"} h={"24rem"} align={"center"}>
            <Flex justify={"start"}>
              <Image
                src={userData?.avatar}
                alt="avatar"
                height={192}
                width={276}
              ></Image>
            </Flex>
            {/* <div className="pt-4">
              {users[Number(params.id) - 1].firstName}{" "}
              {users[Number(params.id) - 1].lastName}
            </div>
            <div className="text-blue-800">
              {users[Number(params.id) - 1].company.title}
            </div>
            <div>{users[Number(params.id) - 1].address.address}</div>
            <div>{users[Number(params.id) - 1].address.city}</div>
            <div className="flex flex-row justify-center pt-2 gap-2">
              <Image
                src={
                  "https://freelogopng.com/images/all_img/1657043345twitter-logo-png.png"
                }
                alt="avatar"
                height={26}
                width={26}
              ></Image>
              <Image
                src={
                  "https://img.freepik.com/premium-vector/linkedin-icon_488108-5.jpg?w=826"
                }
                alt="avatar"
                height={36}
                width={36}
              ></Image>
            </div> */}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
