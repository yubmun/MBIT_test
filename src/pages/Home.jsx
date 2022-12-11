import React from 'react'
import styled from "styled-components"
import mainImg from "../assets/img/mainLogo.png"
import Button from '../components/Button'

const HomeStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  gap: 36px;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  & h1 {
    font-weight: 700;
    font-size: 45px;
  }

  & p {
    font-size: 14px;
    font-weight: 500;
    color: #9b51e0;
  }

  & strong {
    font-size: 16px;
    font-weight: 700;
  }

  & img {
    width: 270px;
    height: 267px;
  }
`

function Home() {
  return (
    <HomeStyle>
      <div>
        <h1>나의 MBIT</h1>
        <p>My Best IT personalities</p>
      </div>
      <strong>"나의 개발 유형은?"</strong>
      <img src={mainImg} alt="메인 이미지 로고" />
      <Button value="시작하기" to="/survey" name="white"/>
    </HomeStyle>
  )
}

export default Home