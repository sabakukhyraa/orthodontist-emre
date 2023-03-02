import { NavLink } from "react-router-dom";
import HomeSlider from "../components/HomeSlider";
import photo from "../assets/ex-clinic.jpg";
export default function Home() {
  return (
    <div>
      <HomeSlider />
      <div className="container py-24">
        <div className="grid grid-cols-2 gap-24 p-12 bg-sky-100 rounded-lg shadow-xl">
          <img className="rounded-lg" url={photo} alt="clinic" />
          <div className="text-sky-900 flex flex-col gap-12 text-2xl">
            <h1 className="text-7xl">Ümraniye</h1>
            <p>
              Kliniğime uğrayan herkesin gurur duyabileceği bir gülümsemeyle
              güvenle yaşamasını istiyorum. Profesyonel, eğlenceli, ilgili ve
              samimi bir ortamda her yaş için ortodontik tedavi sunuyoruz.
            </p>
            <p>Bir danışma randevusu alın - gelin ve benimle tanışın!</p>
            <div className="flex gap-6 items-center">
              <button className="py-2 px-4 bg-sky-700 rounded-lg text-sky-50 w-fit self-end animation hover:scale-110">
                <NavLink to={"/iletisim"}>Konumu Gör</NavLink>
              </button>
              <button className="py-2 px-4 bg-sky-700 rounded-lg text-sky-50 w-fit animation hover:scale-110">
                <NavLink to={"/iletisim"}>Randevu Al</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
