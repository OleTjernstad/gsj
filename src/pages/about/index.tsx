import { GetStaticProps } from "next";
import Head from "next/head";
import PageLayout from "@/layout/page";
import { client } from "@/sanity/client";

interface IPage {
  _id: string;
  body: any[];
  title: string;
}

export type ICategory = {
  slug: { _type: string; current: string };
  title: string;
};

interface AboutProps {
  page: IPage;
}
export default function About({ page }: AboutProps) {
  return (
    <>
      <Head>
        <title>Glommasvingen Janitsjar - Om oss</title>
      </Head>
      <PageLayout title={page.title} portableText={page.body} />
    </>
  );
}

export const getStaticProps: GetStaticProps<AboutProps, {}> = async (
  context
) => {
  const page = await client.fetch(
    `*[_type == "page" && title == 'Om oss'][0] {_id, body, title}`
  );

  return {
    props: {
      page,
    },
  };
};
