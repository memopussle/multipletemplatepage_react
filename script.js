
//a main function wraps Template

var App = function App() {
    return React.createElement(
        Template,
        null,
        React.createElement(
            "h1",
            null,
            "Main content - 123"
        )
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));

//If we notice, we will end up adding extra nodes to the DOM by nesting all elements inside a div => fragment is created