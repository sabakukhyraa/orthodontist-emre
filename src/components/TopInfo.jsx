import siteLogo from "../assets/logo-tr/default2.png";

export default function TopInfo() {
  return (
    <div className="flex justify-between items-center large-title bg-sky-100 text-sky-900 p-12 w-full h-56 z-40">
      <img className="w-1/3" src={siteLogo} alt="logo" />
      <div className="text-end flex flex-col gap-2">
        <h2 className="small-title font-light">
          <span className="font-bold">Muayenehane - Klinik: </span>
          Üsküdar/İstanbul
        </h2>
        <h3 className="medium-title font-light">
          <a href="tel:+905553332211">+90 555 333 22 11</a>
        </h3>
      </div>
    </div>
  );
}
