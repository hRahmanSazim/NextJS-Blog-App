import { HomeCarousel, HeaderDefault } from "../components/HomePage";
import axios from "axios";
import Link from "next/link";
import PostList from "../components/PostList";
import { Comment, Post, User } from "@/types";

interface GetPostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}
interface GetUsersResponse {
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

async function getUsers(): Promise<User[]> {
  const { data } = await axios.get<GetUsersResponse>(
    "https://dummyjson.com/users"
  );
  return data.users;
}
async function getPosts(): Promise<Post[]> {
  const { data } = await axios.get<GetPostsResponse>(
    "https://dummyjson.com/posts?limit=5"
  );
  return data.posts;
}
async function getComments(): Promise<Comment[]> {
  const { data } = await axios.get<GetCommentsResponse>(
    "https://dummyjson.com/comments"
  );
  return data.comments;
}
// async function getImages() {
//   const { data } = await axios.get("https://dummyjson.com/products?limit=5");
//   return data.products;
// }

export default async function Home() {
  const users = await getUsers();
  const comments = await getComments();
  const posts = await getPosts();

  // const link = "https://dummyjson.com/products?limit=10";
  // const res = await fetch(link);
  // const data = await res.json();
  // const products = await getImages();

  return (
    <main title="Home Page" className="bg-white ">
      {/* {products.map((product) => (
          <CarouselItem key={product.id}>
            <Image src={product.thumbnail} alt={product.title} />
          </CarouselItem>
        ))} */}
      <HeaderDefault />
      <HomeCarousel />
      {/* <div className="bg-red-100 flex items-center h-80 w-full"></div> */}
      <div className=" w-full h-28 bg-blue-gray-200 "></div>
      <div className="flex flex-col w-full h-68 justify-center items-center gap-6 pt-14">
        {/* <p className="p-10">Recent Posts</p> */}
        <div className="flex">
          {" "}
          <p className="pr-80 text-3xl">RECENT POSTS</p>
        </div>
        <div className="max-w-full h-full">
          <PostList postData={posts} />
        </div>
      </div>
      {/* <Link href={`/blog/${posts.id}`}>go to new page</Link> */}
    </main>
  );
}
