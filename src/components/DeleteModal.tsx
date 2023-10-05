"use client";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Text, Flex, Group } from "@mantine/core";
import { FormEvent } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase-config";
import { useRouter } from "next/navigation";
import { ParamObjects } from "./EditModal";
import { TbTrashX } from "react-icons/tb";

export default function DeleteModal({ obj }: ParamObjects) {
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  const handlePost = async (event: FormEvent) => {
    close();
    event.preventDefault();
    deletePost();
  };
  const deletePost = async () => {
    await deleteDoc(doc(db, "posts", obj.id));
    router.refresh();
  };
  return (
    <>
      <Modal opened={opened} onClose={close} c={"blue"} size={"50rem"} centered>
        <Flex
          direction={"column"}
          gap={"xl"}
          justify={"center"}
          align={"center"}
        >
          <Group>
            <Text>Are you sure you want to delete your blog post?</Text>
          </Group>
          <Group>
            <Button
              onClick={handlePost}
              bg={"#00BDD7"}
              c={"white"}
              radius={"xl"}
            >
              YES
            </Button>
            <Button
              bg={"#E03131"}
              c={"white"}
              onClick={close}
              w={"4.1rem"}
              radius={"xl"}
            >
              NO
            </Button>
          </Group>
        </Flex>
      </Modal>
      <Button onClick={open} bg={"red"}>
        <TbTrashX size="1.5rem"></TbTrashX>
      </Button>
    </>
  );
}
