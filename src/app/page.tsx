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
      <div className=" w-full h-28 bg-white "></div>
      <div className="flex flex-col w-[964px] m-auto">
        <div className="flex-grow h-14">
          {" "}
          <p className="text-2xl">Recent Posts</p>
        </div>
        {posts.map((post) => (
          <li key={post.id}>
            <div className="flex-grow h-[250px] bg-blue-100 mb-4">
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </div>
          </li>
        ))}
        {/* <div className="flex-grow h-[250px] bg-blue-100 mb-4"> */}
        {/* <Link
            href={{
              pathname: "/blog/[id]",
            }}
          >
            going to blog page
          </Link> */}
        {/* <Link href={`/blog/${posts[1].id}`}>Dashboard</Link> */}
        {/* </div>
        <div className="flex-grow h-[250px] bg-green-100 mb-4"></div>
        <div className="flex-grow h-[250px] bg-red-100 mb-4"></div> */}
      </div>

      {/* <Link href={`/blog/${posts.id}`}>go to new page</Link> */}
    </main>
  );
}
