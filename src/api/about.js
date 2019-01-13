import React from 'react'
import { meta } from '../api/meta'

export const whoAmI = {
  title: `👁️‍🗨️ Who am I?`,
  text: `I develop web apps, simple command line tools, and everything I feel could look fascinating! ☕`,
  questions: [
    {
      question: ` Am I not too young to code? 🖥️`,
      answer: (
        <>
          I started learning web development since I was 12.<br /> I have never looked back then... 🙂 &nbsp;I'm 15 by now.<br />I love building and shipping stuffs. It's my hobby.
        </>
      )
    },
    {
      question: ` What are your everyday tools? 🤔`,
      answer: (
        <>
          Visit <a href="https://kumarabhirup.com/uses">kumarabhirup.com/uses</a>&nbsp;to get an insight of what dev tools, browser, terminal, apps and softwares I use.
        </>
      )
    },
    {
      question: ` What have I built till date? 🚀`,
      answer: (
        <>
          Visit <a href="https://www.kumarabhirup.com/projects">kumarabhirup.com/projects</a> to check out my porfolio.&nbsp;😄
        </>
      )
    },
    {
      question: ` My story 🏮`,
      answer: (
        <>
          My story has been published at many places but the one I like is <a href="https://heropress.com/essays/life-designed-wordpress/" target="_blank" rel="noopener noreferrer">here</a>.
        </>
      )
    }
  ],
  image: meta.image
}