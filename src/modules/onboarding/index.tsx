import { Signin } from "./pages/signin";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { OnboardRoutes } from "./onboardRoutes";
import { Signup } from "./pages/signup";

export const OnboardingModule: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Redirect exact path={path} to={`${path}/${OnboardRoutes.SIGNIN}`} />
      <Route path={`${path}/${OnboardRoutes.SIGNIN}`} component={Signin} />
      <Route path={`${path}/${OnboardRoutes.SIGNUP}`} component={Signup} />
    </Switch>
  );
};
