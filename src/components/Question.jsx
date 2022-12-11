import React from 'react'
import styled from "styled-components";

const SurveyQ = styled.form`
  font-size: 14px;
  line-height: 20px;
  color: black;
  & ol {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  & ol > li > label, input{
    cursor: pointer;
  }
  & ol li {
    display: flex;
    align-items: flex-start;
  }

`

function Question() {
  return (
    <SurveyQ>
    <ol>
      <li>
        <input type="radio"  name='question1' id='one' />
        <label htmlFor="one">1. 데이터 분석을 통한 효과적인 개인 맞춤형 서비스</label>
      </li>
      <li>
        <input type="radio" name='question1' id='two'/>
        <label htmlFor="two">2. 화려하거나 품격있는 디자인, 흥미로운 콘텐츠 제작</label>
      </li>
      <li>
        <input type="radio" name='question1' id='three'/>
        <label htmlFor="three">3. 게임적인(Gameification)요소 도입</label>
      </li>
      <li>
        <input type="radio" name='question1' id='four'/>
        <label htmlFor="four">4. 안정적인 서비스 운용</label>
      </li>
      <li>
        <input type="radio" name='question1' id='five'/>
        <label htmlFor="five">5. 믿을 수 있는 정보 관리</label>
      </li>
    </ol>
  </SurveyQ>
  )
}

export default Question