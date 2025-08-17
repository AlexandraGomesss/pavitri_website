"use client";

import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTelegramPlane,
} from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/Card";
import Link from "next/link";
import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";

export default function FormContacto() {
  return (
    <section className="py-16 px-6 flex justify-center font-body">
      <Card className="max-w-4xl w-full flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden bg-cloud_white/80">
        {/* Imagem à esquerda */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <Image
            src="/images/bg1-respiracao.webp"
            alt="Filipa Pavitri"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Conteúdo à direita */}
        <CardContent className="w-full md:w-1/2 text-stone_grey p-8 flex flex-col justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-moss_green mb-4 font-heading">
              Queres mudar a tua vida?
            </h2>
            <p className="mb-6 text-lg">
              Olá! Sou a Filipa Pavitri e estou aqui para te ajudar.
              <br />
              Sentes que o teu corpo pede equilíbrio?
              <br /> <br />
              Fala comigo e descobre como despertar a tua cura interior.
            </p>
            <p className="text-forest_shadow text-base mb-4">
              Contacta-me através de:
            </p>
            <div className="flex justify-end gap-6 text-stone_grey mb-6 mt-6">
              <Link href="https://wa.me/XXXXXXXXXXX" aria-label="WhatsApp">
                <FaWhatsapp className="w-6 h-6 hover:text-moss_green transition-transform duration-300 transform hover:scale-110" />
              </Link>
              <Link href="mailto:filipa@example.com" aria-label="Email">
                <FaEnvelope className="w-6 h-6 hover:text-moss_green transition-transform duration-300 transform hover:scale-110" />
              </Link>
              <Link href="https://instagram.com/filipa" aria-label="Instagram">
                <FaInstagram className="w-6 h-6 hover:text-moss_green transition-transform duration-300 transform hover:scale-110" />
              </Link>
              <Link href="https://facebook.com/filipa" aria-label="Facebook">
                <FaFacebookF className="w-6 h-6 hover:text-moss_green transition-transform duration-300 transform hover:scale-110" />
              </Link>
              <Link href="https://t.me/filipa" aria-label="Telegram">
                <FaTelegramPlane className="w-6 h-6 hover:text-moss_green transition-transform duration-300 transform hover:scale-110" />
              </Link>
            </div>
          </div>

          <div className="text-center">
            {/* <CTAButton
              href="/get-started"
              size="xl"
              rounded="xl"
              text="Conecta-te"
            /> */}
            <p className="mt-8 text-forest_shadow text-sm">
              Muito Amor e Luz no teu coração ♡
              <br />
              Até já
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
