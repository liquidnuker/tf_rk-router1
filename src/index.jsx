var Router = ReactRouter;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

class App extends React.Component {
  render() {
    return (
      <div>      
        <ul className="tabs">
          <li><Link to="app">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="contact">Contact</Link></li>
        </ul>
        <RouteHandler />
      </div>
      );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <p>Home</p>
      </div>
      );
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <p>About</p>
      </div>
      )
  }
}

class Contact extends React.Component {
  render() {
    return (
      <div>
        <p>Contact</p>
        <ul>
        <li><Link to="subroute1">subroute1</Link></li>
        <li><Link to="subroute2">subroute2</Link></li>
        <RouteHandler />
        </ul>
      </div>
      );
  }
}

class Subroute1 extends React.Component {
  render() {
    return (
      <div>
        <p>Subroute1</p>
      </div>
      );
  }
}

class Subroute2 extends React.Component {
  render() {
    return (
      <div>
        <p>Subroute2</p>
      </div>
      );
  }
}

const routes = (
  <Route name="app" path="/" handler={App}>
  <DefaultRoute handler={Home} />

  <Route name="about" handler={About} />
  <Route name="contact" handler={Contact}>

  <DefaultRoute name="subroute1" handler={Subroute1} />
  <Route name="subroute2" handler={Subroute2} />
  </Route>
  </Route>
  );

Router.run(routes, function(Handler) {
    ReactDOM.render(
      <Handler />,
      document.getElementById('root')
    );
});
