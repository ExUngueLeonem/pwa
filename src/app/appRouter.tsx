import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainLayout } from "shared/ui";
import { NavPanel } from "widgets/navPanel";
import { HomePage } from "pages/home";
import { MapPage } from "pages/map";
import { CameraPage } from "pages/camera";
import { QRScannerPage } from "pages/qr_scanner";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainLayout navigationPanel={<NavPanel />} />}>
          <Route index element={<HomePage />} />
          <Route path={"/map"} element={<MapPage />} />
          <Route path={"/camera"} element={<CameraPage />} />
          <Route path={"/qr_scanner"} element={<QRScannerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}