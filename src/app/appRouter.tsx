import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "pages/home";
import { MapPage } from "pages/map";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/map"} element={<MapPage/>} />
      </Routes>
    </BrowserRouter>
  )
}