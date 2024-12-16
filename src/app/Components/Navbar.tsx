import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-center gap-10 items-center bg-gray-400 p-5 text-[18px]">
      <Link href="/" className="hover:text-blue-700 font-sans font-bold">Home Car Rent</Link>
      <Link href="./Content2" className="hover:text-blue-700 font-sans font-bold">Catagory Car Rent</Link>
      <Link href="/Content3" className="hover:text-blue-700 font-sans font-bold">Detail Car Rent</Link>
      <Link href="/Form" className="hover:text-blue-700 font-sans font-bold">Payment Car Rent</Link>
      <Link href="/Dashboard" className="hover:text-blue-700 font-sans font-bold">Dashboard Admin Car Rent</Link>
    </nav>
  );
};

export default Navbar;
