import { GetStaticProps } from "next";
import Head from "next/head";
import PostLayout from "@/layout/post";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";

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
        <title>{`Glommasvingen Janitsjar - ${post.title}`}</title>
      </Head>
      <PostLayout
        excerpt={post.excerpt}
        title={post.title}
        author={post.author.name}
        publishedAt={post.publishedAt}
        mainImage={post.mainImage}
      >
        {post.body}
      </PostLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps<
  PostProps,
  { slug: string }
> = async (context) => {
  const slug = context.params?.slug;
  const post = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug] {_id, author->{name}, categories[]->{title, slug},mainImage, slug, title, publishedAt, excerpt, body } | order(publishedAt desc)[0]`,
    { slug }
  );

  return {
    props: {
      post,
    },
  };
};

export async function getStaticPaths() {
  const posts: IPost[] = await client.fetch(
    groq`*[_type == "post" && publishedAt < now()]|order(publishedAt desc)`
  );

  const paths = posts.map((post) => {
    return { params: { slug: post.slug.current } };
  });

  return {
    paths,
    fallback: false,
  };
}
