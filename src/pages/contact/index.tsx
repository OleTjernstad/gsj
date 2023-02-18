import { TextArea, TextInput } from "@/components/input/text-input";

import { Button } from "@/components/input/button";
import { GetStaticProps } from "next";
import Head from "next/head";
import PageLayout from "@/layout/page";
import { useState } from "react";

interface ContactProps {}
export default function Contact({}: ContactProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  return (
    <>
      <Head>
        <title>Glommasvingen Janitsjar - Kontakt oss</title>
      </Head>
      <PageLayout title="Kontakt oss">
        <form>
          <TextInput
            label="Navn"
            name="name"
            value={name}
            onChange={(v) => setName(v)}
            required
          />
          <TextInput
            label="Epost"
            name="email"
            value={email}
            type="email"
            onChange={(v) => setEmail(v)}
            required
          />
          <TextArea
            label="Melding"
            name="message"
            onChange={(v) => setMessage(v)}
            value={message}
            required
          />
          <Button label="Send" type="submit" />
        </form>
      </PageLayout>
    </>
  );
}
