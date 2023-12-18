"use client"
import styles from "../../page.module.css";

export default function Student({ params }) {
  console.log(params);
  return (
    <>
      <main className={styles.main}>
        <h2>Student Name {params.student}</h2>
      </main>
    </>
  );
}
