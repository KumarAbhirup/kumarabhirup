import { navBar, meta as constMeta } from '../api'

export const meta = {
  name: 'Kumar Abhirup',
  title: 'Kumar Abhirup',
  website: 'kumarabhirup.com',
  tagline: 'A 15 year-old web developer 👋🏻',
  image: navBar.logo,
  favicon: `${process.env.PUBLIC_URL}/favicon.ico`,
  email: `hey@kumarabhirup.com`,
  domain: process.env.STAGE === 'PRODUCTION' ? constMeta.website : '/'
}