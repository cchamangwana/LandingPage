import { Button, chakra, Flex, Text, Stack, Heading } from "@chakra-ui/react";

const EmailUs = () => {
  const emailAddress = "kuyeserai@gmail.com";

  const handleEmailUs = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <chakra.section bg={"black"} py={16}>
      <Stack
        spacing={6}
        direction="column"
        justify="center"
        align="center"
        px={6}
        color="white"
      >
        <Heading color={"white"} as={"h2"}>
          {/* Have any Questions? */}
          Got questions or feedback?
        </Heading>
        <Text fontSize="lg">
          If you have a question regarding what we do, please contact us via email:
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          {emailAddress}
        </Text>
        <Button
          variant="outline"
          color={"white"}
          size="md"
          onClick={handleEmailUs}
        >
          Send Email
        </Button>
      </Stack>
    </chakra.section>
  );
};

export default EmailUs;
