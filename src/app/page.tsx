import styles from "./page.module.css";

async function getLinks() {
  const res = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQmCGsxyOLbB63Qg9SaPMEbs0C1dk8PLE1WmTeMjHOYNhIe2VnU6XhAqXTPBFwU1uo7bwiZL1yxfXaA/pub?gid=0&single=true&output=csv"
  );
  const data = await res.text();
  return data;
}

export default async function Home() {
  const links = await getLinks()

  console.log(links);
  return <main className={styles.main}>que onda perro?</main>;
}
