// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { SendGridApiKey } from "../../utils/serverEnv";
import sendGrid from "@sendgrid/mail";

sendGrid.setApiKey(SendGridApiKey);

type Data = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendGrid.send({
      to: "ole.tjernstad@glommasvingen.no", // Your email where you'll receive emails
      from: "post@mail.sluttkontroll.no", // your website email address here
      subject: "Kontakt fra glommasvingen.no",
      replyTo: req.body.email,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
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
  } catch (error: any) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  res.status(200).json({ error: "" });
}
