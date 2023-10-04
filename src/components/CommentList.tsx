import { Flex, Text } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import {
  query,
  orderBy,
  limit,
  collection,
  getDocs,
  doc,
  where,
} from "firebase/firestore";
import { db } from "@/firebase/firebase-config";
import { Params } from "@/app/blog/[id]/page";
import StarComponent from "./StarComponent";
const postsRef = collection(db, "posts");

export default async function CommentList({ params }: Params) {
  //   const q = query(collection(db, "posts"), `${params.id}`, "comments");
  const commentsRef = collection(postsRef, `${params.id}`, "comments");

  const q = query(commentsRef, orderBy("created_at", "desc"), limit(3));

  const res: any = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    res.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return (
    <Flex direction={"column"} justify={"center"} align={"center"} ml={"lg"}>
      <Flex w="100%" direction={"column"}>
        {res.map((obj: any) => (
          <ul key={obj.id}>
            <Flex direction={"row"} h={"50%"} mb={"1rem"}>
              <Image
                src={obj.avatar}
                alt="avatar"
                width={40}
                height={20}
              ></Image>
              <Flex mb={"1rem"}>
                <Flex direction={"column"} gap={"sm"}>
                  <Text c={"black"} pl={"1.5rem"} size="1.5rem" pt={"0.5rem"}>
                    Author: {obj.firstName} {obj.lastName}{" "}
                  </Text>
                  <Flex ml={"1.2rem"}>
                    <StarComponent />
                  </Flex>
                  <Link href={`/blog/${obj.id}`}>
                    <Text size="1.5rem" pl="1.5rem" lineClamp={2}>
                      {obj.body}
                    </Text>
                  </Link>

                  {/* <Text c={"gray"} pl={"1.5rem"} pt={"1rem"}>
                    Posted: {obj.created_at.toDate().toDateString()}
                  </Text> */}
                </Flex>
              </Flex>
            </Flex>
          </ul>
        ))}
      </Flex>
    </Flex>
  );
}
