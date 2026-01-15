import type { PostType } from "../types/postType.ts";
import post1 from "../assets/posts/post1.svg";
import post2 from "../assets/posts/post2.svg";
import post3 from "../assets/posts/post3.svg";
import post4 from "../assets/posts/post4.svg";
import post5 from "../assets/posts/post5.svg";
import post6 from "../assets/posts/post6.svg";
import post7 from "../assets/posts/post7.svg";
import post8 from "../assets/posts/post8.svg";
import post9 from "../assets/posts/post9.svg";
import author1 from "../assets/authors/author1.svg";
import author2 from "../assets/authors/author2.svg";
import author3 from "../assets/authors/author3.svg";
import author4 from "../assets/authors/author4.svg";
import author5 from "../assets/authors/author5.svg";
import author6 from "../assets/authors/author6.svg";
import author7 from "../assets/authors/author7.svg";
import author8 from "../assets/authors/author8.svg";
import author9 from "../assets/authors/author9.svg";

export const posts: PostType[] = [
  {
    id: 1,
    imageUrl: post1,
    theme: "Design",
    title: "UX review presentations",
    redirectTo: "https://info.cern.ch/",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    authorName: "Olivia Rhye",
    authorImageUrl: author1,
    publishedAt: new Date(2022, 0, 20),
  },
  {
    id: 2,
    imageUrl: post2,
    theme: "Product",
    title: "Migrating to Linear 101",
    redirectTo: "https://info.cern.ch/",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    authorName: "Phoenix Baker",
    authorImageUrl: author2,
    publishedAt: new Date(2022, 0, 19),
  },
  {
    id: 3,
    imageUrl: post3,
    theme: "Software Engineering",
    title: "Building your API Stack",
    redirectTo: "https://info.cern.ch/",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    authorName: "Lana Steiner",
    authorImageUrl: author3,
    publishedAt: new Date(2022, 0, 18),
  },
  {
    id: 4,
    imageUrl: post4,
    theme: "Management",
    title: "Bill Walsh leadership lessons",
    redirectTo: "https://info.cern.ch/",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    authorName: "Alec Whitten",
    authorImageUrl: author4,
    publishedAt: new Date(2022, 0, 17),
  },
  {
    id: 5,
    imageUrl: post5,
    theme: "Product",
    title: "PM mental models",
    redirectTo: "https://info.cern.ch/",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    authorName: "Demi Wilkinson",
    authorImageUrl: author5,
    publishedAt: new Date(2022, 0, 16),
  },
  {
    id: 6,
    imageUrl: post6,
    theme: "Design",
    title: "What is Wireframing?",
    redirectTo: "https://info.cern.ch/",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    authorName: "Candice Wu",
    authorImageUrl: author6,
    publishedAt: new Date(2022, 0, 15),
  },
  {
    id: 7,
    imageUrl: post7,
    theme: "Design",
    title: "How collaboration makes us better designers",
    redirectTo: "https://info.cern.ch/",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    authorName: "Natali Craig",
    authorImageUrl: author7,
    publishedAt: new Date(2022, 0, 14),
  },
  {
    id: 8,
    imageUrl: post8,
    theme: "Product",
    title: "Our top 10 Javascript frameworks to use",
    redirectTo: "https://info.cern.ch/",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    authorName: "Drew Cano",
    authorImageUrl: author8,
    publishedAt: new Date(2022, 0, 13),
  },
  {
    id: 9,
    imageUrl: post9,
    theme: "Customer Success",
    title: "Podcast: Creating a better CX Community",
    redirectTo: "https://info.cern.ch/",
    description:
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    authorName: "Orlando Diggs",
    authorImageUrl: author9,
    publishedAt: new Date(2022, 0, 12),
  },
];
