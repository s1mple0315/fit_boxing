import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import AppRouter from "../config/routes/router";

const App = () => {
  return (
    <div>
      <AppRouter />
      <SpeedInsights />
    </div>
  );
};

export default App;
