import type { Metadata } from "next"
import { ProjectsPageClient } from "./client"

export const metadata: Metadata = {
  title: "Web Development Portfolio - Real Projects by EMMADRID | Nigeria",
  description:
    "Explore real web development and design projects built by EMMADRID. Portfolio includes fintech apps, health platforms, e-commerce sites, NGO websites, and more. Quality work with proven results.",
  keywords: [
    "web design portfolio",
    "development projects",
    "client projects",
    "portfolio examples",
    "web development portfolio Nigeria",
  ],
  alternates: {
    canonical: "https://emadrid.vercel.app/projects",
  },
}

export default function ProjectsPage() {
  return <ProjectsPageClient />
}
