import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import CountryScreen from "../screens/CountryScreen";
const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact element={<HomeScreen />} />
				<Route path="/:name" exact element={<CountryScreen />} />
			</Switch>
		</Router>
	);
};

export default Routes;
