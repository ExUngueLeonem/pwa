import { useEffect, useRef } from "react";
import webGLFluidEnhanced from "webgl-fluid-enhanced";
import "./fluid.css";
export const Fluid = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef?.current) return

    webGLFluidEnhanced.simulation(canvasRef.current, {
      SIM_RESOLUTION: 64,
      DENSITY_DISSIPATION: 0.9,
      PRESSURE_ITERATIONS: 1,
      COLOR_PALETTE: ['#61dafb', '#a8dadc', '#457b9d', '#1d3557', '#f1faee'],
      BACK_COLOR: "#1f213a",
      // TRANSPARENT: true,
      // BLOOM: true,
    });
  }, []);


  return (
    <div className='fluid_container'>
      <canvas id={"fluid_canvas"} ref={canvasRef} style={{ width: '100vw', height: '100vh' }} />
    </div>
  )
}