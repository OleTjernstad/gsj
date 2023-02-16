import ArchiveLayout from "@/layout/archive";
import { GetStaticProps } from "next";
import Head from "next/head";
import { PostListBox } from "@/components/post-list/postList";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";

interface IPost {
  _id: string;
  author: { name: string; slug: { _type: string; current: string } };
  categories: ICategory[];
  mainImage: { _type: string; asset: { _ref: string; _type: string } };
  slug: { _type: string; current: string };
  excerpt: any[];
  title: string;
  publishedAt: string;
}

export type ICategory = {
  slug: { _type: string; current: string };
  title: string;
};

interface PostProps {
  posts: IPost[];
  category: ICategory;
}
export default function About({ posts, category }: PostProps) {
  return (
    <>
      <Head>
        <title>{`Glommasvingen Janitsjar - ${category.title}`}</title>
      </Head>
      <ArchiveLayout title={`Kategori: ${category.title}`}>
        {posts.map((post) => (
          <PostListBox
            key={post._id}
            title={post.title}
            image={post.mainImage}
            author={post.author.name}
            excerpt={post.excerpt}
            tags={post.categories}
            slug={post.slug.current}
            authorSlug={post.author.slug}
          />
        ))}
      </ArchiveLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps<
  PostProps,
  { slug: string }
> = async (context) => {
  const slug = context.params?.slug;
  const posts = await client.fetch(
    groq`*[_type == "post" && references(*[_type=="category" && slug.current == $slug]._id)] {_id, author->{name, slug}, categories[]->{title, slug},mainImage, slug, title, publishedAt, excerpt } | order(publishedAt desc)`,
    { slug }
  );

  const category: ICategory = await client.fetch(
    groq`*[_type == "category" && slug.current == $slug][0] { slug, title }`,
    { slug }
  );

  return {
    props: {
      posts,
      category,
    },
  };
};

export async function getStaticPaths() {
  const categories: ICategory[] = await client.fetch(
    groq`*[_type == "category"] { slug }`
  );

  const paths = categories.map((category) => {
    return { params: { slug: category.slug.current } };
  });

  return {
    paths,
    fallback: false,
  };
}
