import type { Blog } from "../types/Blog.ts"

export const blogs: Blog[] = [
    {
        id: 1,
        title: "Denial of Service and Source Code Exposure in React Server Components",
        date: new Date(2025, 12, 11),
        mainInformation: "Security researchers have found and disclosed two additional vulnerabilities in React Server Components while attempting to exploit the patches in last week’s critical vulnerability…",
        readMoreUrl: "https://react.dev/blog/2025/12/11/denial-of-service-and-source-code-exposure-in-react-server-components"
    },
    {
        id: 2,
        title: "Critical Security Vulnerability in React Server Components",
        date: new Date(2025, 12, 3),
        mainInformation: "There is an unauthenticated remote code execution vulnerability in React Server Components. A fix has been published in versions 19.0.1, 19.1.2, and 19.2.1. We recommend upgrading immediately.",
        readMoreUrl: "https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components"
    },
    {
        id: 3,
        title: "React Conf 2025 Recap",
        date: new Date(2025, 11, 16),
        mainInformation: "Last week we hosted React Conf 2025. In this post, we summarize the talks and announcements from the event…",
        readMoreUrl: "https://react.dev/blog/2025/10/16/react-conf-2025-recap"
    },
    {
        id: 4,
        title: "React Compiler v1.0",
        date: new Date(2025, 11, 7),
        mainInformation: "We’re releasing the compiler’s first stable release today, plus linting and tooling improvements to make adoption easier.",
        readMoreUrl: "https://react.dev/blog/2025/10/07/react-compiler-1"
    },
    {
        id: 5,
        title: "Introducing the React Foundation",
        date: new Date(2025, 12, 7),
        mainInformation: "Today, we’re announcing our plans to create the React Foundation and a new technical governance structure …",
        readMoreUrl: "https://react.dev/blog/2025/10/07/introducing-the-react-foundation"
    },
]