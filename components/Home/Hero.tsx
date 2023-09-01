import { DM_Sans } from "next/font/google";
import Image from "next/image";
const dm = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});
type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="bg-gradient-to-t from-[#F2B807] to-[#F29F05]">
  <section className="py-10 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-40">
      <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-black xs:text-6xl sm:text-7xl lg:text-7xl">
            <div>Din sökning,</div>
            <div>Dina kunder,</div>
            <div>Vår expertis.</div>
          </h1>
          <p className="mt-8 text-base text-black sm:text-xl">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat.
          </p>
          <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
            <a
              href="experience"
              title=""
              className="inline-flex items-center justify-center px-3 py-3 text-mg font-bold rounded-lg text-black transition-all duration-500 hover:text-white bg-white hover:bg-black focus:bg-black"
              role="button"
            >              {" "}
              Vår arbetsmetod{" "}
            </a>
            <a
              href="#"
              title=""
              className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"></a>
          </div>
        </div>
        <div>
          <Image 
            src="/images/03.png" 
            alt="Beskrivning av bilden"  
            width={500}  
            height={300} 
            className="w-full"
          />
        </div>
      </div>
    </div>
  </section>
</div>
    );
    }
