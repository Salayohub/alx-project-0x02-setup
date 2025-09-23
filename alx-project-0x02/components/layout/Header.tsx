import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="text-2xl font-bold">Logo</div>
        <div className="flex space-x-4 ">
          <Link href="/home" className="hover: text-green-500 underline text-3xl font-serif">
            Home
          </Link>
          <Link href="/about" className="hover: text-green-500 underline text-3xl font-serif">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
