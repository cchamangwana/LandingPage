"use client"


import React from "react";
import {
  Flex,
  Container,
  Heading,
  Box,
  Text,
  useColorModeValue,
  Image,
  Grid, // Import Grid from Chakra UI
} from "@chakra-ui/react";
import EmailUs from "@/components/sections/EmailUs";

const teamMembers = [
  {
    name: "Dr. Amelia Taylor",
    role: "Lead Researcher",
    about:
      "Amelia Taylor leads the research and development activities of the lab. She is a lecturer at MUBAS where she teaches algorithms, AI and software development.",
    image:
      "https://ik.imagekit.io/xnaedr4r6/KAI_Website_Images/DR_Taylor.jpg?updatedAt=1681280858278",
  },
  {
    name: "Moses Gwaza",
    role: "Database Architect",
    about:
      "Moses Gwaza is a Data Analyst/Scientist who is part of the team supporting data and databases development, including ETL processes.",
    image:
      "https://ik.imagekit.io/xnaedr4r6/KAI_Website_Images/M_Gwaza.jpg?updatedAt=1681199613614",
  },
  {
    name: "Chimwemwe Chamangwana",
    role: "Software Engineer",
    about:
      "Chimwemwe is a dedicated software engineer, driven by a profound fascination for web technologies and cloud computing.",
    image:
      "https://ik.imagekit.io/xnaedr4r6/KAI_Website_Images/Chim%20Chamangwana.jpg?updatedAt=1690997628532",
  },
  {
    name: "Macphail Magwira",
    role: "Software Engineer",
    about:
      "Macphail excels at unraveling technical challenges and devising innovative solutions, driven by a deep-seated passion for problem-solving.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/intelsurv-25.appspot.com/o/1642763944684.jpg?alt=media&token=162e63c7-1ba5-42d2-9ae6-029c7f0bf655&_gl=1*h7yvbj*_ga*MTU1MDgxODYzMS4xNjY2NzE5NTk5*_ga_CW55HF8NVT*MTY5NjQxODA5MC4yNzEuMS4xNjk2NDE4MjExLjcuMC4w"
  },
  {
    name: "Grey Mengezi",
    role: "Software Developer",
    about:
      "Grey Mengezi joined AI Lab as a software developer. His main area of interest is developing solutions for analyzing and presenting AI Data.",
    image:
      "https://ik.imagekit.io/xnaedr4r6/KAI_Website_Images/G_Mengezi.jpg?updatedAt=1681203970273",
  },
  {
    name: "Evelyn Chapuma",
    role: "Data Analyst",
    about:
      "Evelyn Chapuma is a Computer Engineer. She works in data collection, data cataloguing and analysis",
    image:
      "https://ik.imagekit.io/xnaedr4r6/KAI_Website_Images/E_Chapuma.jpg?updatedAt=1681305499256",
  },
  {
    name: "Alinafe Lipenga",
    role: "Intern",
    about:
      "Alinafe Lipenga has a Diploma in Biomedical Engineering and now studying for a BSc in Biomedical Engineering. She worked as an Intern over 2021-2022 and was involved with data annotation, searching and cataloguing.",
    image:
      "https://ik.imagekit.io/xnaedr4r6/KAI_Website_Images/Alinafe%20Lipenga.jpg?updatedAt=1690962066806",
  },
  {
    name: "Ben Chapuma",
    role: "Intern",
    about: "Ben Chapuma is a second year student at Malawi University of Business and Applied Sciences pursuing a bachelor's degree in Electronics and Computer engineering. Works on data analysis and data entry.",
    // image:
    //   "https://via.placeholder.com/200"
    image:
      "/images/ben-chapuma.jpeg"
  },

];

export default function Contact() {
  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Container maxW={"6xl"} py={12} px={6}>
          <Flex align={"center"} direction={"column"}>
            <Heading fontSize={"4xl"}>Our Team</Heading>
            <Text fontSize={"lg"} color={"gray.600"} mt={2}>
              Meet our team members
            </Text>
          </Flex>
          <Grid
            templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
            gap={4}
            mt={8}
          >
            {teamMembers.map((member, index) => (
              <Box key={index} textAlign="center">
                <Image
                  src={member.image}
                  alt={member.name}
                  borderRadius={"full"}
                  boxSize="200px"
                  objectFit="cover"
                  mx={"auto"}
                />
                <Heading fontSize="xl" mt={2}>
                  {member.name}
                </Heading>
                <Text mt={2} fontSize="sm" fontWeight={"semibold"}>
                  {member.role}
                </Text>
                <Text mt={2}>{member.about}</Text>
              </Box>
            ))}
          </Grid>
        </Container>
      </Flex>
      <EmailUs />
    </>
  );
}
