import React, { useEffect, useState } from "react";
import type { Product } from "../types/product";

function Products() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error("Api has been Failed");
      }
      const data = await res.json();
      setData(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading && <h5>Loading.....</h5>}
      {error && <h5> {error}</h5>}
      <table border={2} style={{ margin: "50px" }}>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product price</th>
            <th>Product Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val) => (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td> {val.price}</td>
              <td>{val.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Products;
