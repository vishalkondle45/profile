import { Container, Divider, Grid, Image } from "@mantine/core";
import ContactInfo from "./components/ContactInfo";
import Title from "./components/Title";
import ProfilePic from "./components/ProfilePic";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
  return (
    <>
      <Container py={"xl"}>
        <Grid sx={{ border: "5px solid black" }}>
          <Grid.Col
            span={4}
            bg={"blue.9"}
            sx={{ borderRight: "5px solid black" }}
          >
            <ProfilePic />
            <Divider my="sm" />
            <ContactInfo />
            <Divider my="sm" />
            <Skills />
            <Divider my="sm" />
            <Image
              mx="auto"
              mt={"xl"}
              pt={"xl"}
              maw={240}
              src="./qr_localhost.png"
              alt="Random image"
              caption="Scan for URL"
            />
          </Grid.Col>
          <Grid.Col pl={"xl"} span={8}>
            <Title />
            <Divider my="sm" />
            <Experience />
            <Divider my="sm" />
            <Projects />
            <Divider my="sm" />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}

export default App;
