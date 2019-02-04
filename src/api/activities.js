import React from 'react'

export const activities = {
  title: `Latest Activities 🎃`,
  text: `Here I reveal latest and greatest ongoing things of my life!`,
  activities: [
    {
      timestamp: `15 January 2019`, // 49573986734
      title: (
        <>
          Now on <a href="https://twitter.com/kumar_abhirup" target="_blank" rel="noopener noreferrer">Twitter</a>&nbsp;🐦
        </>
      ),
      body: (
        <>
          <strong>I'm yet to create an interface to provide latest updates</strong> here in this section. Till the time, I'll be announcing things on Twitter. Just as I always do... 😉
        </>
      )
    },
    {
      timestamp: `1 January 2019`,
      title: (<>Happy new Year 🎊🥂</>),
      body: (
        <>
          May this year bring the best to you and me as well&nbsp;😆
        </>
      )
    },
    {
      timestamp: `25 December 2018`,
      title: (<>Merry Christmas 🎄</>),
      body: (
        <>
          Wish you a very happy Xmas!<br /><br />Jingle bells 🔔 &nbsp;jingle bells<br />Jingle all the way,<br />Oh what fun it is to ride<br />In a one-horse open sleigh.
        </>
      )
    }
  ]
}