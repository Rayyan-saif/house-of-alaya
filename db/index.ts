export function getDb(): never {
  throw new Error(
    "Database is not configured for Vercel preview."
  );
}