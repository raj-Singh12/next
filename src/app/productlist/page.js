"use client";
import styles from "../page.module.css";
import Image from "next/image";
import ImageItem from "../../../public/vercel.svg"
import { useEffect, useState } from "react";

export default function ProductList() {
  const [backgroundStyle, setBackgroundStyle] = useState({
    backgroundColor: "green",
  });

  const [isLoading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);

    async function getListofProducts() {
      const apiResponse = await fetch("https://dummyjson.com/products");
      const result = await apiResponse.json();

      //   console.log(result);

      if (result && result.products && result.products.length > 0) {
        setTimeout(() => {
          setProducts(result.products);
          setLoading(false);
        }, 1000);
      }
    }

    getListofProducts();
  }, []);

  //   console.log(products, isLoading);

  if (isLoading) {
    return <p className={styles.main}>Loading...</p>;
  }
  if (!products) {
    return <p className={styles.main}>No profile data</p>;
  }

  return (
    <>
      <main className={styles.main}>
        <h2>ProductList</h2>
        <div className={styles.cardParent}>
          {products && products.length > 0
            ? products.map((item) => (
                <div key={item.id} className={styles.card}>
                  <h4>
                    {item.title} <sup>{item.rating}</sup>
                  </h4>
                  <h5>
                    <span>{item.brand}</span>
                  </h5>
                  <br />
                  <div className={styles.imageWrapper}>
                    <img src={item.thumbnail} alt={item.title} />
                    {/* <Image src={ImageItem} /> */}
                  </div>
                  <br />
                  <p>{item.description}</p>
                  <br />
                  <h6 style={backgroundStyle}>background content</h6>
                  <button
                    onClick={() =>
                      setBackgroundStyle({ backgroundColor: "red" })
                    }
                  >
                    Change background Color
                  </button>
                  <button onClick={() => alert("Hello")}>Check Price</button>
                </div>
              ))
            : null}
        </div>
      </main>
    </>
  );
}
