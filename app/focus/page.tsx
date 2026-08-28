import type { Metadata } from "next";
import FocusPage from "@/components/FocusPage";

export const metadata: Metadata = {
  title: "Focus · FT Events",
  description:
    "Hong Kong morning briefing: artificial intelligence, Taiwan, Japan, and Korea.",
};

export default function Page() {
  return <FocusPage />;
}
