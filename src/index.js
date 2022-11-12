import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import App from './App';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutOverview from './pages/AboutOverview';
import OurTeam from './pages/OurTeam';
import OurTeamOverview from './pages/OurTeamOverview';
import Physiotherapists from './pages/Physiotherapists';
import Physiotherapist from './pages/Physiotherapist';
import RemedialMassageTherapist from './pages/RemedialMassageTherapist';
import Pricing from './pages/Pricing';
import Services from "./pages/Services";
import ServicesOverview from './pages/ServicesOverview';
import GeneralPhysiotherapy from './pages/GeneralPhysiotherapy';
import GeneralPhysiotherapyOverview from './pages/GeneralPhysiotherapyOverview';
import ChildrensPhysiotherapy from './pages/ChildrensPhysiotherapy';
import DVAPhysiotherapy from './pages/DVAPhysiotherapy';
import MotorVehicleClaims from './pages/MotorVehicleClaims';
import WorkcoverPhysiotherapy from './pages/WorkcoverPhysiotherapy';
import SportsPhysiotherapy from './pages/SportsPhysiotherapy';
import Conditions from "./pages/Conditions";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Project from './pages/Project';
import { ResetStyle } from './components/GlobalStyle';

export default function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            <Route index element={<AboutOverview />} />
            <Route path="our-team" element={<OurTeam />}>
              <Route index element={<OurTeamOverview />} />
              <Route path="physiotherapists" element={<Physiotherapists/>}>
                <Route index element={<div>Select a physiotherapist</div>} />
                <Route path=":physiotherapistId" element={<Physiotherapist />}/>
              </Route>
              <Route path="remedial-massage-therapist" element={<RemedialMassageTherapist />}></Route>
            </Route>
            <Route path="pricing" element={<Pricing />} />
          </Route>
          <Route path="services" element={<Services />}>
            <Route index element={<ServicesOverview />} />
            <Route path="general-physiotherapy" element={<GeneralPhysiotherapy />}>
              <Route index element={<GeneralPhysiotherapyOverview />} />
              <Route path="childrens-physiotherapy" element={<ChildrensPhysiotherapy />} />
              <Route path="DVA-physiotherapy" element={<DVAPhysiotherapy />} />
              <Route path="motor-vehicle-claims" element={<MotorVehicleClaims />} />
              <Route path="workcover-physiotherapy" element={<WorkcoverPhysiotherapy />} />
            </Route>
            <Route path="sports-physiotherapy" element={<SportsPhysiotherapy />}></Route>
          </Route>
          <Route path="conditions" element={<Conditions />} />
          <Route path="blog" element={<Blog />} />
          <Route path="projects" element={<Projects />}>
            <Route index element={<div>Select a project</div>} />
            <Route path=":projectId" element={<Project />}/>
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);