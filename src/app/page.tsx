import HomePostList from "@/components/HomePostList";
import { HomeCarousel, Header } from "../components/HomePage";

export default async function Home() {
  return (
    <main>
      <Header />
      <HomeCarousel />
      <HomePostList />
    </main>
  );
}
