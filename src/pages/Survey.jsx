import React from 'react'
import styled from "styled-components"
import Button from '../components/Button'
import Question from '../components/Question'

const SurveyStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  gap: 40px;

`
const StatusBarStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  & span {
    font-size: 18px;
    font-weight: 400;
    color: #9B51e0;
  }
  & div {
    width: 300px;
    height: 6px;
    background-color: #ffffff;
  }
`
const SurveyQWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  gap: 30px;
  & h2 {
    font-size: 16px;
    font-weight: 900;
    line-height: 23px;
  }
`
const ButtonWrap = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`

function Survey() {
  return (
    <SurveyStyle>
      <StatusBarStyle>
        <span>2/10</span>
        <div></div>
      </StatusBarStyle>
      <SurveyQWrap>
        <h2>
          Q. 여러분의 서비스가 성공하였다면, 서비스를 성공시킨 요소는?
        </h2>

        <Question/>

        <ButtonWrap>
        <Button name="purple" value="이전"/>
        <Button name="purple" value="다음" to="/result"/>
        </ButtonWrap>
      </SurveyQWrap>
    </SurveyStyle>
  );
}

export default Survey