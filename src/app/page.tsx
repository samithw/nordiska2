'use client';

import { Contacts } from "@/components/Contacts";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Success } from "@/components/Success";
import { WhoWeAre } from "@/components/WhoWeAre";

const Page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Industries />
      <Services />
      <Contacts />
      <Success />
    </main>
  );
};

export default Page;
