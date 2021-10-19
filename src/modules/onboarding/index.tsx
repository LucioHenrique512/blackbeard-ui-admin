import { Login } from "./pages/login";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

export const OnboardingModule: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Redirect exact path={path} to={`${path}/login`} />
      <Route path={`${path}/login`} component={Login} />
    </Switch>
  );
};
