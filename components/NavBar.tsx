"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      className={`
        w-full flex items-center justify-between
        px-16 py-4 z-20 shadow-md
        ${
          isHome
            ? "absolute top-0 left-0 bg-black/30"
            : "sticky top-0 bg-forest_shadow"
        }
      `}
    >
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
          <Link href="/Sobre_mim" className="hover:text-rose_quartz transition">
            Sobre mim
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-rose_quartz transition">
            Services
          </Link>
        </li>
        <li>
          <Link href="/Contacto" className="hover:text-rose_quartz transition">
            Contacto
          </Link>
        </li>
      </ul>

      {/* Call to Action */}
      <Link
        href="/get-started"
        className="bg-moss_green text-cloud_white font-heading font-extrabold text-xl px-6 py-4 rounded-xl hover:bg-forest_shadow transition"
      >
        Marcar Sessão
      </Link>
    </nav>
  );
}
