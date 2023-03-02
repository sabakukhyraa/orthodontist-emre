import { useEffect, useRef } from "react";

export default function TheFooter({ taker }) {
  const footerRef = useRef(null);
  useEffect(() => {
    taker(footerRef.current.clientHeight || 0);
  }, [footerRef]);
  return (
    <div
      ref={footerRef}
      className="bg-sky-900 w-full"
    >
      <div className="container w-full">
        <div className="w-full flex items-start p-12 gap-12 justify-around">
          <ul className="flex flex-col items-start justify-center font-extralight text-sky-100 text-2xl gap-2">
            <h1 className="text-sky-500 font-extralight text-5xl mb-6">
              bilgi
            </h1>
            <li>hakkımızda</li>
            <li>süreç</li>
            <li>tedaviler</li>
            <li>sık sorulan sorular</li>
            <li>iletişim</li>
            <li>randevu talebi</li>
          </ul>
          <ul className="flex flex-col items-start justify-center font-extralight text-sky-100 text-2xl gap-2">
            <h1 className="text-sky-500 font-extralight text-5xl mb-6">
              klinikler
            </h1>
            <li className="my-2">
              <address>
                <div>Ahmediye Mahallesi,</div>
                <div>Bilmemne Sk. No:10 Daire:2,</div>
                <div>Üsküdar/İstanbul</div>
              </address>
            </li>
            <li className="mt-2 mb-4">
              <address>
                <div>Ümraniye Mahallesi,</div>
                <div>Bilmemne Sk. No:5 Daire:7,</div>
                <div>Ümraniye/İstanbul</div>
              </address>
            </li>
            <li>
              <a href="tel:+905553332211">+905553332211</a>
            </li>
            <li>
              <a href="tel:+901112223344">+901112223344</a>
            </li>
            <li>
              <a href="mailto:iletisim@dremremetin.com">
                iletisim@dremremetin.com
              </a>
            </li>
          </ul>
          <ul className="flex flex-col items-start justify-center font-extralight text-sky-100 text-2xl gap-2">
            <h1 className="text-sky-500 font-extralight text-5xl mb-6">
              lorem
            </h1>
            <li>lorem, ipsum.</li>
            <li>repellat, aliquid.</li>
            <li>voluptates, temporibus.</li>
            <li>aut, iste?</li>
          </ul>
        </div>
        <div className="flex items-center justify-between text-sky-50 font-extralight">
          <div>
            <div>Developed by Ali Kerem Ata</div>
            <div className="font-medium">© 2023 Emre Metin | Tüm hakları saklıdır</div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <a href="">InstagramIcon</a>
            <a href="">FacebookIcon</a>
            <a href="">LinkedInIcon</a>
          </div>
        </div>
      </div>
    </div>
  );
}
