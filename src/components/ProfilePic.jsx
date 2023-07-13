import { Box, Image } from "@mantine/core";
import React from "react";

const ProfilePic = () => {
  return (
    <>
      <Box style={{ padding: "40px" }}>
        <Image mx="auto" src="/my-image.png" alt="Random image" />
      </Box>
    </>
  );
};

export default ProfilePic;
