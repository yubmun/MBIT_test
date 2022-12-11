import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"

const ButtonStyle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 52px;
  color: #9b51e0;
  font-size: 16px;
  font-weight: 900;
  background: #FFFFFF;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.5);
  border-radius: 10px;
  transition: .3s;
  &:hover {
    background-color: #9b51e0;
    color: #FFFFFF;
  }
`
const ButtonStylePurple = styled(ButtonStyle)`
  width: 100px;
  height: 40px;
  background-color: #9b51e0;
  color: white;
  &:hover {
    background-color: #ffffff;
    color: #9b51e0;
  }
`

function Button(props) {
  if(props.name === "white"){
    return (
      <ButtonStyle to={props.to}>
        {props.value}
      </ButtonStyle>
    )
  }

  if(props.name === "purple"){
    return(
      <ButtonStylePurple to={props.to}>
        {props.value}
      </ButtonStylePurple>
    )
  }
}

export default Button