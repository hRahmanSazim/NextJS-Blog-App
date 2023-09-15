"use client";

import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Navbar, Typography } from "@material-tailwind/react";

export function HeaderDefault() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1080 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="max-w-full m-0  bg-[#4069E5FF] rounded-none border-none	">
      <div className="container mx-auto flex items-center justify-between text-white-900 ">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 text-3xl"
        >
          Sazim Blog
        </Typography>
        <a
          href="https://github.com/hRahmanSazim/NextJS-Blog-App"
          target="_"
          className="hover:underline text-1xl"
        >
          Github Link
        </a>
      </div>
    </Navbar>
  );
}

export function HomeCarousel() {
  return (
    <Carousel>
      <Image
        src={"https://random.imagecdn.app/1070/320"}
        alt="image 2"
        // className="w-full h-52"
        height={320}
        width={1080}
        // layout="fill"

        // style={{ objectFit: "contain" }}
      />
      <Image
        src={"https://random.imagecdn.app/1060/320"}
        alt="image 1"
        // className="w-full h-52"
        // height={320}
        // width={1080}
        // style={{ objectFit: "contain" }}
        layout="fill"
        // objectFit="contain"
      />
      <Image
        src={"https://random.imagecdn.app/1080/320"}
        alt="image 3"
        // className="w-full h-52"
        height={320}
        width={1080}
        // layout="fill"
      />
    </Carousel>
  );
}
