"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import UserButton from "./UserButton";
import { AppShell, Flex, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [uid, setUID] = useState(false);
  useEffect(() => {
    setUID(localStorage.getItem("myUID") !== null);
  }, []);
  const pathname = usePathname();

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
              <Text size="2.25rem" fw={"bolder"} c={"black"}>
                InspireInk
              </Text>
            </Link>
          </Flex>

          <Flex direction={"row"} pt={"0.5rem"}>
            <Flex direction={"column"} justify={"center"} align={"center"}>
              {pathname === "/" ? (
                uid && (
                  <Link
                    href={`/user/${localStorage.getItem("myUID")}`}
                    target="_"
                    className="underline text-1xl  pr-4"
                  >
                    My Posts
                  </Link>
                )
              ) : (
                <Flex></Flex>
              )}

              {/* {localStorage.getItem("myUID") === null && (
                <Link href={"/"} className="underline text-1xl  pr-4">
                  My Posts
                </Link>
              )} */}
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

            {!uid && (
              <Flex direction={"column"} justify={"center"} align={"center"}>
                <Link
                  href={"/signup"}
                  className="justify-center text-1xl underline"
                >
                  Login/SignUp
                </Link>
              </Flex>
            )}

            {uid && <UserButton />}
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
        src={"https://picsum.photos/2000/350"}
        alt="image 1"
        height={350}
        width={2000}
      />
      <Image
        src={"https://picsum.photos/2001/350"}
        alt="image 2"
        height={350}
        width={2000}
      />
      <Image
        src={"https://picsum.photos/2002/350"}
        alt="image 3"
        height={350}
        width={2000}
      />
    </Carousel>
  );
}
