import { AppRegistry } from "@microfrontends/registry";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { Dashboard } from "./Dashboard";
import { Menu } from "./Menu";

export const HostApp = () => {
  const [apps, setApps] = useState<AppRegistry>({});

  useEffect(() => {
    axios.get(import.meta.env.VITE_REGISTRY_URL).then((r) => setApps(r.data));
  }, []);

  return (
    <div>
      <h1>Host App</h1>
      <Menu apps={apps || {}} />
      <Dashboard apps={apps || {}} />
      <BrowserRouter>
        <AppRouter apps={apps || {}} />
      </BrowserRouter>
    </div>
  );
};
