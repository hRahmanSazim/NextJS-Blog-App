import React from "react";
import { Params } from "@/app/blog/[id]/page";
import { getPosts, getUsers } from "@/app/page";
import Image from "next/image";
import twitterIcon from "../../../../public/logo+twitter+twitter+logo+icon-1320167831451644641.png";
import linkedinIcon from "../../../../public/linkedin+network+social+icon-1320086082965629906.png";
export default async function User({ params }: Params) {
  const users = await getUsers();
  const posts = await getPosts();

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
            <div className="flex flex-row justify-center">
              <Image
                src={twitterIcon}
                alt="avatar"
                height={32}
                width={32}
              ></Image>
              <Image
                src={linkedinIcon}
                alt="avatar"
                height={32}
                width={32}
              ></Image>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-2/3 ">
          <div className="flex flex-col mt-24 font-bold">
            <p className="text-4xl">My Posts</p>
            <div className="flex flex-row h-40 w-[44rem] mt-10">
              <Image
                src={`https://random.imagecdn.app/${String(
                  Number(params.id) + 302
                )}/199`}
                alt="user_pic"
                width={192}
                height={159}
              ></Image>
              <div className="flex flex-col h-[46px] w-4/5 pl-4">
                <div className="flex flex-row justify-between">
                  <p>{posts[Number(params.id) - 2].title}</p>
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
                  <p className="line-clamp-3">
                    {posts[Number(params.id) - 2].body}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row h-40 w-[44rem]  mt-10">
              <Image
                src={`https://random.imagecdn.app/${String(
                  Number(params.id) + 301
                )}/199`}
                alt="user_pic"
                width={192}
                height={159}
              ></Image>
              <div className="flex flex-col h-[46px] w-4/5 pl-4">
                <div className="flex flex-row justify-between">
                  <p className="truncate">
                    {posts[Number(params.id) - 1].title}
                  </p>
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
                  <p className="line-clamp-3">
                    {posts[Number(params.id) - 1].body}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row h-40 w-[44rem]  mt-10">
              <Image
                src={`https://random.imagecdn.app/${String(
                  Number(params.id) + 300
                )}/199`}
                alt="user_pic"
                width={192}
                height={159}
              ></Image>
              <div className="flex flex-col h-[46px] w-4/5 pl-4">
                <div className="flex flex-row justify-between">
                  <p className="truncate">
                    {posts[Number(params.id) - 3].title}
                  </p>
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
                  <p className="line-clamp-3">
                    {posts[Number(params.id) - 3].body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
