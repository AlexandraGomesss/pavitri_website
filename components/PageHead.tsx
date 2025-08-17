import Head from "next/head";

export function PageHead({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  const full = `${title} | Pavitri`;
  return (
    <Head>
      <title>{full}</title>
      {description && <meta name="description" content={description} />}
    </Head>
  );
}
