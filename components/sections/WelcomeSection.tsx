import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

export default function WelcomeSection() {
  const router = useRouter();

  return (
    <Box textAlign="center" py={12} px={6} bg={"#f6f6f6"}>
      <Container maxW="4xl">
        <Heading as="h2" size="xl" mt={0} mb={3} color={"black"}>
          Health Data Africa
        </Heading>
        <Text pb={3} color={"gray.900"} textAlign="justify">
          Access to data is vital in the digital age. It drives scientific advancements, facilitates informed decision-making,
          prompts innovation and problem-solving, fosters transparency and accountability,
          and enables social impact and equality. Heath Data Africa is an research and
          software development initiative to develop intelligent tools for identifying, cataloguing, and analysing data.
        </Text>
        {/* <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="black"
          variant="outline"
          color={"black"}
          onClick={() => router.push("/about")}
        >
          Read More
        </Button> */}
      </Container>
    </Box>
  );
}