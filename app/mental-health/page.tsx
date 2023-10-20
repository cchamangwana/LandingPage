"use client";

import React from "react";
import { Box, Container, Text, Image, Heading, Center, Link, Flex } from "@chakra-ui/react";

export default function IntelligentCataloguing() {
    return (
        <>
            <Container maxW={"6xl"} py={8}>
                <Flex
                    flexDirection={{ base: "column", md: "row" }}
                    justifyContent={{ md: "space-between" }}
                    alignItems={{ base: "center", md: "flex-start" }}
                >
                    <Box flex="1" mt={4} mr={{ md: 8 }}>
                        <Heading as="h1" size="xl" mb={6}>
                            Mental Health in Africa
                        </Heading>
                        <Text fontSize="lg" mb={6} textAlign="justify">
                            Mental health problems have become increasingly important in Africa. The turbulent times during the COVID-19 pandemic have drawn attention to issues of depression, self-esteem, suicide, and mental illness across the continent.
                        </Text>
                        <Text fontSize="lg" mb={6} textAlign="justify">
                            The uncertainties, economic challenges, and the enforcement of lockdown measures have taken a toll on people's mental well-being across the continent. However, persistent challenges such as limited funding, cultural barriers, and a shortage of trained professionals continue to hinder progress in Africa's mental health landscape.
                        </Text>
                    </Box>

                    <Box flex="1" mt={{ base: 6, md: 0 }} ml={{ md: "auto" }}>
                        <Image
                            src={"/images/mental-health.png"}
                            alt="IntelSurv Logo"
                            w="6xl"
                            h="auto"
                            mb={4}
                            border="2px solid #f4f4f4"
                            mx="auto"
                        />
                    </Box>
                </Flex>
                <Text fontSize="lg" mb={6} textAlign="justify">
                    To address these issues, our team is curating a comprehensive compilation of publications, news articles, and academic research on mental health in Africa, with a specific focus on Malawi and Kenya. Our objective is to emphasize research interests in this domain and showcase the advancements being made in the field.
                </Text>
                <Text fontSize="lg" mb={6} textAlign="justify">
                    As we make progress in this task, we will publish the catalog and our findings on this page.
                </Text>
                <Text fontSize="lg" mb={6} textAlign="justify">
                    If you would like to talk to us about this initiative, email us at <Link href="mailto:kuyeserai@gmail.com" color="blue.500" fontWeight="bold">
                        kuyeserai@gmail.com
                    </Link>
                </Text>

            </Container>
        </>
    );
}