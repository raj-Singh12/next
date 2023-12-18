"use client";
import Link from "next/link";
import styles from "../page.module.css";

export default function StudentList() {
  return (
    <>
      <main className={styles.main}>
        <h2>StudentList</h2>
        <ul>
          <li>
            <Link href="/studentlist/1">List Raaz</Link>
          </li>
          <li>
            <Link href="/studentlist/2">List 1</Link>
          </li>
          <li>
            <Link href="/studentlist/3">List 1</Link>
          </li>
          <li>
            <Link href="/studentlist/4">List 1</Link>
          </li>
          <li>
            <Link href="/studentlist/5">List 1</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
