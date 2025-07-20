import Link from "next/link";
import Image from "next/image";
import nav_logo from "@/app/images/Logo-PNG-sem-tagline2.png";

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-md absolute top-0 left-0 z-20 bg-black/20 px-16 py-4">
      {/* Logo */}
      <div className="flex-col items-center gap-2">
        <Image src={nav_logo} alt="Logo" width={180} height={180} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 text-green-800 font-semibold text-2xl">
        <li>
          <Link href="/" className="hover:text-pink transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-pink transition">
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-pink transition">
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-pink transition">
            Contact
          </Link>
        </li>
      </ul>

      {/* Call to Action */}
      <div>
        <Link
          href="/get-started"
          className="bg-green-100 text-green-800 px-6 py-4 rounded-xl hover:bg-pink hover:text-off-black transition"
        >
          Marcar Sessão
        </Link>
      </div>
    </nav>
  );
}
