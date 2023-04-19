import { AppRegistry } from "@microfrontends/registry";

export const Dashboard = (props: { apps: AppRegistry }) => {
  return (
    <div>
      <div id="react-host" />
      <div id="ce-host" />
      <div id="vue-host" />
    </div>
  );
};
