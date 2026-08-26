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

export default function ProjectsLayout({ children }) {
  return <>{children}</>;
}
