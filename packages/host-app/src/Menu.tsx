import { AppRegistry } from "@microfrontends/registry";

export const Menu = (props: { apps: AppRegistry } = { apps: {} }) => {
  return Object.keys(props.apps)?.map((k) => (
    <div key={k}>
      <a href={props.apps[k].route}>{k}</a>
    </div>
  ));
};
