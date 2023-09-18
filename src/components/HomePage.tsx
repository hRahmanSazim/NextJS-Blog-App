"use client";

import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import Link from "next/link";

export function HeaderDefault() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1080 && setOpenNav(false)
    );
  }, []);
  const randomUser = Array.from(
    { length: 1 },
    (max: number = 29, min: number = 0) =>
      Math.floor(Math.random() * (max - min + 1)) + min
  );

  return (
    <Navbar className="max-w-full m-0  bg-[#4069E5FF] rounded-none border-none	">
      <div className="container mx-auto flex justify-between text-white-900 ">
        <Link href="/">
          <p className="mr-4 cursor-pointer py-1.5 text-3xl">Sazim Blog</p>
        </Link>
        <div className="flex-row">
          <Link
            href={`/user/${randomUser[0]}`}
            target="_"
            className="hover:underline text-1xl text-white pr-4"
          >
            My Posts
          </Link>
          <Link
            href="https://github.com/hRahmanSazim/NextJS-Blog-App"
            target="_"
            className="hover:underline text-1xl justify-center"
          >
            Github Link
          </Link>
        </div>
      </div>
    </Navbar>
  );
}

export function HomeCarousel() {
  return (
    <Carousel>
      <Image
        src={"https://picsum.photos/1300/320"}
        alt="image 1"
        // className="w-full h-52"
        height={320}
        width={2000}
        // layout="fill"

        // style={{ objectFit: "contain" }}
      />
      <Image
        src={"https://picsum.photos/1301/320"}
        alt="image 2"
        // className="w-full h-52"
        height={320}
        width={2000}
        // style={{ objectFit: "contain" }}
        // layout="fill"
        // objectFit="contain"
      />
      <Image
        src={"https://picsum.photos/1302/320"}
        alt="image 3"
        // className="w-full h-52"
        height={320}
        width={2000}
        // layout="fill"
      />
    </Carousel>
  );
}
