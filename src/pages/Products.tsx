import ProductCard from "../components/ProductCard";
import useProductFetch from "../hooks/product/useProductFetch";

function Products() {
  const { data, loading, error } = useProductFetch({
    url: "https://fakestoreapi.com/products",
  });

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
          {data.map((product) => (
            <ProductCard  product={product} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Products;
