import type { Product } from "./../types/product";

type ProductCardprop = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardprop) {
  return (
    <>
    <tr key={product.id}>
      <td> {product.id}</td>
      <td> {product.price}</td>
      <td> {product.title}</td>
    </tr>
     
    </>
  );
}
