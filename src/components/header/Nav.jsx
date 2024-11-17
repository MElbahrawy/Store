import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Nav() {
    let items = "";
    return (
        <Navbar fluid rounded>
            <Navbar.Brand>
                <Link to="/">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Store
                    </span>
                </Link>
            </Navbar.Brand>
            <div className="flex md:order-2 gap-3 font-medium text-md">
                <button className="relative">
                    {items && (
                        <span className="absolute top-0 -left-2 inline-flex items-center justify-center w-4 h-4 text-sm font-bold leading-none text-white bg-red-500 rounded-full">
                            {items}
                        </span>
                    )}
                    <i className="fa-solid fa-cart-shopping me-1 text-blue-500"></i>
                    Cart
                </button>
                <button>
                    <i className="fa-solid fa-user me-1 text-blue-500"></i>Login
                </button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    <Link to="/">Home</Link>
                </Navbar.Link>
                <Navbar.Link href="#">
                    <Link to="/about">About</Link>
                </Navbar.Link>
                <Navbar.Link href="#">
                    <Link to="/products">Products</Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
