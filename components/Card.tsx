import { chakra } from "@chakra-ui/react";

const Card = (props: any) => {
  return (
    <chakra.div
      bg="surface"
      overflow="hidden"
      border="1px solid"
      borderRadius={4}
      borderColor="#f3f3f3"
      p={6}
      h="auto"
      w="full"
      {...props}
    />
  );
};

export default Card;
