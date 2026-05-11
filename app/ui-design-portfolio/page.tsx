import type { Metadata } from "next"
import { UIDesignPortfolioClient } from "./client"

export const metadata: Metadata = {
  title: "UI/UX Design Portfolio | Mobile & Web App Designs by EMMADRID",
  description:
    "Explore stunning UI/UX designs for mobile apps and web applications. See FinTech, Wellness, and other modern app interfaces designed by EMMADRID.",
  keywords: [
    "UI/UX design portfolio",
    "mobile app design",
    "web app design",
    "UI design examples",
    "user interface design",
    "user experience design",
  ],
  alternates: {
    canonical: "https://emadrid.vercel.app/ui-design-portfolio",
  },
}

export default function UIDesignPortfolioPage() {
  return <UIDesignPortfolioClient />
}
