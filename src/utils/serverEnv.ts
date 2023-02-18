export const SendGridApiKey = assertValue(
  process.env.SENDGRID_API_KEY,
  "Missing environment variable: SENDGRID_API_KEY"
);
export const turnstileSecretKey = assertValue(
  process.env.TURNSTILE_SECRETE_KEY,
  "Missing environment variable: TURNSTILE_SECRETE_KEY"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
