import HomePostList from "@/components/HomePostList";
import { HomeCarousel, HeaderDefault } from "../components/HomePage";

export default async function Home() {
  return (
    <main>
      <HeaderDefault />
      <HomeCarousel />
      <HomePostList />
    </main>
  );
}
