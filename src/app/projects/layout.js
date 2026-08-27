export const metadata = {
  title: "Architectural & Interior Design Projects",
  description: "Explore the curated portfolio of Patil Associates — bespoke residential, commercial workspaces, living lounges, and custom tactile interior spaces in Nagpur, India.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects Portfolio | Patil Associates Interior Design",
    description: "Curated spaces, tactile materiality, and bespoke spatial architecture by Patil Associates.",
    url: "https://patilassociates.com/projects",
    images: [
      {
        url: "/images/project-living-room.jpg",
        width: 1200,
        height: 800,
        alt: "Patil Associates Curated Projects Portfolio",
      },
    ],
  },
};

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://patilassociates.com/projects#collection",
      "url": "https://patilassociates.com/projects",
      "name": "Architectural & Interior Design Projects Portfolio | Patil Associates",
      "description": "Curated portfolio of bespoke residential, commercial workspaces, living lounges, and custom tactile interior spaces in Nagpur by Patil Associates.",
      "isPartOf": {
        "@id": "https://patilassociates.com/#website"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://patilassociates.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects Portfolio",
            "item": "https://patilassociates.com/projects"
          }
        ]
      }
    },
    {
      "@type": "ImageGallery",
      "@id": "https://patilassociates.com/projects#gallery",
      "name": "Patil Associates Curated Works Gallery",
      "author": {
        "@id": "https://patilassociates.com/#studio"
      }
    }
  ]
};

export default function ProjectsLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      {children}
    </>
  );
}
