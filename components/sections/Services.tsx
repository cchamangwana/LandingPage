import { Flex, Image, Text, Box, chakra, Heading, Grid, Container, Img } from "@chakra-ui/react";
import NextLink from "next/link"

interface ServiceProps {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    to: string;
}

const Services = () => {

    const services = [
        {
            title: "Data Cataloguing",
            description:
                "This is a catalog with news and journal articles focussing on COVID-19 in Malawi and Kenya. You can use this to understand key trends in the flow of information and research over the three waves of COVID-19 in the two countries. <a href='https://healthdataafrica.org' target='_blank' rel='noopener noreferrer'>read more</a> ",
            // imageUrl: "/images/c19-catalog.png",
            imageUrl: "/images/c19-catalog.jpeg",
            imageAlt: "Data Cleaning",
            to: "https://healthdataafrica.org",
        },
        {
            title: "QuestMap",
            description:
                "This is an application based on a collection of disease surveillance questionnaires and their fields used across the world including Malawi and Kenya. The tool enables the standardisation of questionnaire elements and does that by leveraging LLMs. <a href='https://questmap-mubas.web.app' target='_blank' rel='noopener noreferrer'>read more</a>",
            // imageUrl: "/images/questmap.png",
            imageUrl: "/images/questmap.jpeg",
            imageAlt: "QuestMap",
            to: "https://questmap-mubas.web.app",

        },
        {
            title: "IntelSurv",
            description:
                "IntelSurv is an intelligent assistant to health professionals who collect disease surveillance data. Using the power of LLMs combined with our knowledge base, the tool answers questions about form fields, how to fill in data, what suitable case definitions apply and explains health terms such as symptoms and underlying conditions. <a href='https://intelsurv.vercel.app/' target='_blank' rel='noopener noreferrer'>read more</a>",
            imageUrl: "/images/intelsurv-image.jpeg",
            imageAlt: "IntelSurv",
            to: "https://intelsurv.vercel.app/"
        },
        {
            title: "Data Standardisation & Ware-Housing",
            description:
                "Within the INSPIRE Network we used the <a href='https://www.ohdsi.org/' target='_blank' rel='noopener noreferrer'>OHDSI ecosystem</a> for data standardisation and predictive analysis tools to facilitate a federated approach to data sharing and analysis. <a href='https://inspiredata.network' target='_blank' rel='noopener noreferrer'>read more</a>",
            imageUrl: "/images/data-warehousing.jpeg",
            imageAlt: "Data Ware-Housing",
            to: "http://inspiredata.network"
        },
    ];

    return (

        <chakra.section pt={20} pb={36} bg={"#f1f1f1"}>
            <Container maxW={"6xl"}>
                <Heading as={"h2"} textAlign="left" pb={30} color={"black"}>
                    Our Work.
                </Heading>
                <Grid
                    mt={30}
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                    gap={6}
                >
                    {services.map((service, index) => (
                        <Service key={index} {...service} />
                    ))}
                </Grid>
            </Container>
        </chakra.section>
    )
}



const Service: React.FC<ServiceProps> = ({
    title,
    description,
    imageUrl,
    imageAlt,
    to
}) => {
    return (
        <Box
            border="1px solid"
            borderColor={"#f4f4f4"}
            borderRadius={4}
            overflow="hidden"
        >
            <Flex direction="column">
                <Box
                    borderRadius="4px 4px 0 0"
                    overflow="hidden"
                    height={{ base: "180px", md: "220px", xl: "260px" }}
                >
                    <NextLink href={to} target="_blank">
                        {/* <Image
                            alt={imageAlt}
                            src={imageUrl}
                            fit="cover" // Adjust the image fit
                            w="100%"
                            h="100%"
                        /> */}
                        <Img
                            alt={imageAlt}
                            src={imageUrl}
                            w="100%"
                        />

                    </NextLink>

                </Box>

                <Flex direction="column" p={5} flex={1}>
                    <Text fontSize={24} fontWeight="bold" color="black">
                        {title}
                    </Text>
                    <Text
                        color={"black"}
                        dangerouslySetInnerHTML={{
                            __html: description.replace(/<a /g, '<a style="color: #3182CE; text-decoration: none; font-weight: bold;" '),
                        }}
                    />
                </Flex>
            </Flex>
        </Box>
    )
}

export default Services
