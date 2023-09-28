"use client";

import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
// import { useEffect, useState } from "react";
import { Button } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export function HeaderDefault() {
  const router = useRouter();
  const pathname = usePathname();
  // const randomUser = Array.from(
  //   { length: 1 },
  //   (max: number = 29, min: number = 0) =>
  //     Math.floor(Math.random() * (max - min + 1)) + min
  // );
  const renderLogout = localStorage.getItem("myUID") !== null;
  const logout = () => {
    localStorage.clear();
    if (pathname === "/") {
      router.refresh();
    } else {
      router.push("/");
    }
  };
  return (
    <header className="max-w-full m-0 py-3 bg-[#4069E5FF] rounded-none border-none	text-white">
      <div className="w-screen flex flex-row justify-between text-white-900 ">
        <div className="pl-28 sm:pl-0">
          <Link href="/">
            <p className="mr-4 cursor-pointer py-1.5 text-3xl font-bold ml-8">
              Sazim Blog
            </p>
          </Link>
        </div>

        <div className="flex-row pr-28 sm:pr-56">
          <div className="py-3 justify-center">
            <Link
              href={`/user/${localStorage.getItem("myUID")}`}
              target="_"
              className="underline text-1xl text-white pr-4"
            >
              My Posts
            </Link>
            <Link
              href="https://github.com/hRahmanSazim/NextJS-Blog-App"
              target="_"
              className="underline text-1xl justify-center pr-4"
            >
              Github Link
            </Link>
            {!renderLogout && (
              <Link
                href={"/signup"}
                className="justify-center text-1xl underline"
              >
                Login/SignUp
              </Link>
            )}
            {renderLogout && (
              <Button
                onClick={logout}
                className="justify-center text-1xl underline"
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export function HomeCarousel() {
  return (
    <Carousel>
      <Image
        src={"https://picsum.photos/2000/320"}
        alt="image 1"
        // className="w-full h-52"
        height={320}
        width={2000}
        // layout="fill"

        // style={{ objectFit: "contain" }}
      />
      <Image
        src={"https://picsum.photos/2001/320"}
        alt="image 2"
        // className="w-full h-52"
        height={320}
        width={2000}
        // style={{ objectFit: "contain" }}
        // layout="fill"
        // objectFit="contain"
      />
      <Image
        src={"https://picsum.photos/2002/320"}
        alt="image 3"
        // className="w-full h-52"
        height={320}
        width={2000}
        // layout="fill"
      />
    </Carousel>
  );
}
