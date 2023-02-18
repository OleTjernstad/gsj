import { TextArea, TextInput } from "@/components/input/text-input";

import { Button } from "@/components/button";
import Head from "next/head";
import PageLayout from "@/layout/page";
import { Turnstile } from "@marsidev/react-turnstile";
import { turnStileSiteKey } from "@/utils/env";
import { useState } from "react";

interface ContactProps {}
export default function Contact({}: ContactProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string>();

  const [token, setToken] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/email", {
      body: JSON.stringify({
        email,
        name,
        message,
        token,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const { error, success } = await res.json();
    if (error) {
      switch (error) {
        case "failedSending":
          setResponseMessage(
            "Vi kunne ikke sende eposten, beklager det hendelsen. Prøv gjerne igjen, evt. forsøk andre kontakt metoder"
          );
          break;
        case "robot":
          setResponseMessage(
            "Vi kunne ikke tillate sending av eposten da vi ikke er helt sikker på om du er et menneske"
          );
          break;

        default:
          break;
      }
      setLoading(false);
      return;
    }
    if (success) {
      setName("");
      setEmail("");
      setMessage("");
      setResponseMessage(undefined);
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Glommasvingen Janitsjar - Kontakt oss</title>
      </Head>
      <PageLayout title="Kontakt oss">
        <form onSubmit={handleSubmit}>
          {responseMessage ? (
            <p aria-live="assertive">{responseMessage}</p>
          ) : null}
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
          <Turnstile
            siteKey={turnStileSiteKey}
            onSuccess={(token) => setToken(token)}
            options={{
              action: "submit-form",
              theme: "light",
            }}
          />
          <Button label="Send" type="submit" loading={loading} />
        </form>
      </PageLayout>
    </>
  );
}
