import React from "react";
import {
  IconBrandGithub,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandJavascript,
  IconBrandNodejs,
  IconBrandMongodb,
} from "@tabler/icons-react";
import { Box, List, Text, ThemeIcon } from "@mantine/core";

const Interests = () => {
  return (
    <>
      <Box mt={"xl"}>
        <Text sx={{ fontSize: "1.7rem" }} color="white" fw={700} tt="uppercase">
          Skills
        </Text>

        <List spacing="xs" size="md" center withPadding>
          <List.Item
            icon={
              <ThemeIcon color="blue.3" size={30} radius="xl">
                <IconBrandReact size="1.3rem" />
              </ThemeIcon>
            }
          >
            <Text color="white" fw={700}>
              React JS
            </Text>
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="dark" size={30} radius="xl">
                <IconBrandNextjs size="1.3rem" />
              </ThemeIcon>
            }
          >
            <Text color="white" fw={700}>
              Next JS
            </Text>
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="yellow" size={30} radius="xl">
                <IconBrandJavascript size="1.3rem" />
              </ThemeIcon>
            }
          >
            <Text color="white" fw={700}>
              Javascript
            </Text>
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="dark" size={30} radius="xl">
                <IconBrandGithub size="1.3rem" />
              </ThemeIcon>
            }
          >
            <Text color="white" fw={700}>
              Git
            </Text>
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="green" size={30} radius="xl">
                <IconBrandNodejs size="1.3rem" />
              </ThemeIcon>
            }
          >
            <Text color="white" fw={700}>
              NodeJS
            </Text>
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="green" size={30} radius="xl">
                <IconBrandMongodb size="1.3rem" />
              </ThemeIcon>
            }
          >
            <Text color="white" fw={700}>
              MongoDB
            </Text>
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="blue" size={30} radius="xl">
                <IconBrandJavascript size="1.3rem" />
              </ThemeIcon>
            }
          >
            <Text color="white" fw={700}>
              Css
            </Text>
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="red" size={30} radius="xl">
                <IconBrandJavascript size="1.3rem" />
              </ThemeIcon>
            }
          >
            <Text color="white" fw={700}>
              HTML
            </Text>
          </List.Item>
        </List>
      </Box>
    </>
  );
};

export default Interests;
