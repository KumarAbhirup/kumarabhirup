import React from 'react'
import { navBar } from './navBar'

export const stage = "DEV"
export const devURL = "http://localhost:3006"

export const meta = {
  name: 'Kumar Abhirup',
  title: 'Kumar Abhirup',
  website: 'https://kumarabhirup.com',
  meta_description: "Hi, I am Kumar Abhirup. A Junior developer with a passion for learning. WordPress, JavaScript, Node and React are my jam!",
  meta_ogTitle: "Hey, I am Kumar Abhirup 👋🏻",
  tagline: (<>A Jnr. developer with a passion for learning 👋🏻 <br /><br /></>), // A 15 year-old web developer 👋🏻
  image: navBar.logo,
  favicon: `/static/favicon.ico`,
  email: `hey@kumarabhirup.com`,
  domain: stage === "PROD" ? 'https://kumar.now.sh' : devURL
}