import { Route, Switch, Redirect } from "react-router-dom";
import { OnboardingModule } from "../modules";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/onboarding" />
      <Route path="/onboarding" component={OnboardingModule} />
    </Switch>
  );
};
