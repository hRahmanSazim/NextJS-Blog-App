import PostList from "@/components/PostList";
import { HomeCarousel, HeaderDefault } from "../components/HomePage";

// interface GetPostsResponse {
//   posts: Post[];
//   total: number;
//   skip: number;
//   limit: number;
// }
// export interface GetUsersResponse {
//   users: User[];
//   total: number;
//   skip: number;
//   limit: number;
// }
// interface GetCommentsResponse {
//   comments: Comment[];
//   total: number;
//   skip: number;
//   limit: number;
// }

// export async function getUsers(): Promise<User[]> {
//   const { data } = await axios.get<GetUsersResponse>(
//     "https://dummyjson.com/users/"
//   );
//   return data.users;
// }
// export async function getPosts(): Promise<Post[]> {
//   const { data } = await axios.get<GetPostsResponse>(
//     "https://dummyjson.com/posts?limit=30"
//   );
//   return data.posts;
// }
// async function getComments(): Promise<Comment[]> {
//   const { data } = await axios.get<GetCommentsResponse>(
//     "https://dummyjson.com/comments"
//   );
//   return data.comments;
// }

export default async function Home() {
  // const posts = await getPosts();
  // const users = await getUsers();

  // const randomImage = Array.from(
  //   { length: 300 },
  //   (max: number = 400, min: number = 300) =>
  //     Math.floor(Math.random() * (max - min + 1)) + min
  // );
  // let count = 0;

  return (
    <main>
      <HeaderDefault />
      <HomeCarousel />
      <PostList />
    </main>
  );
}
