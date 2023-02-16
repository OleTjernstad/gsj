import ArchiveLayout from "@/layout/archive";
import { GetStaticProps } from "next";
import Head from "next/head";
import { PostListBox } from "@/components/post-list/postList";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";

interface IAuthor {
  slug: { _type: string; current: string };
  name: string;
}
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
  author: IAuthor;
}
export default function About({ posts, author }: PostProps) {
  return (
    <>
      <Head>
        <title>{`Glommasvingen Janitsjar - ${author.name}`}</title>
      </Head>
      <ArchiveLayout title={`Forfatter: ${author.name}`}>
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
    groq`*[_type == "post" && references(*[_type=="author" && slug.current == $slug]._id)] {_id, author->{name, slug}, categories[]->{title, slug},mainImage, slug, title, publishedAt, excerpt } | order(publishedAt desc)`,
    { slug }
  );

  const author: IAuthor = await client.fetch(
    groq`*[_type == "author" && slug.current == $slug][0] { slug, name }`,
    { slug }
  );

  return {
    props: {
      posts,
      author,
    },
  };
};

export async function getStaticPaths() {
  const authors: IAuthor[] = await client.fetch(
    groq`*[_type == "author"] { slug }`
  );

  const paths = authors.map((author) => {
    return { params: { slug: author.slug.current } };
  });

  return {
    paths,
    fallback: false,
  };
}
