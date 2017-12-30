//ReactDOM.render(<h1>hello world</h1>, document.getElementById('navbar'));
var Greeting = React.createClass({
    render: function() {
      	return (
			React.createElement('h1', null, 'Hello World')
      	)
    }
});

window.addEventListener('load', function() {
	React.render(
		React.createElement(Greeting, null),
		document.getElementById('navbar')
	);
});

/*
ReactDOM.render(
    <Greeting/>,
    document.getElementById('navbar')
);
*/
