"use client"

import React from "react";
import { Box, Heading, Text, Link, Container, Image, Center, Button } from "@chakra-ui/react";
import NextLink from 'next/link'

function App() {
    const link = "https://intelsurv.vercel.app"
    return (
        <Container maxW={"6xl"} py={8}>
            <Box p={4}>
                <Heading as="h1" size="xl">
                    IntelSurv - Disease Surveillance and Training
                </Heading>
                <Text mt={4} textAlign="justify">
                    IntelSurv leverages the power of language models to bring custom training to health professionals involved in data collection for disease surveillance. We collected valuable insights from health professionals in Malawi who are involved in disease surveillance in order to understand how they used Case Based Surveillance and Reporting forms, what aspects of the data collection processes were challenging, and what kind of support and training was needed. Based on the information obtained, IntelSurv integrates the knowledge gathered from health professionals with Language Models (LLMs). This integration allows us to offer on-the-ground training and support during disease surveillance and data collection activities. With IntelSurv, health professionals can seek clarifications regarding case definitions for diseases of interest. Additionally, the tool assists in enhancing their understanding of the significance of key data collection fields and their relevance to specific diseases.
                </Text>
                <Text mt={4} textAlign="justify">
                    Try the tool <Link color="blue.500" fontWeight="bold" isExternal href={link}>here</Link>. As a case study, we focus on the Malawi Integrated Disease Surveillance and Reporting Case-Based Form and its fields and on COVID-19.
                </Text>
                <Text mt={4} textAlign="justify">
                    The development of this tool was supported via a grant from <Link isExternal href={"https://www.gatesfoundation.org"} fontWeight="bold" color="blue.500">BMGF</Link>.
                </Text>
            </Box>

            <NextLink href={link} target="_blank">
                <Image
                    src={"/images/intelsurv.png"}
                    alt="IntelSurv Logo"
                    w="6xl"
                    h="auto"
                    mb={4}
                />
            </NextLink>
            <Center p={6}>
                <Link
                    href={link}
                    isExternal
                    fontWeight="bold"
                    display="inline-block"
                    textAlign="center"
                >
                    <Button color="blue.500" variant={"ghost"}>Go to Intelsurv</Button>
                </Link>

            </Center>
        </Container>
    );
}

export default App;
