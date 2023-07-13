import React from "react";
import {
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
  IconPhone,
  IconBrandGithub,
} from "@tabler/icons-react";
import { Box, List, Text, ThemeIcon } from "@mantine/core";

const ContactInfo = () => {
  return (
    <>
      <Box>
        <Text sx={{ fontSize: "1.7rem" }} color="white" fw={700} tt="uppercase">
          Contact Info
        </Text>

        <List spacing="xs" size="md" center>
          <List.Item
            icon={
              <ThemeIcon color="green" size={30} radius="xl">
                <IconPhone size="1.3rem" />
              </ThemeIcon>
            }
          >
            <Text color="white">+91 7276718848</Text>
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="red" size={30} radius="xl">
                <IconMail size="1.3rem" />
              </ThemeIcon>
            }
          >
            <Text color="white">vishal.kondle@gmail.com</Text>
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="blue" size={30} radius="xl">
                <IconBrandLinkedin size="1.3rem" />
              </ThemeIcon>
            }
          >
            <Text color="white">www.linkedin.com/in/vishal-kondle/</Text>
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="yellow" size={30} radius="xl">
                <IconMapPin size="1.3rem" />
              </ThemeIcon>
            }
          >
            <Text color="white">Hyderabad, Telangana</Text>
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="black" size={30} radius="xl">
                <IconBrandGithub size="1.3rem" />
              </ThemeIcon>
            }
          >
            <Text color="white">https://github.com/vishalkondle45</Text>
          </List.Item>
        </List>
      </Box>
    </>
  );
};

export default ContactInfo;
