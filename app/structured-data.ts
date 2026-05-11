export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Emmanuel Abiodun Oladipo",
  alternateName: "EMMADRID",
  description: "Full Stack Web Developer, UI/UX Designer, and Software Developer from Nigeria",
  url: "https://emadrid.vercel.app",
  image: "https://emadrid.vercel.app/placeholder-user.jpg",
  email: "emmadridwebdeveloper@gmail.com",
  telephone: "+234 901 661 5446",
  jobTitle: "Full Stack Web Developer",
  worksFor: {
    "@type": "Organization",
    name: "EMMADRID",
    url: "https://emadrid.vercel.app",
  },
  location: {
    "@type": "Place",
    name: "Ilorin, Nigeria",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ilorin",
      addressCountry: "Nigeria",
    },
  },
  sameAs: [
    "https://x.com/emmadrid_",
    "https://wa.me/2349016615446",
    "https://github.com/Xclusivedev02/my-cap",
  ],
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "EMMADRID - Web Development & Design",
  alternateName: "EMMADRID Portfolio",
  description: "Professional web development, UI/UX design, and software development services",
  url: "https://emadrid.vercel.app",
  telephone: "+234 901 661 5446",
  email: "emmadridwebdeveloper@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ilorin",
    addressCountry: "Nigeria",
  },
  sameAs: [
    "https://x.com/emmadrid_",
    "https://wa.me/2349016615446",
  ],
  priceRange: "₦300,000 - ₦1,500,000+",
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "EMMADRID Web Development & Design Services",
  description: "Comprehensive web development, UI/UX design, and software development services",
  url: "https://emadrid.vercel.app",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development & Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Basic Business Website",
        description: "Professional business website with 5-8 pages, contact form, and basic SEO",
        price: "350000",
        priceCurrency: "NGN",
      },
      {
        "@type": "Offer",
        name: "E-Commerce Basic",
        description: "Fully functional online store with product management",
        price: "300000",
        priceCurrency: "NGN",
      },
      {
        "@type": "Offer",
        name: "E-Commerce Premium",
        description: "Advanced e-commerce platform with extended product capacity",
        price: "600000",
        priceCurrency: "NGN",
      },
      {
        "@type": "Offer",
        name: "SaaS MVP Development",
        description: "Minimum viable product for Software-as-a-Service platforms",
        price: "1500000",
        priceCurrency: "NGN",
      },
    ],
  },
}

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})
