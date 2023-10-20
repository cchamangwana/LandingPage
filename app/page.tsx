"use client";

import { chakra } from "@chakra-ui/react";
import ImageSection from "@/components/sections/ImageSection";
import WelcomeSection from "../components/sections/WelcomeSection";
import Services from "@/components/sections/Services";
import AboutSection from "@/components/sections/About";
import EmailUs from "@/components/sections/EmailUs";

export default function Home() {

  return (
    <>
      <ImageSection />
      <WelcomeSection />
      <chakra.section pt={20} bg={"blackAlpha.900"} pb={20}>
        <AboutSection />
      </chakra.section>
      <hr />
      <Services />

      {/* <chakra.section pt={20} bg={"blackAlpha.900"} pb={20}>
        <Cataloguing />
      </chakra.section>

      <chakra.section pt={20} bg={"blackAlpha.900"} pb={20}>
        <DataPreparation />
      </chakra.section>

      <chakra.section pt={20} bg={"blackAlpha.900"} pb={20}>
        <Infodemy />
      </chakra.section> */}

      {/* <NewsletterSubscribe /> */}

      <EmailUs />
      {/* <Blogs blogs={blogs} /> */}
    </>
  );
}
