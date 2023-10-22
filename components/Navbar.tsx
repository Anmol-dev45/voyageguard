"use client";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NAV_ITEM } from "@/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./utils/Container";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  if (pathname.startsWith("/studio")) return null;
  return (
    <header className="px-2">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={"/Logo.svg"}
              width={200}
              height={200}
              className="w-[200px] h-auto"
              alt="Image of logo"
            />
          </Link>
          <nav
            className={`max-md:fixed max-md:w-4/5 max-md:h-full top-0 right-0 max-md:bg-neutral-300 z-40 max-md:pt-20 flex flex-col md:flex-row  max-sm:pl-32 max-md:pl-52 items-start md:items-center gap-16 ${
              isOpen ? "max-md:translate-x-0" : "max-md:translate-x-full"
            } max-md:transition-transform duration-300 `}
          >
            {NAV_ITEM.map((item, _i) => (
              <Link
                href={item.name !== "home" ? item.name : "/"}
                key={_i}
                className=" body-text hover:text-primary transition-colors duration-300 ease-in capitalize"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div
            className={`md:hidden text-4xl  ${
              isOpen && "fixed"
            } right-0 z-50 cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
