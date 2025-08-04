import Footer from "@/components/Footer";
import FormContacto from "@/components/FormContacto";
import NavBar from "@/components/NavBar";

export default function Contacto() {
  return (
    <div className="relative w-full h-screen">
      <div>
        <NavBar />
      </div>

      <FormContacto />
      <Footer />
    </div>
  );
}
