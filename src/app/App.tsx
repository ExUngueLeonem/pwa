import { PWABadge } from "shared/ui";

//module
import { AppRoutes } from "./appRouter";

//styles
import './main.scss';

function App() {

  return (
    <>
      <AppRoutes/>
      <PWABadge />
    </>
  )
}

export default App
