import { GetStaticProps } from "next";
import Head from "next/head";
import PageLayout from "@/layout/page";
import PostLayout from "@/layout/post";
import { client } from "@/sanity/client";

interface IPost {
  _id: string;
  author: { name: string };
  categories: ICategory[];
  mainImage: { _type: string; asset: { _ref: string; _type: string } };
  slug: { _type: string; current: string };
  excerpt: any[];
  title: string;
  publishedAt: string;
  body: any[];
}

export type ICategory = {
  slug: { _type: string; current: string };
  title: string;
};

interface PostProps {
  post: IPost;
}
export default function About({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>Glommasvingen Janitsjar - {post.title}</title>
      </Head>
      <PostLayout
        title={post.title}
        author={post.author.name}
        publishedAt={post.publishedAt}
      >
        {post.body}
      </PostLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps<PostProps, {}> = async (
  context
) => {
  const post = await client.fetch(
    `*[_type == "post"] {_id, author->{name}, categories[]->{title, slug},mainImage, slug, title, publishedAt, excerpt, body } | order(publishedAt desc)[0]`
  );

  return {
    props: {
      post,
    },
  };
};
