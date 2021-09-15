import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes} from './routes/index';
import AppRoute from "./routes/route";
import VerticalLayout from './components/VerticalLayout';
const Layout = VerticalLayout;

function App() {
  return (
    <React.Fragment>
      <Router>
       {Routes.map((route, idx) => (
       <AppRoute
        path={route.path}
        layout={Layout}
        component={route.component}
        key={idx}
        //isAuthProtected={true}
        exact
      />
      ))}
      </Router>
    </React.Fragment>
    
  );
}

export default App;