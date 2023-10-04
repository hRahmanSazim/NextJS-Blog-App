import { Button, Flex, Text } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";

import { query, collection, getDocs, where } from "firebase/firestore";
import { db } from "@/firebase/firebase-config";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

// console.log(querySnapshot.docs[0].data());
// console.log(res);
// console.log(myUID);
// console.log(res.length);
interface Params {
  params: { id: string };
}
const postsRef = collection(db, "posts");
export default async function UserPostList({ params }: Params) {
  // console.log(localStorage.getItem("myUID"));
  const q = query(postsRef, where("userId", "==", `${params.id}`));

  const res: any = [];
  const querySnapshot = await getDocs(q);
  // console.log(querySnapshot);
  // const posts = querySnapshot.docs;
  querySnapshot.forEach((doc) => {
    //   // let obj = {doc.id:doc.data()}
    //   // doc.data() is never undefined for query doc snapshots
    res.push({
      id: doc.id,
      ...doc.data(),
      created_at: doc.data().created_at.toDate().toDateString(),
    });
  });
  return (
    <Flex w="100%" direction={"column"}>
      {/* <Flex justify={"center"} align={"center"} my={"xl"}>
        <Text size="3rem" fw={700}>
          Recent Posts
        </Text>
      </Flex> */}

      <Flex mt={"sm"} direction={"column"} w={"100%"}>
        {res.map((obj: any) => (
          <ul key={obj.id}>
            <Flex direction={"row"} h={"150px"} mb={"1rem"}>
              <Flex>
                <Flex w={"150px"}>
                  <Image
                    src={obj.cover_photo}
                    alt="post_photo"
                    width={150}
                    height={100}
                  />
                </Flex>
                <Flex direction={"column"}>
                  <Flex direction={"row"} justify={"space-between"}>
                    <Link href={`/blog/${obj.id}`}>
                      <Text size="1.5rem" pl="1.5rem">
                        Title: {obj.title}
                      </Text>
                    </Link>
                    <Flex direction={"row"} gap={"xs"}>
                      <EditModal obj={obj} />
                      <DeleteModal obj={obj} />
                    </Flex>
                  </Flex>

                  <Text w={"500px"} pl={"1.5rem"} lineClamp={3}>
                    {obj.body}
                  </Text>
                  <Text c={"gray"} pl={"1.5rem"} pt={"1rem"}>
                    Posted: {obj.created_at}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </ul>
        ))}
      </Flex>
    </Flex>
  );
}
