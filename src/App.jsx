import React from 'react';
import Nav from './Components/Nav/Nav.jsx';
import Home from './Components/Home/Home';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {DataProvider} from './Context/DataProvider/DataProvider';

const App = () => {	
	return (
		<div>
			<DataProvider>
				<Router>
					<Nav />
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/bookmarks' component={Bookmarks} />
					</Switch>
				</Router>
			</DataProvider>
		</div>
	);
};	
	
export default App;