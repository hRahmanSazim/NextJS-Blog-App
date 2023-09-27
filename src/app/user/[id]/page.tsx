import React from "react";
import { Params } from "@/app/blog/[id]/page";
import { getPosts, getUsers } from "@/app/page";
import Image from "next/image";
import { Flex, Text } from "@mantine/core";
import PostModal from "@/components/NewPostModal";

export default async function User({ params }: Params) {
  const users = await getUsers();
  const posts = await getPosts();
  const randomImage = Array.from(
    { length: 3 },
    (max: number = 29, min: number = 1) =>
      Math.floor(Math.random() * (max - min + 1)) + min
  );

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-row w-4/5  justify-center h-4/5 m-10">
        <div className="flex flex-col w-1/3  justify-center ml-24 mb-4">
          <div className=" flex flex-col w-64 h-96  text-center">
            <div className="flex justify-start border-2 border-gray-200">
              <Image
                src={users[Number(params.id) - 1].image}
                alt="avatar"
                height={192}
                width={276}
              ></Image>
            </div>
            <div className="pt-4">
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
            </div>
          </div>
        </div>
        <div className="flex flex-row w-2/3 ">
          <div className="flex flex-col mt-24 font-bold">
            <Flex direction={"row"} justify={"space-between"}>
              <Text size="xl" fw={800}>
                My Posts
              </Text>
              {/* <Button>Make a new post</Button> */}
              <PostModal />
            </Flex>
            <div className="flex flex-row h-40 w-[44rem] mt-10">
              <Image
                src={`https://random.imagecdn.app/${String(
                  Number(params.id) + 302
                )}/199`}
                alt="user_pic"
                width={188}
                height={159}
              ></Image>
              <div className="flex flex-col h-[46px] w-4/5 pl-4">
                <div className="flex flex-row justify-between">
                  <p>{posts[randomImage[0]].title}</p>
                  <div className="pr-10 pb-4">
                    <button className="text-gray-700 w-18 h-10 pr-4">
                      Edit
                    </button>
                    <button className=" w-18 h-10 px-2 bg-red-800 text-white">
                      <p className="">Delete</p>
                    </button>
                  </div>
                </div>
                <div>
                  <p className="line-clamp-2">{posts[randomImage[0]].body}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row h-40 w-[44rem]  mt-10">
              <Image
                src={`https://random.imagecdn.app/${String(
                  Number(params.id) + 301
                )}/199`}
                alt="user_pic"
                width={188}
                height={159}
              ></Image>
              <div className="flex flex-col h-[46px] w-4/5 pl-4">
                <div className="flex flex-row justify-between">
                  <p className="truncate">{posts[randomImage[1]].title}</p>
                  <div className="pr-10 pb-4">
                    <button className="text-gray-700 w-18 h-10 pr-4">
                      Edit
                    </button>
                    <button className=" w-18 h-10 px-2 bg-red-800 text-white">
                      <p className="">Delete</p>
                    </button>
                  </div>
                </div>
                <div>
                  <p className="line-clamp-2">{posts[randomImage[1]].body}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row h-40 w-[44rem]  mt-10">
              <Image
                src={`https://random.imagecdn.app/${String(
                  Number(params.id) + 300
                )}/199`}
                alt="user_pic"
                width={188}
                height={159}
              ></Image>
              <div className="flex flex-col h-[46px] w-4/5 pl-4">
                <div className="flex flex-row justify-between">
                  <p className="truncate">{posts[randomImage[2]].title}</p>
                  <div className="pr-10 pb-4">
                    <button className="text-gray-700 w-18 h-10 pr-4">
                      Edit
                    </button>
                    <button className=" w-18 h-10 px-2 bg-red-800 text-white">
                      <p className="truncate">Delete</p>
                    </button>
                  </div>
                </div>
                <div>
                  <p className="line-clamp-2">{posts[randomImage[2]].body}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
