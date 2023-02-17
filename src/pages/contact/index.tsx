import { GetStaticProps } from "next";
import Head from "next/head";
import PageLayout from "@/layout/page";
import { TextInput } from "@/components/input/text-input";

interface ContactProps {}
export default function Contact({}: ContactProps) {
  return (
    <>
      <Head>
        <title>Glommasvingen Janitsjar - Kontakt oss</title>
      </Head>
      <PageLayout title="Kontakt oss">
        <form>
          <TextInput />
        </form>
      </PageLayout>
    </>
  );
}
