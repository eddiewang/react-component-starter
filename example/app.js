import React from 'react'
import ReactDOM from 'react-dom'
import MyComponent from 'MyComponent'
import { injectGlobal } from 'styled-components';
import styled from 'styled-components'

injectGlobal`
	* {
		box-sizing: border-box;
	}
	.container {
		max-width: 100%;
		max-height: 100%;
		padding: 40px;
	}
`
const Wrapper = styled.div`
	display: relative;
	max-width: 100%;
	height: 100%;
	overflow-x: scroll;
	font-family: Helvetica, sans-serif;
	font-size: 0.8em;
	padding: 50px;
	background: #CCC;
`

const Title = styled.span`
	display: absolute;
	left: 10%;
	top: 10%;
	color: #333;
	font-size: 18px;
	width: 100%;
	text-align: center;
`

var App = React.createClass({
	render: function() {
		return (
			<Wrapper>
				<Title>My React Component</Title>
				<MyComponent />
			</Wrapper>
		)
	}
})

ReactDOM.render(<App />, document.getElementById('app'));
