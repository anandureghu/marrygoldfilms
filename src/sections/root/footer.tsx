import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { BRAND_NAME } from "@/utils/consts";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-gray-200">
      {/* Left Section */}
      <div className="flex flex-col items-start justify-center w-full">
        {/* Logo */}
        <div className="flex items-center mb-4 w-fit mx-auto  gap-5 overflow-hidden">
          <div className="h-[50px] w-[50px] rounded-lg overflow-hidden">
            <Image
              src="/marrygoldfilms.jpg"
              alt="Logo"
              width={80}
              height={80}
              className="object-cover scale-150"
            />
          </div>
          <h3 className="text-2xl font-semibold font-costaline w-fit">
            {BRAND_NAME}
          </h3>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mb-4 justify-center w-full">
          <Link href="#" aria-label="Facebook" className="hover:text-blue-600">
            <Facebook size={18} />
          </Link>
          <Link href="#" aria-label="Instagram" className="hover:text-pink-600">
            <Instagram size={18} />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="hover:text-blue-600">
            <Linkedin size={18} />
          </Link>
          <Link href="#" aria-label="Twitter" className="hover:text-gray-600">
            <Twitter size={18} />
          </Link>
          <Link href="#" aria-label="YouTube" className="hover:text-red-600">
            <Youtube size={18} />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-6 w-full text-center">
          © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
