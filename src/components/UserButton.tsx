import { forwardRef } from "react";
import {
  Group,
  Avatar,
  Text,
  Menu,
  UnstyledButton,
  Button,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface MyButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

// eslint-disable-next-line react/display-name
const MyButton = forwardRef<HTMLButtonElement, MyButtonProps>(
  ({ image, name, email, icon, ...others }: MyButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      style={{
        padding: "var(--mantine-spacing-xs)",
        color: "var(--mantine-color-text)",
        borderRadius: "var(--mantine-radius-xs)",
      }}
      {...others}
    >
      <Group>
        <Avatar src={image} radius="xl" bg={"black"} />

        <div style={{ flex: 1 }}>
          <Text size="md" fw={500}>
            {name}
          </Text>

          <Text c="white" size="xs">
            {email}
          </Text>
        </div>

        {/* {icon || <IconChevronRight size="1rem" />} */}
      </Group>
    </UnstyledButton>
  )
);

export default function UserButton() {
  const router = useRouter();
  const pathname = usePathname();
  const logout = () => {
    localStorage.clear();
    if (pathname === "/") {
      router.refresh();
    } else {
      router.push("/");
    }
  };
  return (
    <Menu withArrow>
      <Menu.Target>
        <MyButton
          image={`${localStorage.getItem("avatar")}`}
          name={`${localStorage.getItem(
            "firstName"
          )} ${" "} ${localStorage.getItem("lastName")}`}
          email={`${localStorage.getItem("email")}`}
        />
      </Menu.Target>
      <Menu.Dropdown bg={"blue"}>
        <Menu.Item bg={"blue"}>
          <Button onClick={logout} size="1rem" h={"1.5rem"}>
            Logout{" "}
          </Button>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
