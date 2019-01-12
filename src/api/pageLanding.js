import { meta } from '../api'

export const title = {
  uses: `Things I use 🦄`,
  page404: `Error 404 💩`,
  portfolio: `Projects 🦄`
}

export const iconsAndLabels = {
  uses: [
    { icon: `mbri-wifi`, label: `Editing` },
    { icon: `mbri-devices`, label: `Hardware` },
    { icon: `mbri-laptop`, label: `Coding` },
    { icon: `mbri-speed`, label: `Other` }
  ],
  page404: [
    { icon: `mbri-drag-n-drop2`, label: `Websites` },
    { icon: `mbri-tablet-vertical`, label: `Apps` },
    { icon: `mbri-apple`, label: `CLI` },
    { icon: `mbri-speed`, label: `Libraries` }
  ],
  portfolio: [
    { icon: `mbri-drag-n-drop2`, label: `Websites` },
    { icon: `mbri-tablet-vertical`, label: `Apps` },
    { icon: `mbri-apple`, label: `CLI` },
    { icon: `mbri-speed`, label: `Libraries` }
  ]
}

export const arrowTakesWhere = {
  uses: "uses",
  page404: null,
  portfolio: "portfolio",
  home: "about"
}

export const button = {
  all: {
    icon: `mbrib-user`,
    text: `WHO AM I?`,
    link: `${meta.domain}#about`
  },
  page404: {
    icon: `mbrib-smile-face`,
    text: `VISIT HOMEPAGE`,
    link: `${meta.domain}`
  }
}

export const homeButtons = {
  1: {
    class: `btn-secondary`,
    icon: `mbri-rocket`,
    text: `ABOUT ME`,
    link: `about`
  },
  2: {
    class: `btn-white-outline`,
    icon: `mbri-devices`,
    text: `PORTFOLIO`,
    link: `portfolio`
  },
}