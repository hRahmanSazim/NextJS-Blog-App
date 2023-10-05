import Image from "next/image";
import { Container, Flex, Button, Text, TextInput } from "@mantine/core";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase-config";
import PostComment from "@/components/PostComment";
import CommentList from "@/components/CommentList";
import { ScrollArea } from "@mantine/core";
// const q = query(postsRef, where("docRef.id", "==", "CA"));
export interface Params {
  params: { id: string };
}

export default async function Blog({ params }: Params) {
  // const postsRef = collection(db, "posts");
  // const [commentBody, setCommentBody] = useState("");
  const docRef = doc(db, "posts", `${params.id}`);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    console.log("No such document!");
  }

  // async function getPost(): Promise<Post> {
  //   const { data } = await axios.get<GetPostResponse>(
  //     `https://dummyjson.com/posts/${params.id}`
  //   );
  //   return data;
  // }
  // const post = await getPost();

  // async function getUser(num: string = params.id): Promise<User> {
  //   const { data } = await axios.get<GetUserResponse>(
  //     `https://dummyjson.com/users/${num}`
  //   );
  //   return data;
  // }
  // const user = await getUser();

  // const userOne = await getUser(String(Number(params.id) + 1));
  // const userThree = await getUser(String(Number(params.id) + 3));
  // const userTwo = await getUser(String(Number(params.id) + 2));

  // async function getComment(num: number): Promise<Comment> {
  //   const { data } = await axios.get<GetCommentResponse>(
  //     `https://dummyjson.com/comments/${num}`
  //   );
  //   return data;
  // }
  // const commentIdArray = Array.from({ length: 3 }, () =>
  //   Math.floor(Math.random() * 330)
  // );
  // const commentOne = await getComment(commentIdArray[0]);
  // const commentTwo = await getComment(commentIdArray[1]);
  // const commentThree = await getComment(commentIdArray[2]);

  return (
    <Container fluid>
      <Flex h={449} p={0}>
        <Image
          src={`${docSnap.data()?.cover_photo}`}
          alt="image"
          height={449}
          width={2000}
          objectFit="cover"
        ></Image>
      </Flex>
      <Flex
        h={"100vh"}
        w={"80%"}
        m={"auto"}
        gap={"2rem"}
        direction={"column"}
        // bg={"grape"}
      >
        <Flex direction={"row"} h={"3.5rem"} mt={"xl"}>
          <Text size="3rem" lineClamp={1}>
            {docSnap.data()?.title}
          </Text>
        </Flex>
        <Flex>
          <Flex w={"4rem"} h={"4rem"}>
            <Image
              src={docSnap.data()?.user.avatar}
              alt="avatar"
              width={80}
              height={80}
            ></Image>
          </Flex>
          <Flex
            w={"14rem"}
            h={"5rem"}
            pt={"1.5rem"}
            pl={"1rem"}
            direction={"column"}
          >
            <Text size="xl">
              {"Author: " +
                docSnap.data()?.user.firstName +
                " " +
                docSnap.data()?.user.lastName}
            </Text>
            <Text c={"gray"}>
              Posted: {docSnap.data()?.created_at.toDate().toDateString()}
            </Text>
          </Flex>
        </Flex>
        <Flex direction={"row"} h={"60%"}>
          <ScrollArea h={"80%"} type="auto" scrollbarSize={12}>
            <Text size="1.5rem">{docSnap.data()?.body}</Text>
          </ScrollArea>
        </Flex>
        <Flex direction={"row"} w={"100%"} h={"100%"}>
          <Flex direction={"column"} w={"45%"} h={"100%"}>
            <Flex mb={"1rem"}>
              <Flex
                w={"30rem"}
                direction={"column"}
                h={"20rem"}
                // mt={"6rem"}
                justify={"flex-start"}
              >
                <Text size="2rem" pb={"1rem"}>
                  Comments
                </Text>
                <PostComment params={params} />
              </Flex>
            </Flex>
          </Flex>
          <Flex w={"55%"} h={"100%"} direction={"column"}>
            <Flex direction={"row"} w={"100%"} h={"20%"} gap={"xs"}>
              <Text size="2rem" c={"gray"}>
                Recent
              </Text>
              <Text size="2rem" c={"gray"}>
                Comments
              </Text>
            </Flex>

            <CommentList params={params} />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}
