"use client";

import { Carousel } from "@material-tailwind/react";
import type { NavbarProps } from "@material-tailwind/react";
import React from "react";
import { useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export function HomeCarousel({ products }) {
  return (
    <Carousel className="h-52">
      <img src={products[4].thumbnail} alt="image 1" className="w-full h-52" />
      <img src={products[2].thumbnail} alt="image 2" className="w-full h-52" />
      <img src={products[3].thumbnail} alt="image 3" className="w-full h-52" />
    </Carousel>
  );
}

export function HeaderDefault() {
  const [openNav, setOpenNav] = React.useState(false);

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
