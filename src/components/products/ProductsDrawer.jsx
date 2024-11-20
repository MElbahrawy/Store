import { Drawer } from "flowbite-react";
import { useState } from "react";
import ProductsFilter from "./ProductsFilter";
import Btn from "../utilities/Btn";
export default function ProductsDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <div className="mx-auto w-full px-5 sm:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Filter
        </button>
      </div>
      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Header title="Filter Products" />
        <Drawer.Items>
          <ProductsFilter />
        </Drawer.Items>
      </Drawer>
    </>
  );
}
