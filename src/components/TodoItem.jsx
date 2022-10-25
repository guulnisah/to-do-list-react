import React from 'react';
import styled from 'styled-components'
import { IconContext } from "react-icons";
import { FaMinusCircle, FaCheckCircle } from 'react-icons/fa'

const StyledTodo = styled.div`
    width: 100%;
    min-height: 4rem;
    background: #84A59D;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
`

const StyledParagraph = styled.p`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 1.5rem;
    color: #F7EDE2;
    margin-right: auto;
    text-decoration: ${({ completed }) => {
        if (completed) { return 'line-through' }
        else { return 'none' }
    }};
    text-decoration-color: #F28482;
`

const Hover = styled.span`
    &:hover {
        opacity: 0.7;
    }
`

export default class TodoItem extends React.Component {

    render() {
        const { todo, onComplete, onDelete } = this.props
        return (
            <StyledTodo>
                <StyledParagraph completed={todo.completed}>{todo.text}</StyledParagraph>
                <IconContext.Provider value={{ color: "#F6BD60", size: "2rem" }}>
                    <Hover><FaCheckCircle onClick={onComplete} /></Hover>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "#F28482", size: "2.6rem" }}>
                    <Hover><FaMinusCircle onClick={onDelete} style={{ paddingLeft: 10 }} /></Hover>
                </IconContext.Provider>
            </StyledTodo>
        );
    }
}