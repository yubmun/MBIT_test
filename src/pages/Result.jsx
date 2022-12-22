import React, { useContext, useEffect } from 'react'
import styled from "styled-components"
import resultImg from "../assets/img/result1.png"
import Button from '../components/Button'
import { commonData } from '../App'
import Loading from './Loading'

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
    line-height: 20px;
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

  useEffect(() => {
    setInterval(()=> {return <Loading/>}, 2000)
  },[])

  const {answer} = useContext(commonData);
  console.log({answer}.answer[0].title);

  return (
    <ResultWraaper>
      <ResultTitle>
        <span>{{answer}.answer[0].title}</span>
        <h2>{{answer}.answer[0].name}</h2>
        <img src={resultImg} alt="게임개발자 이미지"/>
      </ResultTitle>
      <ResultDesc>
        <strong>나와 맞는 개발 유형은 게임 개발?!</strong>
        <ol>
          {
            {answer}.answer[0].features.map((item)=>{
              return(
                <li>
                  {item}
                </li>
              )
            })
          }
        </ol>
      </ResultDesc>
      <Button name="white" value="테스트 다시하기" to="/"/>
    </ResultWraaper>
  )
}

export default Result