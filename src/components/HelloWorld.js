import { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const Button = styled.button`
    display: inline-block;
    color: ${props => props.primary ? "black" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    cursor: pointer;
`;
class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Goood morning"
        }
    }
    render() {
        return(
            <Wrapper>
            <Title>{this.state.message}</Title>
            <Button as="a" href="/" primary>Click Me!</Button>
            </Wrapper>
        )
    }
}

export default Hello;