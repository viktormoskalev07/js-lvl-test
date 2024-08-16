"use client"
import styles from "./page.module.css";
import Link from "next/link";

const pages = [
    "promises",
    "coefs",
    "text-transitions",
    "img-editor"
]

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <nav>
            {
              pages.map((item , i )=>{
                return <div key={i}> <Link  href={"/"+item}>{item}</Link></div>
              })
            }

          </nav>
      </div>
    </main>
  );
}
