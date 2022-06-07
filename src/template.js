// navbar

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <a className="navbar-brand" href="index.html">
        Navbar
      </a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="./index.html">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="./press.html">
              Press
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Sidebar = () => {
  return (
    <div className="d-none d-md-block col-md-3">
      <div className="border border-primary py-4 px-3">Sidebar</div>
    </div>
  );
};

const Footer = () => {
  return <div className="border-top p-2">Template Demo © 2019</div>;
};


//template:use all other smaller components tocompose the entire page
//children.props: access to the children content of a component
//React.Fragment: replaces div so that div is not a parent element to wrap all content
const Template = (props) => {
    return (
      <React.Fragment>
        <Navbar /> 
        <div className="container py-4">
          <div className="row">
                    <div className="col-12 col-md-9">{props.children}</div>
                    <Sidebar />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
}
