import { useProductsContext } from "../../context/ProductContext";
import ProductListCard from "../utilities/ProductListCard";

export default function ProductsListView() {
  const { products } = useProductsContext();

  return (
    <div>
      {products && (
        <div className="my-10">
          {products.map((product) => (
            <ProductListCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
