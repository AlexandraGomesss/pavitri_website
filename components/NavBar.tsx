import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between absolute top-0 left-0 z-20 px-16 py-4 bg-black bg-opacity-30 shadow-md">
      {/* Logo */}
      <Image
        src="/images/Logo-PNG-sem-tagline2.png"
        alt="Logo"
        width={180}
        height={90}
        priority
      />

      {/* Menu */}
      <ul className="hidden md:flex gap-8 text-cloud_white font-semibold font-heading text-xl">
        <li>
          <Link href="/" className="hover:text-rose_quartz transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-rose_quartz transition">
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-rose_quartz transition">
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-rose_quartz transition">
            Contact
          </Link>
        </li>
      </ul>

      {/* Call to Action */}
      <div>
        <Link
          href="/get-started"
          className="bg-moss_green text-cloud_white font-heading font-extrabold text-xl px-6 py-4 rounded-xl hover:bg-forest_shadow transition"
        >
          Marcar Sessão
        </Link>
      </div>
    </nav>
  );
}
