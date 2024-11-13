import { getPostData } from "@/app/(blog)/lib/post";

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.slug);

  return {
    title: postData.title,
    description: postData.summary,
  };
}

export default function PostLayout({ children }) {
  return <>{children}</>;
}
