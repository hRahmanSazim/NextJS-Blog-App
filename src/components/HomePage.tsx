"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import UserButton from "./UserButton";
import { AppShell, Flex, Text } from "@mantine/core";

export function HeaderDefault() {
  const renderLogout = localStorage.getItem("myUID") !== null;
  return (
    <AppShell header={{ height: 65 }}>
      <AppShell.Header bg={"#4069E5FF"} c={"white"}>
        <Flex direction={"row"} justify={"space-around"} align={"center"}>
          <Flex
            direction={"column"}
            align={"center"}
            justify={"center"}
            pt={"0.5rem"}
          >
            <Link href="/">
              <Text size="2.25rem" fw={"bolder"}>
                Sazim Blog
              </Text>
            </Link>
          </Flex>

          <Flex direction={"row"} pt={"0.5rem"}>
            <Flex direction={"column"} justify={"center"} align={"center"}>
              <Link
                href={`/user/${localStorage.getItem("myUID")}`}
                target="_"
                className="underline text-1xl text-blue-500 pr-4"
              >
                My Posts
              </Link>
            </Flex>
            <Flex direction={"column"} justify={"center"} align={"center"}>
              <Link
                href="https://github.com/hRahmanSazim/NextJS-Blog-App"
                target="_"
                className="underline text-1xl justify-center pr-4"
              >
                Github Link
              </Link>
            </Flex>

            {!renderLogout && (
              <Flex direction={"column"} justify={"center"} align={"center"}>
                <Link
                  href={"/signup"}
                  className="justify-center text-1xl underline"
                >
                  Login/SignUp
                </Link>
              </Flex>
            )}

            {renderLogout && <UserButton />}
          </Flex>
        </Flex>
      </AppShell.Header>
    </AppShell>
  );
}

export function HomeCarousel() {
  return (
    <Carousel>
      <Image
        src={"https://picsum.photos/2000/320"}
        alt="image 1"
        height={320}
        width={2000}
      />
      <Image
        src={"https://picsum.photos/2001/320"}
        alt="image 2"
        height={320}
        width={2000}
      />
      <Image
        src={"https://picsum.photos/2002/320"}
        alt="image 3"
        height={320}
        width={2000}
      />
    </Carousel>
  );
}
