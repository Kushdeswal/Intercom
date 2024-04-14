import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intercom",
  description: "This is Home",
 
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Video />
      <Brands />
      <Features />
      <Blog />
    </>
  );
}
