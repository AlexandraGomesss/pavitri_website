import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between shadow-md absolute top-0 left-0 z-20 bg-black/20 px-16 py-4">
      {/* Logo */}
      <div className="flex-col items-center gap-2">
        <Image
          src="/images/Logo-PNG-sem-tagline2.png"
          alt="Logo"
          width={180}
          height={50}
          priority
        />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 text-vibrant_green font-semibold font-heading text-xl">
        <li>
          <Link href="/" className="hover:text-light_pink transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-light_pink transition">
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-light_pink transition">
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-light_pink transition">
            Contact
          </Link>
        </li>
      </ul>

      {/* Call to Action */}
      <div>
        <Link
          href="/get-started"
          className="bg-light_pink text-dark_green font-heading font-extrabold text-lg px-6 py-4 rounded-xl hover:bg-pink hover:text-off-black transition"
        >
          Marcar Sessão
        </Link>
      </div>
    </nav>
  );
}
