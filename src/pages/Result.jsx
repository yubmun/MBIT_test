import React from 'react'
import styled from "styled-components"
import resultImg from "../assets/img/result1.png"
import Button from '../components/Button'

const ResultWraaper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  gap: 10px;
`

const ResultTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & span{
    font-size: 14px;
    font-weight: 400;
  }
  & h2 {
    margin-top: 10px;
    font-size: 36px;
    font-weight: 900;
    color: #9b41e0;
  }
  & img {
    width: 228px;
    height: 241px;
  }
`

const ResultDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  & strong{
    width: 300px;
    padding: 8px 0;
    text-align: center;
    border-top: 2px solid #9b51e0;
    border-bottom: 2px solid #9b51e0;
  }

  & ol{
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 30px;
  }
  & li {
    position: relative;
    padding-left: 6px;
  }
  & li::before{
    content:'';
    position: absolute;
    left: -6px;
    top: 3px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #9b51e0;
  }
`

function Result() {

  return (
    <ResultWraaper>
      <ResultTitle>
        <span>Game을 좋아하고, 상상을 즐겨하는 당신은!</span>
        <h2>게임 개발</h2>
        <img src={resultImg} alt="게임개발자 이미지"/>
      </ResultTitle>
      <ResultDesc>
        <strong>나와 맞는 개발 유형은 게임 개발?!</strong>
        <ol>
          <li>
            뭐든 새로 나오면 한번 경험해봐야 직성이 풀림. 남들이 이거 해봤냐고 물어보면 당연하지! 라고 대답하는 편
          </li>
          <li>
            남들과 똑같기를 거부한다! 창의적인 스타일,항상 새로운 재미있는 것을 추구한다.
          </li>
        </ol>
      </ResultDesc>
      <Button name="white" value="테스트 다시하기" to="/"/>
    </ResultWraaper>
  )
}

export default Result