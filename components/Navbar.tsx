import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  chakra,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { FaTwitter } from "react-icons/fa";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <chakra.header position="sticky" top={0} borderColor="border" zIndex={99}>
      <Flex
        bg={useColorModeValue("#000", "white")}
        // color={useColorModeValue("white", "white")}
        color={"white"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4, md: 20, lg: 32 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.500", "white")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} color="white" />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={"white"}
          >
            <Button as="a" href="/" color={"white"} variant={"link"}>
              HEALTH DATA AFRICA
            </Button>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {/* <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            target={"_blank"}
            href="https://www.twitter.com"
            leftIcon={<Icon as={FaTwitter} />}
          >
          </Button> */}

          {/* <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            href="/facebook.com"
            bg={"black"}
            _hover={{
              bg: "black",
            }}
          >
            Facebook
          </Button> */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </chakra.header>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("white", "white");
  const linkHoverColor = useColorModeValue("while", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Flex
      direction="row"
      align="center"
      justify="center"
      maxW="1440px"
      mx="auto"
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize="11"
                // isExternal
                isExternal={navItem.isExternal}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label.toUpperCase()}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow="xl"
                bg={popoverContentBgColor}
                p={4}
                rounded="xl"
                minW="sm"
              >
                <Flex direction="column">
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Flex>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Flex>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      color={"black"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("gray.80", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "gray.80" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"gray.800"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href} isExternal>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  isExternal?: boolean,
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  // {
  //   isExternal: true,
  //   label: "Intelligent Catalaguing",
  //   href: "/intelligent-cataloguing",
  // },
  // {
  {
    label: "Data Catalogs",
    isExternal: false,
    children: [
      {
        label: "Covid-19",
        subLabel:
          "Discover insights into covid-19 Malawi and Kenya Covid-19 Data",
        href: "https://healthdataafrica.org",
      },
      {
        label: "Mental Health",
        subLabel: "Explore data related to mental health research and resources.",
        href: "/mental-health",
      },
    ],
  },
  {
    label: "IntelSurv",
    isExternal: false,
    href: "/intelsurv",
  },
  {
    label: "QuestMap",
    isExternal: false,
    href: "/questmap",
  },
  {
    label: "About Us",
    isExternal: false,
    href: "/contact-us"
  },
];
