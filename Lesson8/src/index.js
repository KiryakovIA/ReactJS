import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import Layout from './app/layouts/Layout';
import Main from './app/pages/Main';
import Users from './app/pages/Users';
import User from './app/pages/User';
import PageNotFound from './app/pages/PageNotFound';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Main} />
			<Route path="users" component={Users} >
				<Route path=":userId" component={User} />
			</Route>
			<Route path="*" component={PageNotFound} />
		</Route>
	</Router>,
	document.getElementById('root'));

/*   localhost:8080/
<Layout>
	<Main />
</Layout>
*/