// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { SendGridApiKey, turnstileSecretKey } from "../../utils/serverEnv";

import sendGrid from "@sendgrid/mail";

sendGrid.setApiKey(SendGridApiKey);
const endpoint = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

type Data = {
  error: string;
  success?: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const body = `secret=${encodeURIComponent(
      turnstileSecretKey
    )}&response=${encodeURIComponent(req.body.token)}`;

    const turnstileRes = await fetch(endpoint, {
      method: "POST",
      body,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    });

    const jsonRes = await turnstileRes.json();

    if (!jsonRes.success) {
      return res.status(400).json({ error: "robot" });
    }
    if (!req.body.email || !req.body.message || !req.body.name) {
      return res.status(400).json({ error: "missingData" });
    }
    if (jsonRes.success) {
      await sendGrid.send({
        to: "ole.tjernstad@glommasvingen.no", // Your email where you'll receive emails
        from: "post@mail.sluttkontroll.no", // your website email address here
        subject: "Kontakt fra glommasvingen.no",
        replyTo: req.body.email,
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">

        <title>Kontakt fra Glommasvingen.no</title>
        <meta name="description" content="Kontakt fra Glommasvingen.no">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>Hei Glommasvingen</h3>
              <div style="font-size: 16px;">
              <p>${req.body.message}</p>
              <br>
              Mvh
              <br />
               ${req.body.name}
              <br />
               ${req.body.email}
              </div>
              <img src="https://glommasvingen.no/wp-content/uploads/2015/09/cropped-Glommasvingen-blank1.png" class="logo-image" style="height: 54px;width: 144px;border-radius: 5px;overflow: hidden;">
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://glommasvingen.no" style="text-decoration: none;margin: 8px;color: #9CA3AF;">glommasvingen.no</a>
                <a href="https://www.facebook.com/GlommasvingenJanitsjar" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Facebook</a>

              </div>
              </div>
      </body>
      </html>`,
      });
    }
  } catch (error: any) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: "failedSending" });
  }

  res.status(200).json({ error: "", success: true });
}
