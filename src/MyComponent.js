import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	height: 100%;
	h1 {
		color: brown;
	}
`

class MyComponent extends React.Component {
	render () {
		return (
			<Wrapper>
				<h1>Eddie Wang</h1>
				<p>What up</p>
			</Wrapper>
		)
	}
}

const StyledMyComponent = styled(MyComponent)`
	h1 {
		color: red !important;
	}
`

export default StyledMyComponent
