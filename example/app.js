import React from 'react'
import ReactDOM from 'react-dom'
import MyComponent from 'MyComponent'

var App = React.createClass({
	render: function() {
		return (
			<div>
				<MyComponent />
			</div>
		)
	}
})

ReactDOM.render(<App />, document.getElementById('app'));
