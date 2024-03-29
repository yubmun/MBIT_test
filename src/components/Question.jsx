import React from 'react'
import styled from "styled-components";
import { useContext } from "react";
import { commonData } from '../App';

const SurveyQ = styled.form`
  font-size: 14px;
  line-height: 20px;
  color: black;
  & ol {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 280px;
  }
  & ol > li > label, input{
    cursor: pointer;
  }
  & ol li {
    display: flex;
    align-items: flex-start;
  }

`
const SurveyTitle = styled.title`
  position: absolute;
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`

function Question(props) {
  const {question} = useContext(commonData);

  return (
    <SurveyQ>
      <SurveyTitle>질문폼</SurveyTitle>
      <ol>
        <li>
          <input type="radio" name="question1" id="one" />
          <label htmlFor="one">
            1. {question.answers[props.answerNumber - 1].content}
          </label>
        </li>
        <li>
          <input type="radio" name="question1" id="two" />
          <label htmlFor="two">
            2. {question.answers[props.answerNumber].content}
          </label>
        </li>
        <li>
          <input type="radio" name="question1" id="three" />
          <label htmlFor="three">
            3. {question.answers[props.answerNumber + 1].content}
          </label>
        </li>
        <li>
          <input type="radio" name="question1" id="four" />
          <label htmlFor="four">
            4. {question.answers[props.answerNumber + 2].content}
          </label>
        </li>
        <li>
          <input type="radio" name="question1" id="five" />
          <label htmlFor="five">
            5. {question.answers[props.answerNumber + 3].content}
          </label>
        </li>
      </ol>
    </SurveyQ>
  );
}

export default Question