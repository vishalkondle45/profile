import { Box, Group, List, Text, ThemeIcon } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import React from "react";

const Experience = () => {
  return (
    <Box pt={"md"}>
      <Text sx={{ fontSize: "1.7rem" }} fw={700} tt="uppercase">
        Experience
      </Text>
      <Box mt={"xs"}>
        <Group position="apart">
          <Text fw={700} color="blue.9">
            Software Engineer (2 Years)
          </Text>
          <Text fw={700}>Aug 2021 - Present</Text>
        </Group>
        <Text fw={700}>Wipro Technologies, Hyderabad</Text>
        <List
          spacing="xs"
          size="sm"
          mt={"xs"}
          center
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCircleCheck size="1rem" />
            </ThemeIcon>
          }
        >
          <List.Item>
            Developed and maintained React-based user interfaces for a variety
            of web applications.
          </List.Item>
          <List.Item>
            Worked with product designers to create wireframes and prototypes.
          </List.Item>
          <List.Item>Implemented unit and integration tests.</List.Item>
          <List.Item>
            Successfully delivered projects on time and within budget.
          </List.Item>
        </List>
      </Box>
      <Box mt={"xl"}>
        <Group position="apart">
          <Text fw={700} color="blue.9">
            Frontend Developer ( Intern )
          </Text>
          <Text fw={700}>Dec 2020 - June 2021</Text>
        </Group>
        <Text fw={700}>Oskar Technologies, Solapur</Text>
        <List
          spacing="xs"
          size="sm"
          mt={"xs"}
          center
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCircleCheck size="1rem" />
            </ThemeIcon>
          }
        >
          <List.Item>
            Developed a React-based web application for managing customer
            accounts.
          </List.Item>
          <List.Item>
            Worked with a team of engineers to design and implement the
            application.
          </List.Item>
          <List.Item>
            Successfully completed the internship and was offered a full-time
            position.
          </List.Item>
        </List>
      </Box>
    </Box>
  );
};

export default Experience;
