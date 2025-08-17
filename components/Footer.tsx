import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-forest_shadow text-cloud_white mt-8 relative pb-6 font-body">
      {/* Container principal de menu */}
      <div className="mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Logo alinhado à esquerda */}
          <div className="flex items-center justify-start">
            <Image
              src="/images/Logo-PNG-sem-tagline2.png"
              alt="Logo da Marca"
              width={360}
              height={270}
              className="object-contain"
              priority
            />
          </div>

          {/* Wrapper isolado para colunas de menu */}
          <div className="md:col-span-3 grid grid-cols-3 gap-x-2 justify-items-center mr-96">
            {/* Coluna 1: Ana Pavitri */}
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-rose_quartz font-bold text-lg font-heading">
                / Ana Pavitri
              </h3>
              <ul className="space-y-1 text-md">
                <li>
                  <Link
                    href="/Sobre_mim"
                    className="hover:text-sky_blue transition-colors"
                  >
                    Sobre mim
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Sobre_mim"
                    className="hover:text-sky_blue transition-colors"
                  >
                    Formação / Certificação
                  </Link>
                </li>
              </ul>
            </div>

            {/* Coluna 2: Produtos */}
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-rose_quartz font-bold text-lg font-heading">
                / Produtos
              </h3>
              <ul className="space-y-1 text-md">
                <li>
                  <Link
                    href="/Produtos/milagres-acontecem"
                    className="hover:text-sky_blue transition-colors"
                  >
                    Milagres Acontecem
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-sky_blue transition-colors"
                  >
                    Formações
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-sky_blue transition-colors"
                  >
                    Cursos Online
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-sky_blue transition-colors"
                  >
                    Meditação
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-sky_blue transition-colors"
                  >
                    Mentoria
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-sky_blue transition-colors"
                  >
                    Massagens
                  </Link>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Contactos */}
            <div className="space-y-2 text-center md:text-left">
              <ul className="space-y-4 text-md">
                <li>
                  <h3 className="text-rose_quartz font-bold text-lg font-heading">
                    <Link
                      href="/Contacto"
                      className="hover:text-sky_blue transition-colors"
                    >
                      / Contacto
                    </Link>
                  </h3>
                </li>
                <li>
                  <h3 className="text-rose_quartz font-bold text-lg font-heading">
                    <Link
                      href="/Testemunhos"
                      className="hover:text-sky_blue transition-colors"
                    >
                      / Testemunhos
                    </Link>
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Ícones sociais */}
        <div className="border-clay_beige/30 mt-8">
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-6 flex items-center justify-center space-x-6">
            <FaInstagram
              size={36}
              className="hover:text-sky_blue transition-colors cursor-pointer"
            />
            <FaFacebook
              size={36}
              className="hover:text-sky_blue transition-colors cursor-pointer"
            />
            <FaWhatsapp
              size={36}
              className="hover:text-sky_blue transition-colors cursor-pointer"
            />
            <FaTelegramPlane
              size={36}
              className="hover:text-sky_blue transition-colors cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Links legais e rodapé */}
      <div className="border-clay_beige/30">
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-sm">
          <div className="space-x-3 text-stone_grey">
            <Link href="#" className="hover:text-sky_blue transition-colors">
              Condições de Utilização
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-sky_blue transition-colors">
              Política de Privacidade
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-sky_blue transition-colors">
              Cookies
            </Link>
          </div>
          <p className="text-stone_grey mt-4 md:mt-0">
            © 2025 Pavitri | Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
