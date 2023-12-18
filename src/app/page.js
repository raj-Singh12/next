"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const User = (props) => {
  return (
    <div>
      <h2>User Name is {props.name}</h2>
    </div>
  );
};

export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };

  const [name, setName] = useState("Raaz");
  const apple = () => {
    setName("Sidhu");
  };
  const InnerComponent = (props) => {
    return (
      <div>
        <h2>InnerComponent {props.name}</h2>
      </div>
    );
  };
  return (
    <main className={styles.main}>
      <User name="Raaz2" />
      <h2>Home Page</h2>
      <h2>demo {name}</h2>
      <Link href="/login">Move to Login Page</Link>
      <Link href="/about">Move to About Page</Link>
      <button onClick={() => apple()}>Click me</button>
      <button onClick={() => navigate("/login")}>login</button>
      <InnerComponent name="demo" />

      {/* {InnerComponent()} */}

      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  );
}
