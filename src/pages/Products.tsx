import React, { useEffect, useState } from "react";
import type { Product } from "../types/product";

function Products() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function getData() {
   setLoading(true)
   try{
    const res = await fetch("https://fakestoreapi.com/products");
    if(!res.ok){
      throw new Error("Api has been Failed")
    }
    const result = await res.json();
    setData(result);
   }
   catch (err: unknown){
      if (err instanceof Error) {
        setError(err.message);
      }
   }
   finally{
    setLoading(false)
   }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    { loading && <h5>Loading.....</h5>}
    { error && <h5> {error}</h5> }
      <table border={2} style={{ margin: "50px" }}>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product price</th>
            <th>Product Descriptions</th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody>
          {data.filter(val =>  val.id > 5).map((vel) => (
            <tr key={vel.id}>
              <td> {vel.id}</td>
              <td> {vel.title}</td>
              <td> {vel.description}</td>
              <td>{vel.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Products;
