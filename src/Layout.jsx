import { useContext, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { StateContext } from "./App";
import TheFooter from "./components/TheFooter";
import TheNavbar from "./components/TheNavbar";
import TopInfo from "./components/TopInfo";
import Home from "./pages/Home";
import About from "./pages/About";
import Process from "./pages/Process";
import Treatments from "./pages/Treatments";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Himself from "./pages/sub-pages/Himself";
import PatientSatisfaction from "./pages/sub-pages/PatientSatisfaction";
import Testimonials from "./pages/sub-pages/Testimonials";
import AppointmentRequest from "./pages/sub-pages/AppointmentRequest";

const languagePaths = {
  home: {
    EN: "/",
    TR: "/",
  },
  about: {
    EN: "/about",
    TR: "/hakkimizda",
    himself: {
      EN: "/about/dr-med-dent-emre-metin",
      TR: "/hakkimizda/uzm-dr-emre-metin",
    },
    patientSatisfaction: {
      EN: "/about/patient-satisfaction",
      TR: "/hakkimizda/hasta-memnuniyeti",
    },
    testimonials: {
      EN: "/about/testimonials",
      TR: "/hakkimizda/referanslar",
    },
  },
  process: {
    EN: "/process",
    TR: "/tedavi-sureci",
  },
  treatments: {
    EN: "/treatments",
    TR: "/tedavi-cesitleri",
  },
  faq: {
    EN: "/faq",
    TR: "/sss",
  },
  contact: {
    EN: "/contact",
    TR: "/iletisim",
    appointmentRequest: {
      EN: "/contact/appointment-request",
      TR: "/iletisim/randevu-talebi",
    },
  },
};

export default function Layout() {
  const { language } = useContext(StateContext);
  const [footerHeight, setFooterHeight] = useState(0);
  const footerHeightFetcher = (prop) => {
    setFooterHeight(prop);
  };

  console.log(footerHeight);

  return (
    <div className="flex flex-col items-center relative">
      <TopInfo />
      <div className="relative w-full flex flex-col items-center">
        <TheNavbar languagePaths={languagePaths} />
        <div className="py-16">
          
        <Routes>
          <Route exact path={languagePaths.home[language]} element={<Home />} />
          <Route path={languagePaths.about[language]}>
            <Route index element={<About />} />
            <Route
              path={languagePaths.about.himself[language]}
              element={<Himself />}
            />
            <Route
              path={languagePaths.about.patientSatisfaction[language]}
              element={<PatientSatisfaction />}
            />
            <Route
              path={languagePaths.about.testimonials[language]}
              element={<Testimonials />}
            />
          </Route>
          <Route path={languagePaths.process[language]} element={<Process />} />
          <Route
            path={languagePaths.treatments[language]}
            element={<Treatments />}
          />
          <Route path={languagePaths.faq[language]} element={<FAQ />} />
          <Route path={languagePaths.contact[language]}>
            <Route index element={<Contact />} />
            <Route
              path={languagePaths.contact.appointmentRequest[language]}
              element={<AppointmentRequest />}
            />
          </Route>
        </Routes>
        </div>
      </div>
      <TheFooter taker={footerHeightFetcher} />
    </div>
  );
}
