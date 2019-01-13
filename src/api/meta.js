import React from 'react'

import { meta as constMeta } from './meta'
import { navBar } from './navBar'

export const meta = {
  name: 'Kumar Abhirup',
  title: 'Kumar Abhirup',
  website: 'https://kumarabhirup.com',
  tagline: (<>A Jnr. developer with a passion for learning 👋🏻 <br /><br /></>), // A 15 year-old web developer 👋🏻
  image: navBar.logo,
  favicon: `${process.env.PUBLIC_URL}/favicon.ico`,
  email: `hey@kumarabhirup.com`,
  domain: 'https://kumarabhirup.com' // process.env.STAGE === 'PRODUCTION' ? 'kumarabhirup.com' : '/'
}