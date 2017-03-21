var React = require('react')
import MyComponent from 'index'

var App = React.createClass({
	render: function() {
		return (
			<div>
				<MyComponent />
			</div>
		)
	}
});

React.render(<App />, document.getElementById('app'));
