import React from 'react'
import { navBar } from './navBar'

require('dotenv').config();

export const stage = "PROD"
export const devURL = "http://localhost:3000"

export const meta = {
  name: 'Kumar Abhirup',
  title: 'Kumar Abhirup',
  website: 'https://kumarabhirup.com',
  tagline: (<>A Jnr. developer with a passion for learning 👋🏻 <br /><br /></>), // A 15 year-old web developer 👋🏻
  image: navBar.logo,
  favicon: `${process.env.PUBLIC_URL}/favicon.ico`,
  email: `hey@kumarabhirup.com`,
  domain: stage === "PROD" ? 'https://kumarabhirup.com' : devURL
}