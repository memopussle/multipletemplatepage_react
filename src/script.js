
//a main function wraps Template

const App = () => {
    return (
        <Template>
            <h1>Main content - 123</h1> 
        </Template>
    );
}

ReactDOM.render(
  <App />,

  document.getElementById("root")
);

//If we notice, we will end up adding extra nodes to the DOM by nesting all elements inside a div => fragment is created

