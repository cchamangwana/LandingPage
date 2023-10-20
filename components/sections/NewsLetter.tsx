import {
  Button,
  chakra,
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // TODO: Handle the subscribe functionality (e.g., send email to backend)
    console.log("Subscribed:", email);
    setEmail(""); // Clear the email input after submission
  };

  return (
    <chakra.section bg={"#f6f6f6"} py={16}>
      <Stack
        spacing={6}
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "flex-start" }}
        px={{ base: 4, md: 12 }}
      >
        <Flex
          flex={1}
          direction="column"
          align={{ base: "center", md: "flex-start" }}
        >
          <Text fontSize={32} fontWeight="semibold" color="black">
            Subscribe to Our Newsletter
          </Text>

          <Text fontSize="sm" color="black" pl={10}>
            Stay up-to-date with our latest news and updates.
          </Text>
        </Flex>

        <Flex flex={1} maxW="md">
          <InputGroup p={0} mt={2} size="md">
            <Input
              borderColor={"black"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
            />
            <InputRightElement width="8rem">
              <Button
                variant={"ghost"}
                color={"black"}
                size="md"
                onClick={handleSubscribe}
              >
                Subscribe
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Stack>
    </chakra.section>
  );
};

export default Subscribe;
