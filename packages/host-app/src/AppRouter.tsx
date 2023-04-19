import { AppRegistry } from "@microfrontends/registry";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dashboard";

export const AppRouter = (props: { apps: AppRegistry }) => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard apps={props.apps} />} />
    </Routes>
  );
};
