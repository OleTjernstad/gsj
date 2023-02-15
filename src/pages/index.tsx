import { useRef, useState } from "react";

import FrontLayout from "@/layout/front/front";
import { GetStaticProps } from "next";
import Head from "next/head";
import { PortableText } from "@portabletext/react";
import { PostListBox } from "@/components/post-list/postList";
import { Section } from "@/components/section/section";
import { VideoSection } from "@/layout/video/section";
import { client } from "@/sanity/client";

interface IPage {
  _id: string;
  body: any[];
  title: string;
}
interface IPost {
  _id: string;
  author: { name: string };
  categories: ICategory[];
  mainImage: { _type: string; asset: { _ref: string; _type: string } };
  slug: { _type: string; current: string };
  excerpt: any[];
  title: string;
}

export type ICategory = {
  slug: { _type: string; current: string };
  title: string;
};

interface HomeProps {
  page: IPage;
  posts: IPost[];
}
export default function Home({ page, posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Glommasvingen Janitsjar</title>
        <meta name="description" content="Korpset glommasvingen janitsjar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FrontLayout>
        <main>
          <VideoSection />
          <div className="page-center-grid">
            <Section>
              <article>
                <PortableText value={page.body} />
              </article>
            </Section>

            <Section>
              {posts.map((post) => (
                <PostListBox
                  key={post._id}
                  title={post.title}
                  image={post.mainImage}
                  author={post.author.name}
                  excerpt={post.excerpt}
                  tags={post.categories}
                />
              ))}
            </Section>
          </div>
        </main>
      </FrontLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps, {}> = async (
  context
) => {
  const page = await client.fetch(
    `*[_type == "page" && title == 'Fremside'][0] {_id, body, title}`
  );
  const posts = await client.fetch(
    `*[_type == "post"] {_id, author->{name}, categories[]->{title, slug},mainImage, slug, title, publishedAt, excerpt } | order(publishedAt desc)`
  );

  return {
    props: {
      page,
      posts,
    },
  };
};
