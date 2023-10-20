"use client"

import React from "react";
import {
    Box,
    Container,
    Text,
    Image,
    Heading,
    Link,
    Button,
    Flex,
    Center,
} from "@chakra-ui/react";

import NextLink from "next/link"

const QuestMapPage = () => {
    const link = "https://questmap-mubas.web.app";

    return (
        <Container maxW={"6xl"} py={8}>
            <Flex
                flexDirection={{ base: "column", md: "row" }}
                justifyContent={{ md: "space-between" }}
                alignItems={{ base: "center", md: "flex-start" }}
            >
                <Box flex="1" mt={4} mr={{ md: 8 }}>
                    <Heading as="h2">
                        QuestMap
                    </Heading>
                    <Text mt={4} textAlign="justify">
                        Using and comparing data collected through questionnaires can be a
                        valuable method for gathering information. In our recent research study,
                        we examined COVID-19 data collected via the Integrated Disease
                        Surveillance and Reporting Case Based Form in Malawi and Kenya. We found
                        that while this form was based on the WHO CRF form intended for global
                        use, there were notable challenges associated with its implementation
                        for data collection purposes. These challenges had an impact on the
                        quality and reliability of the data, as well as subsequent analyses
                        conducted based on it.
                    </Text>
                </Box>
                <Box flex="1" mt={{ base: 6, md: 0 }} ml={{ md: "auto" }}>
                    <Text
                        fontSize="sm"
                        pt={2}
                        pb={2}
                        color="gray.600"
                        fontWeight="semibold"
                        textAlign="center"
                    >
                        (Screenshot of QuestMap)
                    </Text>
                    <NextLink href={link} target="_blank">
                        <Image
                            src={"/images/questmap.png"}
                            alt="QuestMap Screenshot"
                            w="100%"
                            h="auto"
                            mb={4}
                            border="2px solid #010101"
                            mx="auto"
                        />
                    </NextLink>
                </Box>
            </Flex>
            <Text mt={4} textAlign="justify">
                A variety of challenges were linked to the design of the form itself.
                Some questions were not adequately clear to participants or were
                susceptible to misinterpretation, leading to variations in data accuracy
                and reliability. Additionally, poor utilization of the form was observed,
                often originating from a lack of training and familiarity with the
                specific form fields. Ensuring the validity and reliability of
                questionnaire data is of utmost importance. Validity ensures that the
                questionnaire accurately measures what it intends to measure, while
                reliability focuses on the consistency and stability of the
                questionnaire's results over time. Poorly designed questions or
                inconsistent administration can compromise the data's validity and
                reliability.
            </Text>
            <Text mt={4} textAlign="justify">
                To tackle these challenges, we have developed a tool called QuestMap. It
                enables helpful comparisons across various questionnaires for Disease
                Surveillance utilized worldwide, with a particular focus on Africa. This
                tool allows for the identification of shared fields, best practices, and
                could potentially contribute to improving definitions and guidelines for
                the use of these forms. We have also incorporated health concepts from
                medical vocabularies such as SNOMED to facilitate the standardization of
                questionnaires.
            </Text>
            <Text mt={4} textAlign="justify">
                If you are interested, you can preview and test the QuestMap tool
                through this{" "}
                <Link href={link} isExternal color="blue.500" fontWeight="bold">
                    link
                </Link>
                . We would also be delighted to discuss this initiative further. Feel
                free to reach out to us via email at{" "}
                <Link href="mailto:kuyeserai@gmail.com" color="blue.500" fontWeight="bold">
                    kuyeserai@gmail.com
                </Link>
                , and we will be more than happy to talk to you.
            </Text>
            <Text mt={4} textAlign="justify">
                The development of this tool was made possible by a <Link isExternal href="https://gcgh.grandchallenges.org/grant/intelligent-disease-surveillance-data-feedback-system" color="blue.500" fontWeight="bold" >grant</Link> from Wellcome Trust and <Link isExternal fontWeight="bold" href={"https://www.gatesfoundation.org"} color="blue.500">BMGF</Link>.
            </Text>
            <Center p={8}>
                <Link
                    href={link}
                    isExternal
                    fontWeight="bold"
                    display="inline-block"
                    textAlign="center"
                >
                    <Button color="blue.500" variant={"ghost"}>Go to QuestMap</Button>
                </Link>

            </Center>
        </Container>
    );
};

export default QuestMapPage;

