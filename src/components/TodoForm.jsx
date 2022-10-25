import React from 'react';
import styled from 'styled-components'

const StyledForm = styled.form`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
`

const StyledButton = styled.button`
    font-family: 'Roboto', sans-serif;
    min-height: 3rem;
    width: 15%;
    background: #84A59D;
    border-radius: 0.8rem;
    border: none;
    font-weight: 600;
    font-size: 1.5rem;
    color: #F7EDE2;
    text-align: center;
    
    &:hover {
        background-color: #F28482;
    }
    
    @media screen and (max-width: 700px) {
        font-size: 1rem;
    }
`

const StyledInput = styled.input`
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
    width: 80%;
    border: none;
    border-bottom: 5px dashed #F6BD60;
    background-color: transparent;
    color: #3F4B48;
    padding: 0;
    
    &:focus {
        outline: none;
        border: 5px solid #F6BD60;
    }
    
    @media screen and (max-width: 700px) {
        font-size: 1rem;
    }
`

export default class TodoForm extends React.Component {

    handleSubmit = (e) => {
        const { onSubmit } = this.props
        e.preventDefault();
        onSubmit(e.target.firstChild.value);
        e.target.firstChild.value = ''
    }

    render() {
        return (
            <StyledForm onSubmit={this.handleSubmit}>
                <StyledInput placeholder="your task for today" onChange={this.handleChange}></StyledInput>
                <StyledButton>add</StyledButton>
            </StyledForm>
        );
    }
}

