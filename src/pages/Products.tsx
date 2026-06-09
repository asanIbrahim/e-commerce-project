import React, { useEffect, useState } from "react";
import type { Product } from "../types/product";

function Products() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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
   }
   finally{
    setLoading(false)
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
    { loading && <h5>Loading.....</h5>}
    { error && <h5> {error}</h5> }
      <table border={2} style={{ margin: "50px" }}>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product price</th>
            <th>Product Description</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((val) => (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td> {val.price}</td>
              <td>{val.title}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ margin: "50px", textAlign: "center" }}>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span style={{ margin: "0 15px" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
}

export default Products;
