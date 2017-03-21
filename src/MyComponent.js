import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
	color: red;
`

class MyComponent extends React.Component {
	render () {
		return (
			<Title>
				<h1>Eddie Wang</h1>
			</Title>
		)
	}
}

export default MyComponent
