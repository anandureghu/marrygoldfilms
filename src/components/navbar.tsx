import { BRAND_NAME } from "@/utils/consts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="py-3 fixed top-0 left-0 w-full z-20">
      <div className=" app-container mx-auto flex items-center justify-between glass p-3 px-5 rounded-xl backdrop-blur-md">
        <main className="flex items-center text-primary-50 gap-3">
          <Image
            src={"/marrygoldfilms.jpg"}
            alt="marrygoldfilms"
            width={50}
            height={50}
            className="rounded"
          />
          <h1 className="text-3xl font-costaline">{BRAND_NAME}</h1>
        </main>
        <ul className="flex text-primary-50/70 gap-3">
          <li>
            <Link href={"#works"}>Works</Link>
          </li>
          <li>
            <Link href={"#contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
