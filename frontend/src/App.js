import "./App.css";
import Home from "./components/Home/Home.jsx";
import Supplier from "./components/Supplier/Supplier";
import Customer from "./components/Customer/Customer";
import Billing from "./components/Billing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Report from "./components/Reports";
export default function App() {
	return (
		<Router>
			<div className='App'>
				<Route exact path='/' component={Home} />
				<section>
					<Switch>
						<Route exact path='/customer' component={Customer} />
						<Route exact path='/supplier' component={Supplier} />
						<Route exact path='/reports' component={Report} />
						<Route exact path='/billing' component={Billing} />
					</Switch>
				</section>
			</div>
		</Router>
	);
}
