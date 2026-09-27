import "../globals.css";
import type { Metadata } from "next";
import RootShell, { buildMetadata } from "@/components/RootShell";

export { viewport } from "@/components/RootShell";

export const metadata: Metadata = buildMetadata("fr");

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="fr">{children}</RootShell>;
}
