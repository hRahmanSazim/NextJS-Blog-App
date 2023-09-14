"use client";
// // import { Carousel } from "react-responsive-carousel";
// import Carousel from "react-bootstrap/Carousel";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Link from "next/link";
// import Image from "next/image";
// import { CarouselItem } from "react-bootstrap";

// const HomeCarousel = () => {
//   return (
//     <Carousel>
//       <CarouselItem>
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </CarouselItem>
//     </Carousel>
//   );
// };

// export default HomeCarousel;
// import Home from "./page";
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
    <Carousel className="">
      <img
        src={products[1].thumbnail}
        alt="image 1"
        className="h-[20rem] w-full object-fill"
      />
      <img
        src={products[2].thumbnail}
        alt="image 2"
        className="h-[20rem] w-full object-fill"
      />
      <img
        src={products[3].thumbnail}
        alt="image 3"
        className="h-[20rem] w-full object-fill"
      />
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

  // const navList = (
  //   <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

  // );

  return (
    <Navbar className="max-w-full m-0  bg-[#4069E5FF] rounded-none">
      <div className="container mx-auto flex items-center justify-between text-white-900 ">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-bold"
        >
          Sazim Blog
        </Typography>
        {/* <div className="hidden lg:block">{navList}</div> */}
        <a
          href="https://github.com/hRahmanSazim/NextJS-Blog-App"
          target="_"
          className="hover:underline"
        >
          Github Link
        </a>
      </div>
    </Navbar>
  );
}
