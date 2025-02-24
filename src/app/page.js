export default async function Home() {
  const f = await fetch(
    "https://script.google.com/macros/s/AKfycbz2ilrGauIAJoWzpZ3IcBv6gEato1hUWcC5p-1OJctJZcmwSIiLvrA5n5c8QZ9E5Mb3/exec?t=list"
  );

  const data = await f.json();
  return (
    <div>
      {data?.map((i, j) => (
        <p key={j}>{i.title}</p>
      ))}
    </div>
  );
}

export const dynamic = 'force-dynamic'