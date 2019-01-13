import React from 'react'

export const page404 = {
  title: `You seem to exist at a wrong place...`,
  body: (
    <>
      Hey, I'm <strong>Kumar Abhirup</strong>. Visit the <a href="https://www.kumarabhirup.com">homepage</a> to know more about me. 😃
    </>
  )
}

export const contact = {
  title: `👋🏻 Drop me a message`,
  icon: `mbri-speed`,
  iconText: `Instant reply`,
  text: `Trust. Write. I don't disclose 😜`,
  body: (
    <>
      Hey, I'm <strong>Kumar Abhirup</strong>. Visit the <a href="https://www.kumarabhirup.com">homepage</a> to know more about me. 😃
    </>
  ),
  submitText: `THIS FORM IS YET UNDER CONSTRUCTION 😉`, // `SEND MESSAGE`,
  map: "https://www.google.com/maps/embed/v1/place?key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU&amp;q=IQubex,+Nashik",
  placeholders: {
    name: `Your good name 😃`,
    phone: `Phone with ISD`,
    email: `Your REAL email 😠`,
    message: `Write in brief...`
  },
  disabled: true
}