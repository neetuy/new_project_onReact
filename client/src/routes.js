import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import JavascriptPage from './containers/JavascriptPage.jsx';
import RubyPage from './containers/RubyPage.jsx';
import ReactPage from './containers/ReactPage.jsx';


const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/j_page',
      component: JavascriptPage
    },
    {
      path: '/r_page',
      component: RubyPage
    },
    {
      path: '/react_page',
      component: ReactPage
    },
  ]
};

export default routes;
