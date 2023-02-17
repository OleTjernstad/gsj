import { GetStaticProps } from "next";
import Head from "next/head";
import PageLayout from "@/layout/page";
import { client } from "@/sanity/client";

interface IPage {
  _id: string;
  body: any[];
  title: string;
}

interface DirigentenProps {
  page: IPage;
}
export default function Dirigenten({ page }: DirigentenProps) {
  return (
    <>
      <Head>
        <title>Glommasvingen Janitsjar - Historie</title>
      </Head>
      <PageLayout title={page.title} portableText={page.body} />
    </>
  );
}

export const getStaticProps: GetStaticProps<DirigentenProps, {}> = async (
  context
) => {
  const page = await client.fetch(
    `*[_type == "page" && title == 'Dirigenten'][0] {_id, body, title}`
  );

  return {
    props: {
      page,
    },
  };
};
