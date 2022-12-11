import React, { useState } from 'react'
import styled from "styled-components"
import Button from '../components/Button'
import Question from '../components/Question'
import { useContext } from "react";
import { commonData } from '../App';

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
const Gage = styled.span`
      position: absolute;
      width: ${(props) => props.number * 30}px;
      height: 6px;
      background-color: #9b51e0;
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
    height: 50px;
  }
`
const ButtonWrap = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`
const MoveButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #9b51e0;
  color: white;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.5);
  border-radius: 10px;
  border: none;
  transition: .2s;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: #9b51e0;
  }
`

function Survey() {
  const {question} = useContext(commonData);
  console.log({question});
  const [number, setNumber] = useState(1);
  const [answerNumber, setAnswerNumber] = useState(1);
  
  const clickNext = (e) => {
    setNumber(number + 1);
    setAnswerNumber(answerNumber + 4);
  }
  const clickPrev = (e) => {
    setNumber(number - 1);
    setAnswerNumber(answerNumber - 4);
  }
  return (
    <SurveyStyle>
      <StatusBarStyle>
        <span>{number}/10</span>
        <div>
          <Gage number={number}></Gage>
        </div>
      </StatusBarStyle>
      <SurveyQWrap>
        <h2>
          Q. {question.questions[number - 1].content}
        </h2>

        <Question number={number} answerNumber={answerNumber}/>

        <ButtonWrap>

          <MoveButton onClick={clickPrev}>이전</MoveButton>
          {
            number < 10 ? <MoveButton onClick={clickNext} type="submit">다음</MoveButton> : <MoveButton>다음없음</MoveButton>
          }
        </ButtonWrap>
        {
          number === 10 ? <Button name="white" value="결과 보러가기" to="/result"/> : null
        }
      </SurveyQWrap>
    </SurveyStyle>
  );
}

export default Survey