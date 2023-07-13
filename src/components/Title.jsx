import { Box, Text } from "@mantine/core";
import React from "react";

const Title = () => {
  return (
    <>
      <Box mt={"lg"}>
        <Text fw={700} tt="uppercase" sx={{ fontSize: "5rem" }}>
          Vishal
        </Text>
        <Text
          fw={700}
          tt="uppercase"
          sx={{ fontSize: "5rem", marginTop: "-3rem" }}
        >
          Kondle
        </Text>
        <Text
          fw={700}
          style={{ fontSize: "2rem", marginTop: "-1rem" }}
          c="dimmed"
          fs="italic"
        >
          ReactJS Developer
        </Text>
      </Box>
    </>
  );
};

export default Title;
