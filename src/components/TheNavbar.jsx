import { useContext, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { StateContext } from "../App";
export default function TheNavbar({ languagePaths }) {
  const { language } = useContext(StateContext);
  const [hoverStates, setHoverStates] = useState({
    st: false,
    nd: false,
    rd: false,
    fourth: false,
    fifth: false,
    sixth: false,
  });

  const myRef = useRef(null);
  console.log(myRef.current?.clientHeight);
  return (
    <nav className="w-full bg-sky-700 top-0 sticky backdrop-blur bg-opacity-80 z-10">
      <ul
        ref={myRef}
        className="w=full flex justify-center items-center navbar"
      >
        <li>
          <NavLink to={languagePaths.home[language]}>Ana Sayfa</NavLink>
        </li>
        <li
          className="text-center"
          onMouseEnter={() =>
            setHoverStates((prev) => ({ ...prev, nd: !prev.nd }))
          }
          onMouseLeave={() =>
            setHoverStates((prev) => ({ ...prev, nd: !prev.nd }))
          }
        >
          <NavLink
            className="text-center z-50 w-full h-full"
            to={languagePaths.about[language]}
          >
            Hakkımızda
          </NavLink>
          <ul
            style={{ top: myRef.current?.clientHeight }}
            className={`w-full flex flex-col justify-center overflow-hidden gap-7 absolute text-sky-100 bg-sky-600 backdrop-blur bg-opacity-90 rounded-b-lg shadow-2xl left-0 animation duration-500 ${
              hoverStates.nd ? "h-[210px]" : "h-0 destroyer pointer-events-none"
            }`}
          >
            <NavLink to={languagePaths.about.himself[language]}>
              <li>Uzm. Dr. Emre Metin</li>
            </NavLink>
            <NavLink to={languagePaths.about.himself[language]}>
              <li>Referanslar</li>
            </NavLink>
            <NavLink to={languagePaths.about.patientSatisfaction[language]}>
              <li>Hasta Memnuniyeti</li>
            </NavLink>
          </ul>
        </li>
        <li>
          <NavLink to={languagePaths.process[language]}>Süreç</NavLink>
        </li>
        <li>
          <NavLink to={languagePaths.treatments[language]}>Tedaviler</NavLink>
        </li>
        <li>
          <NavLink to={languagePaths.faq[language]}>
            Sık Sorulan Sorular
          </NavLink>
        </li>
        <li
          className="text-center"
          onMouseEnter={() =>
            setHoverStates((prev) => ({ ...prev, sixth: !prev.sixth }))
          }
          onMouseLeave={() =>
            setHoverStates((prev) => ({ ...prev, sixth: !prev.sixth }))
          }
        >
          <NavLink
            className="text-center z-50 w-full h-full"
            to={languagePaths.contact[language]}
          >
            İletişim
          </NavLink>
          <ul
            style={{ top: myRef.current?.clientHeight }}
            className={`w-full flex flex-col justify-center overflow-hidden gap-7 absolute text-sky-100 bg-sky-600 rounded-b-lg shadow-2xl left-0 animation duration-500 ${
              hoverStates.sixth
                ? "h-[70px]"
                : "h-0 destroyer pointer-events-none"
            }`}
          >
            <NavLink to={languagePaths.contact.appointmentRequest[language]}>
              <li>Randevu Talebi</li>
            </NavLink>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
