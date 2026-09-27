import "../../globals.css";
import type { Metadata } from "next";
import RootShell, { buildMetadata } from "@/components/RootShell";

export { viewport } from "@/components/RootShell";

export const metadata: Metadata = buildMetadata("en");

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
