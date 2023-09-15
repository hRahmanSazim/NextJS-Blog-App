import { Post } from "@/types";
import Link from "next/link";
import Image from "next/image";
interface Props {
  postData: Post[];
}

const PostList = ({ postData }: Props) => {
  return (
    <div className="flex flex-col gap-10 h-full">
      {postData.map((post) => (
        <div key={post.id} className="flex flex-row gap-x-4">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80"
              alt="tree"
              // className="object-scale-down h-28"
              height={112}
              width={100}
            />
          </div>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
          {/* <p>{post.body}</p> */}
        </div>
      ))}
    </div>
  );
};

export default PostList;
