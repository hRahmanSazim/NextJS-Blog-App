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
    <Flex
      w="100%"
      h={"100%"}
      direction={"column"}
      justify={"center"}
      align={"center"}
    >
      <Flex w={"60%"}>
        <Flex justify={"flex-start"} align={"flex-start"} my={"xl"} w={"80%"}>
          <Text size="3rem" fw={700}>
            Recent Posts
          </Text>
        </Flex>
      </Flex>

      <Flex w="60%" justify={"center"} align={"center"} direction={"column"}>
        <Flex w="100%" direction={"column"}>
          {res.map((obj: any) => (
            <ul key={obj.id}>
              <Flex direction={"row"} h={"14rem"} mb={"1rem"} w={"100%"}>
                <Flex mb={"1rem"} w={"100%"}>
                  <Flex w={"250px"}>
                    <Image
                      src={obj.cover_photo}
                      alt="post_photo"
                      width={250}
                      height={250}
                    />
                  </Flex>
                  <Flex direction={"column"} w={"100%"} wrap={"wrap"}>
                    <Link href={`/blog/${obj.id}`}>
                      <Text size="1.8rem" pl="1.5rem" lineClamp={1}>
                        {obj.title.substring(0, 25)}
                      </Text>
                    </Link>
                    <Text c={"blue"} pl={"1.5rem"} size="1.3rem" pt={"0.5rem"}>
                      Author: {obj.user.firstName} {obj.user.lastName}
                    </Text>
                    <Flex h={"50%"}>
                      <Text pl={"1.5rem"}>{obj.body.substring(0, 480)}</Text>
                    </Flex>
                    <Flex align={"flex-end"}>
                      <Text c={"gray"} pl={"1.5rem"} pt={"1rem"}>
                        Posted: {obj.created_at.toDate().toDateString()}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </ul>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomePostList;
