import { Img } from "@chakra-ui/react";

export default function ImageSection() {
  return (
    <Img
      src={"/images/hero-image.jpeg"}
      alt={"page-index-hero-image-alt"}
      loading="eager"
      objectFit="cover"
      width="100%"
      maxHeight="480px" // Set the maximum height for the image
    />
  );
}
