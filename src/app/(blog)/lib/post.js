import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/app/(blog)/data/blog");

export async function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      slug: matterResult.data.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, ""),
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export async function getPostData(slug) {
  // Fetch all posts data to map slug to id
  const allPostsData = await getSortedPostsData();

  // Find the post with the matching slug
  const matchedPost = allPostsData.find((post) => post.slug === slug);

  if (!matchedPost) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  const { id } = matchedPost;
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Parse the metadata and content using gray-matter
  const matterResult = matter(fileContents);

  // Convert Markdown content to HTML using remark
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    content: matterResult.content,
    ...matterResult.data,
  };
}

export async function getLatestPosts(count = 2) {
  const allPostsData = await getSortedPostsData();
  return allPostsData.slice(0, count);
}
