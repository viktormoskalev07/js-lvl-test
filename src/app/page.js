import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const pages = [
    "promises",
    "coefs",
    "text-transitions"

]

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <nav>
            {
              pages.map((item)=>{
                return <div> <Link key={item} href={"/"+item}>{item}</Link></div>
              })
            }

          </nav>
      </div>
    </main>
  );
}
