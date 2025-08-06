import NavBar from "@/components/NavBar";
import { NextPage } from "next";
import Image from "next/image";

export default function Meditacao() {
  return (
    <div
      className="relative w-full h-screen font-body
        "
    >
      <div>
        <NavBar />
      </div>
      <section className="relative h-[60vh] bg-cover bg-center flex items-center justify-center mb-16">
        <Image
          src="/images/bg3-energia.webp"
          alt="Ana Filipa meditando junto ao mar"
          fill
          className=" object-bottom object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 flex pt-12 items-start justify-center">
          <h1 className="text-5xl md:text-6xl font-heading text-rose_quartz">
            Meditação
          </h1>
        </div>
      </section>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-center text-moss_green text-3xl mb-12 font-heading font-semibold">
          Os Benefícios Que Recebes Com A Prática Da Meditação
        </p>

        {/* Benefits Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          {/* Card 1 */}
          <div className="bg-clay_beige rounded-2xl shadow-lg p-6 transform hover:scale-[1.02] hover:bg-cloud_white transition duration-300">
            <h3 className="text-moss_green text-2xl font-heading mb-4">
              Serenidade e Paz Mental
            </h3>
            <p className="font-body text-stone_grey">
              A Meditação é o caminho da descoberta da nossa essência de Paz e
              Liberdade interior, o reencontro com o Amor e Alegria.
              <br />A prática da meditação e a conexão com a Luz, trás-nos o
              sentimento de preenchimento, sentimo-nos serenos, confiantes e
              plenos, reequilibra o nosso corpo emocional.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-clay_beige rounded-2xl shadow-lg p-6 transform hover:scale-[1.02] hover:bg-cloud_white transition duration-300">
            <h3 className="text-moss_green text-2xl font-heading mb-4">
              Vitalidade e Equilíbrio dos Chakras
            </h3>
            <p className="font-body text-stone_grey">
              A meditação equilibra os centros Energéticos e aumenta os niveis
              de energia e vitalidade.
              <br />A canalização da Luz Divina, trás-nos a energia que
              precisamos para renovar e reequilibrar o nosso corpofisico.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-clay_beige rounded-2xl shadow-lg p-6 transform hover:scale-[1.02] hover:bg-cloud_white transition duration-300">
            <h3 className="text-moss_green text-2xl font-heading mb-4">
              Limpeza Energética
            </h3>
            <p className="font-body text-stone_grey">
              Onde há Luz a escuridão ou densidade, não tem lugar. <br />
              Meditar preenche-nos de Luz, equilibra as emoções e a mente, é o
              nosso banho energético.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-clay_beige rounded-2xl shadow-lg p-6 transform hover:scale-[1.02] hover:bg-cloud_white transition duration-300">
            <h3 className="text-moss_green text-2xl font-heading mb-4">
              Saúde e Energia
            </h3>
            <p className="font-body text-stone_grey">
              Uma das vertentes da meditação é a AUTOCURA e a AUTOTERAPIA, uma
              cura que vai à raiz da doença.
              <br />
              Esta prática que te posso ensinar, regenera e reequilidra o corpo
              fisico, emocional e mental, tal como limpa o plano espiritual.
            </p>
          </div>
        </div>

        {/* CTA Example */}
        <div className="text-center mt-16">
          <button className="bg-moss_green text-cloud_white font-heading py-3 px-8 rounded-full hover:bg-forest_shadow transition">
            Experimentar Agora
          </button>
        </div>
      </div>
    </div>
  );
}
