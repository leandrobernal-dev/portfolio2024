import { getPostData } from "@/app/(blog)/lib/post";

export async function generateMetadata({ params, searchParams }, parent) {
  const postData = await getPostData(params.slug);
  console.log(postData);

  return {
    title: postData.title,
    description: postData.summary,
  };
}

export default function PostLayout({ children }) {
  return <>{children}</>;
}
