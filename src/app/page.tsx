import { HomeCarousel, HeaderDefault } from "../components/HomePage";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

import { Comment, Post, User } from "@/types";

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

  const randomImage = Array.from(
    { length: 300 },
    (max: number = 400, min: number = 300) =>
      Math.floor(Math.random() * (max - min + 1)) + min
  );

  return (
    <main title="Home Page" className="bg-white ">
      <HeaderDefault />

      <HomeCarousel />

      <div className=" w-full h-28 bg-white "></div>
      <div className="flex flex-col w-[964px] m-auto">
        <div className="flex-grow h-14">
          {" "}
          <p className="text-4xl">Recent Posts</p>
        </div>
        {posts.map((post) => (
          <ul key={post.id}>
            <div className="flex flex-row flex-grow h-[250px] mb-4">
              <div className="flex mb-4">
                <div className="w-[250px]">
                  <Image
                    src={`https://picsum.photos/${randomImage[post.id]}`}
                    alt="post_image"
                    width={250}
                    height={250}
                  />
                </div>
                <div className="flex-col">
                  <Link href={`/blog/${post.id}`}>
                    <p className="text-2xl pl-6 ">{post.title}</p>
                  </Link>
                  <p className="text-blue-700 pl-6 text-2xl pt-2">Author </p>
                  <p className="w-[500px] pl-6 ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                  <p className="text-gray-600 pl-6 pt-4">
                    Posted: 23 August, 2023
                  </p>
                </div>
              </div>
            </div>
          </ul>
        ))}
      </div>
    </main>
  );
}
