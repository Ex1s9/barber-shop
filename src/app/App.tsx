import React, { Suspense, lazy } from "react";
import { Services } from "../entities/Services/Services";
import { Footer } from "../widgets/footer/Footer";
import Header from "../widgets/header/Header";
import TopBar from "../widgets/header/TopBar";
import s from "./App.module.scss";

const Better = lazy(() =>
  import("../entities/Better/Better").then(module => ({ default: module.Better }))
);
const Reviews = lazy(() => import("../entities/Reviews/Reviews"));

const App: React.FC = () => {

  return (
    <main>
      <TopBar />
      <Header />
      <div className={s.block}>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Better />
          <Reviews />
        </Suspense>
        <Services />
      </div>
      <Footer />
    </main>
  );
};

export default App;
