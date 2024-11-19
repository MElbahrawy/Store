import { Link, useParams } from "react-router-dom";
import Btn from "../utilities/Btn";
import ProductImages from "./ProductImages";
import ProductRate from "./ProductRate";
import { randomText } from "../../utilities/Constants";
import ProductAction from "./ProductAction";

export default function Product() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="container mx-auto py-20">
      <Link to={"/products"}>
        <Btn>Back To Products</Btn>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        <ProductImages />
        <div>
          <h3 className="text-3xl font-bold">{id}</h3>
          <ProductRate />
          <p className="text-2xl text-blue-500">100$</p>
          <p className="my-4">{randomText}</p>
          <p>
            <span>Availability:</span> in Stock
          </p>
          <p className="my-4">
            <span>Brand:</span> Nike
          </p>
          <hr />
          <ProductAction />
        </div>
      </div>
    </div>
  );
}
