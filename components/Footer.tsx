import {
  Flex,
  Link,
  Text,
  Container,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const footerData = [
  {
    label: "Our Work",
    href: "#",
    links: [
      { label: "IntelSurv", href: "/intelsurv" },
      { label: "QuestMap", href: "/questmap" },
    ],
  },
  {
    label: "Data Catalogs",
    href: "#",
    links: [
      { label: "Covid-19", href: "https://healthdataafrica.org/news" },
      { label: "Mental Health", href: "/mental-health" },
    ],
  },
  {
    label: "About Us",
    href: "#",
    links: [
      { label: "Contact Us", href: "/contact-us" },
      { label: "Our Team", href: "/contact-us" },
    ],
  }
];

const Footer = () => {
  return (
    <>
      <VStack spacing={5} alignItems="initial" bg={"#f1f1f1"}>
        <Container maxW="6xl" p={{ base: 5, md: 10 }}>
          <Flex
            flexWrap="wrap"
            direction={{ base: "column", md: "row" }}
            alignItems="start"
            justifyContent="space-between"
          >
            {footerData.map((data, index) => (
              <Flex key={index} direction="column" mb="3">
                <Link
                  fontWeight="500"
                  href={data.href}
                  color={"gray.800"}
                >
                  {data.label}
                </Link>
                <Flex direction={{ base: "row", md: "column" }}>
                  {data.links.map((link, index) => (
                    <Link
                      key={index}
                      padding={1}
                      fontSize={{ base: "sm", sm: "md" }}
                      href={link.href}
                      mr={{ base: 1, sm: 2, md: 0 }}
                      color="gray.500"
                      _hover={{ color: "blue.600" }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Container>
      </VStack>
      {/* <hr /> */}
      <Flex alignItems="center" py={6} justifyContent="center" bg={"#f6f6f6"}>
        <Text color="gray.500" fontSize="0.875rem" pl="0.5rem">
          &copy; {new Date().getFullYear()} Health Data Africa, All rights
          reserved.
        </Text>
      </Flex>
    </>
  );
};

export default Footer;
