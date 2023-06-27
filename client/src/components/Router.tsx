import { InitiativePage } from "../pages/initiative";
import { PlayersPage } from "../pages/players";
import { Route, Routes } from "react-router-dom";
import { Settings } from "../pages/settings";
import { Header } from "./Header";
import { HomePage } from "../pages/home";

export const Router = () => {
  return (
    <>
      <Header />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/initiative" element={<InitiativePage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/players" element={<PlayersPage />} />
      </Routes>
    </>
  );
};
