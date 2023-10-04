import { Flex, Text } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { query, orderBy, limit, collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase-config";

const q = query(
  collection(db, "posts"),
  orderBy("created_at", "desc"),
  limit(10)
);
const res: any = [];
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  res.push({
    id: doc.id,
    ...doc.data(),
  });
});

const HomePostList = () => {
  return (
    <Flex w="100%" h={"100%"} direction={"column"}>
      <Flex justify={"center"} align={"center"} my={"xl"}>
        <Text size="3rem" fw={700}>
          Recent Posts
        </Text>
      </Flex>

      <Flex w="80rem" justify={"center"} align={"center"} direction={"column"}>
        {res.map((obj: any) => (
          <ul key={obj.id}>
            <Flex direction={"row"} h={"250px"} mb={"1rem"}>
              <Flex mb={"1rem"}>
                <Flex w={"250px"}>
                  <Image
                    src={obj.cover_photo}
                    alt="post_photo"
                    width={250}
                    height={250}
                  />
                </Flex>
                <Flex direction={"column"}>
                  <Link href={`/blog/${obj.id}`}>
                    <Text size="1.5rem" pl="1.5rem">
                      {obj.title}
                    </Text>
                  </Link>
                  <Text c={"blue"} pl={"1.5rem"} size="1.5rem" pt={"0.5rem"}>
                    Author: {obj.user.firstName} {obj.user.lastName}
                  </Text>
                  <Text w={"500px"} pl={"1.5rem"} lineClamp={5}>
                    {obj.body}
                  </Text>
                  <Text c={"gray"} pl={"1.5rem"} pt={"1rem"}>
                    Posted: {obj.created_at.toDate().toDateString()}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </ul>
        ))}
      </Flex>
    </Flex>
  );
};

export default HomePostList;
