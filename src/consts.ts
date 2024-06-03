import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "mrdjan.net",
  DESCRIPTION: "Mrdjan Stajic - Software Developer",
  AUTHOR: "Mark Horn",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
};

// // Blog Page
// export const BLOG: Page = {
//   TITLE: "Blog",
//   DESCRIPTION: "Writing on topics I am passionate about.",
// }

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Projects i have worked on.",
};

// // Search Page
// export const SEARCH: Page = {
//   TITLE: "Search",
//   DESCRIPTION: "Search all posts and projects by keyword.",
// };

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  // {
  //   TEXT: "Projects",
  //   HREF: "/projects",
  // },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "mrdjan.stajic@gmail.com",
    HREF: "mailto:mrdjan.stajic@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "mrdja026",
    HREF: "https://github.com/mrdja026",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "mrdjan.stajic",
    HREF: "https://www.linkedin.com/in/mrdjan-stajic/",
  },
];
