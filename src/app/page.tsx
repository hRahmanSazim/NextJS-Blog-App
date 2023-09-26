import { HomeCarousel, HeaderDefault } from "../components/HomePage";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import randomdate from "../components/randomdate.json";
import { Comment, Post, User } from "@/types";
import { Flex, Text } from "@mantine/core";
import { useEffect } from "react";

interface GetPostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}
export interface GetUsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}
interface GetCommentsResponse {
  comments: Comment[];
  total: number;
  skip: number;
  limit: number;
}

export async function getUsers(): Promise<User[]> {
  const { data } = await axios.get<GetUsersResponse>(
    "https://dummyjson.com/users/"
  );
  return data.users;
}
export async function getPosts(): Promise<Post[]> {
  const { data } = await axios.get<GetPostsResponse>(
    "https://dummyjson.com/posts?limit=30"
  );
  return data.posts;
}
async function getComments(): Promise<Comment[]> {
  const { data } = await axios.get<GetCommentsResponse>(
    "https://dummyjson.com/comments"
  );
  return data.comments;
}

export default async function Home() {
  const posts = await getPosts();
  const users = await getUsers();

  const randomImage = Array.from(
    { length: 300 },
    (max: number = 400, min: number = 300) =>
      Math.floor(Math.random() * (max - min + 1)) + min
  );
  let count = 0;
  return (
    <main>
      <HeaderDefault />

      <HomeCarousel />

      <Flex w="100%" h="5rem" bg={"white"} direction={"column"}></Flex>
      <Flex direction={"column"} justify={"center"} align={"center"}>
        <Text size="lg">Recent Posts</Text>

        <Flex
          direction={"column"}
          w="80rem"
          justify={"center"}
          align={"center"}
        >
          <Flex h={"3.5rem"}> </Flex>
          {posts.map((post) => (
            <ul key={post.id}>
              <Flex direction={"row"} h={"250px"} mb={"1rem"}>
                <Flex mb={"1rem"}>
                  <Flex w={"250px"}>
                    <Image
                      src={`https://picsum.photos/${randomImage[post.id]}`}
                      alt="post_image"
                      width={250}
                      height={250}
                    />
                  </Flex>
                  <Flex direction={"column"}>
                    <Link href={`/blog/${post.id}`}>
                      <Text size="1.5rem" pl="1.5rem">
                        {post.title}
                      </Text>
                    </Link>
                    <Text c={"blue"} pl={"1.5rem"} size="1.5rem" pt={"0.5rem"}>
                      Author: {users[count].firstName} {users[count++].lastName}
                    </Text>
                    <Text w={"500px"} pl={"1.5rem"} lineClamp={5}>
                      {post.body}
                    </Text>
                    <Text c={"gray"} pl={"1.5rem"} pt={"1rem"}>
                      Posted: {randomdate[post.id]}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </ul>
          ))}
        </Flex>
      </Flex>
    </main>
  );
}
