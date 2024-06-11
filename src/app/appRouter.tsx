import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "pages/home";
import { MapPage } from "pages/map";
import { MainLayout } from "../shared/ui";
import { NavPanel } from "../widgets/navPanel";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainLayout navigationPanel={<NavPanel />} />}>
          <Route index element={<HomePage />} />
          <Route path={"/map"} element={<MapPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}