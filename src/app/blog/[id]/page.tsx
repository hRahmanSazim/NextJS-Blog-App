import Image from "next/image";

import { Container, Flex, Button, Text, TextInput } from "@mantine/core";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase-config";

// const q = query(postsRef, where("docRef.id", "==", "CA"));
export interface Params {
  params: { id: string };
}
// interface GetPostResponse extends Post {}
// interface GetUserResponse extends User {}
// interface GetCommentResponse extends Comment {}

// const randomComment = () => Math.floor(Math.random() * (300 - 1)) + 1;

export default async function Blog({ params }: Params) {
  // console.log(params.id);
  // const postsRef = collection(db, "posts");
  // const [commentBody, setCommentBody] = useState("");
  const docRef = doc(db, "posts", `${params.id}`);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    console.log("No such document!");
  }
  const commentsRef = collection(
    doc(collection(db, "posts"), `${params.id}`),
    "comments"
  );

  const handleComment = async () => {
    if (localStorage.getItem("myUID") !== null) {
      await addDoc(commentsRef, {
        firstName: localStorage.getItem("firstName"),
        lastName: localStorage.getItem("lastName"),
        avatar: localStorage.getItem("avatar"),
        body: "commentBody",
        userID: localStorage.getItem("myUID"),
      });
    }
  };

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
        w={"959px"}
        m={"auto"}
        gap={"2rem"}
        direction={"column"}
      >
        <Flex direction={"row"} h={"14rem"} bg={"white"} pt={"6rem"}></Flex>

        <Flex direction={"row"} h={"3.5rem"} pb={"1.5rem"}>
          <Text size="3rem">{docSnap.data()?.title}</Text>
        </Flex>
        <Flex pt={"1rem"} pb={"2rem"}>
          <Flex w={"5rem"} h={"5rem"}>
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
        <Flex direction={"row"} h={"652px"}>
          <Text size="1.5rem">{docSnap.data()?.body}</Text>
        </Flex>
        <Flex direction={"row"} h={"600px"}>
          <Flex mb={"1rem"}>
            <Flex
              w={"30rem"}
              direction={"column"}
              h={"20rem"}
              mt={"6rem"}
              justify={"center"}
            >
              <Text size="2rem" pb={"1rem"}>
                Comments
              </Text>
              <TextInput
                // className="h-[120px] w-11/12 border-gray-300 border-4 "
                placeholder="Your comments...."
                h={"60px"}
                // size="2rem"
                label=""
              />
              <Flex>
                <Button bg={"blue"} w={"4.5rem"} h={"2.25rem"} c={"white"}>
                  Post
                </Button>
              </Flex>
            </Flex>
            <Flex h={"10rem"} bg={"yellow"}>
              {/* <div className="flex flex-col gap-4">
                <p className="text-3xl text-gray-700">Recent Comments</p>
                <div className="w-11/12 h-[119px] border-2 border-gray-200">
                  <div className="flex w-3/4 pl-1">
                    <div className=" w-20 h-20 rounded-full pr-2">
                      <Image
                        src={userOne.image}
                        alt="avatar 1"
                        width={60}
                        height={60}
                      ></Image>
                    </div>
                    <div className="flex-col">
                      <div className="w-3/4 h-12">
                        <p>{commentOne.user.username}</p>
                      </div>
                      <div>
                        <StarComponent />
                      </div>
                      <div>
                        <p>{commentOne.body}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="  w-11/12 h-[119px] border-2 border-gray-200 ">
                  <div className="flex w-3/4 pl-1">
                    <div className=" w-20 h-20 rounded-full pr-2">
                      <Image
                        src={userTwo.image}
                        alt="avatar 1"
                        width={60}
                        height={60}
                        style={{ objectFit: "contain" }}
                      ></Image>
                    </div>
                    <div className="flex-col">
                      <div className="w-3/4 h-12">
                        <p>{commentTwo.user.username}</p>
                      </div>
                      <div>
                        <StarComponent />
                      </div>
                      <div>
                        <p>{commentTwo.body}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-11/12 h-[119px] border-2 border-gray-200 ">
                  <div className="flex w-3/4 pl-1">
                    <div className=" w-20 h-20 rounded-full pr-2">
                      <Image
                        src={userThree.image}
                        alt="avatar 1"
                        width={60}
                        height={60}
                        style={{ objectFit: "contain" }}
                      ></Image>
                    </div>
                    <div className="flex-col text-justify">
                      <div className="w-3/4 h-12">
                        <p>{commentThree.user.username}</p>
                      </div>
                      <div>
                        <StarComponent />
                      </div>
                      <div>
                        <p>{commentThree.body}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}
