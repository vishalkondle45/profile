import {
  Avatar,
  Badge,
  Box,
  Button,
  Group,
  List,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { IconBrandGithub, IconCircleCheck } from "@tabler/icons-react";
import React from "react";

const Projects = () => {
  return (
    <Box pt={"md"} mb={"xl"}>
      <Text sx={{ fontSize: "1.7rem" }} fw={700} tt="uppercase">
        Projects
      </Text>
      <Box mt={"xs"}>
        <Group position="apart">
          <Text fw={700} color="blue.9">
            Personal Profile Page
          </Text>

          <Button
            color="blue"
            variant="subtle"
            leftIcon={
              <ThemeIcon color="black" size={24} radius="xl">
                <IconBrandGithub size="1rem" />
              </ThemeIcon>
            }
            component="a"
            href="https://github.com/vishalkondle45/profile"
            target="_blank"
          >
            Repository
          </Button>
        </Group>
        <List
          spacing="xs"
          size="sm"
          my={"xs"}
          center
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCircleCheck size="1rem" />
            </ThemeIcon>
          }
        >
          <List.Item>
            This is my Personal Profile Page where anybody can see my
            professional profile.
          </List.Item>
          <List.Item>
            Purely static application, Not used any backend/database.
          </List.Item>
          <List.Item>Deployment</List.Item>
        </List>
        <Group
          position="apart"
          //   spacing="xl"
        >
          <Badge
            pl={0}
            size="lg"
            color="blue.4"
            radius="xl"
            leftSection={
              <Avatar
                alt="Avatar for badge"
                size={24}
                mr={5}
                src="./react.png"
              />
            }
          >
            ReactJS
          </Badge>
          <Badge
            pl={0}
            size="lg"
            color="yellow"
            radius="xl"
            leftSection={
              <Avatar alt="Avatar for badge" size={24} mr={5} src="./js.svg" />
            }
          >
            Javascript
          </Badge>

          <Badge
            pl={0}
            size="lg"
            color="blue"
            radius="xl"
            leftSection={
              <Avatar alt="Avatar for badge" size={24} mr={5} src="./css.png" />
            }
          >
            CSS
          </Badge>
          <Badge
            pl={0}
            size="lg"
            color="red"
            radius="xl"
            leftSection={
              <Avatar
                alt="Avatar for badge"
                size={24}
                mr={5}
                src="./html.webp"
              />
            }
          >
            HTML
          </Badge>
          <Badge
            pl={0}
            size="lg"
            color="green"
            radius="xl"
            leftSection={
              <Avatar
                alt="Avatar for badge"
                size={24}
                mr={5}
                src="./nodejs.png"
              />
            }
          >
            NodeJS
          </Badge>
        </Group>
      </Box>
      <Box mt={"xl"}>
        <Group position="apart">
          <Text fw={700} color="blue.9">
            Banking Application
          </Text>

          <Button
            color="blue"
            variant="subtle"
            leftIcon={
              <ThemeIcon color="black" size={24} radius="xl">
                <IconBrandGithub size="1rem" />
              </ThemeIcon>
            }
            component="a"
            href="https://github.com/vishalkondle45/sbu-funds"
            target="_blank"
          >
            Repository
          </Button>
        </Group>
        <List
          spacing="xs"
          size="sm"
          my={"xs"}
          center
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCircleCheck size="1rem" />
            </ThemeIcon>
          }
        >
          <List.Item>
            A banking application where customers can fetch there balance and
            transactions.
          </List.Item>
          <List.Item>
            Bank can create accounts and make transactions to them.
          </List.Item>
          <List.Item>Authorization and Authentication.</List.Item>
          <List.Item>Deployment</List.Item>
        </List>
        <Group position="apart">
          <Badge
            pl={0}
            size="lg"
            color="dark"
            radius="xl"
            leftSection={
              <Avatar
                alt="Avatar for badge"
                size={24}
                mr={5}
                src="./nextjs.png"
              />
            }
          >
            NextJS
          </Badge>
          <Badge
            pl={0}
            size="lg"
            color="blue.4"
            radius="xl"
            leftSection={
              <Avatar
                alt="Avatar for badge"
                size={24}
                mr={5}
                src="./react.png"
              />
            }
          >
            ReactJS
          </Badge>
          <Badge
            pl={0}
            size="lg"
            color="yellow"
            radius="xl"
            leftSection={
              <Avatar alt="Avatar for badge" size={24} mr={5} src="./js.svg" />
            }
          >
            Javascript
          </Badge>

          <Badge
            pl={0}
            size="lg"
            color="blue"
            radius="xl"
            leftSection={
              <Avatar alt="Avatar for badge" size={24} mr={5} src="./css.png" />
            }
          >
            CSS
          </Badge>
          <Badge
            pl={0}
            size="lg"
            color="green"
            radius="xl"
            leftSection={
              <Avatar
                alt="Avatar for badge"
                size={24}
                mr={5}
                src="./nodejs.png"
              />
            }
          >
            NodeJS
          </Badge>
        </Group>
      </Box>
    </Box>
  );
};

export default Projects;
