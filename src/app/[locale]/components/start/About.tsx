import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className=" md:py-12">
      <div className="max-w-7xl mx-auto md:px-4 px-1 lg:px-8">
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-row">
            <div className="bg-gray-100 p-1 md:p-3 lg:p-6">
              <h1>Über Phobo</h1>
              <div className="flex flex-col md:flex-row">
                <div className="w-full lg:w-2/3 md:p-5">
                  <p>
                    Willkommen bei Phobo, Ihrer Full-Service-Webdesign-Agentur!
                    Gegründet von Han Hoa Huynh, einem Diplom-Medieninformatiker
                    (FH) mit über 20 Jahren Erfahrung im Webdesign, sind wir
                    darauf spezialisiert, maßgeschneiderte
                    Fullstack-Applikationen zu entwickeln. Unsere Expertise
                    umfasst moderne Technologien wie React.js, Next.js, Vue.js,
                    Nuxt.js, Svelte, SvelteKit und Tailwind.css.
                  </p>

                  <p>
                    Der Name „Phobo“ hat seine Wurzeln im vietnamesischen „Phở
                    Bò“, was so viel wie „Rindfleisch-Nudelsuppe“ bedeutet.
                    Diese köstliche Speise ist nicht nur ein Nationalgericht
                    Vietnams, sondern auch ein Symbol für die Vielfalt und den
                    Reichtum der vietnamesischen Küche. Genauso wie eine gute
                    Schüssel Phở sorgfältig zubereitet wird – mit einer
                    aromatischen Brühe und frischen Zutaten – so legen wir auch
                    Wert auf die sorgfältige Gestaltung und Entwicklung Ihrer
                    digitalen Lösungen.
                  </p>
                  <p>
                    Unser Slogan:{" "}
                    <strong>„Wir möchten das Web schneller machen“</strong>
                    spiegelt unser Engagement wider, innovative und effiziente
                    Lösungen für kleine und mittelständische Unternehmen (KMUs)
                    zu bieten. Lassen Sie uns gemeinsam Ihre digitale Präsenz
                    stärken und Ihre Ideen zum Leben erwecken!
                  </p>
                </div>
                <div className="border-2 mx-auto my-5">
                  {" "}
                  <div className="max-w-sm w-full rounded overflow-hidden shadow-lg">
                    <Image
                      src="/images/Delicious_Bowl_of_Pho_bo.png"
                      width="400"
                      height="400"
                      alt="Delicious Bowl of Pho Bo"
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">
                        Phobo: Wo Webdesign auf vietnamesische Tradition trifft
                      </div>
                      <p className="text-gray-700 text-base">
                        Bei Phobo verbinden wir unsere Leidenschaft für
                        Webdesign mit der Leidenschaft unseres Gründers für die
                        vietnamesische Küche. Genau wie eine sorgfältig
                        zubereitete Schüssel Phở Bò, die mit frischen Zutaten
                        und einer aromatischen Brühe verfeinert wird, legen wir
                        großen Wert auf die sorgfältige Gestaltung und
                        Entwicklung Ihrer digitalen Lösungen. Entdecken Sie, wie
                        wir Ihre Marke zum Strahlen bringen!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between bg-white p-4">
            <ClipboardDocumentListIcon className="h-6 w-6 text-primary" />
            <span className="text-sm text-gray-500">
              Zielgruppe: KMUs diverser Branchen wie Handwerker, Elektriker,
              Händler, Nagelstudios, Rechtsanwälte, Steuerberater, Immobilien
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
