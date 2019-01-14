const projects = [
    { 
      title: `bulk-mail-cli`,
      description: `A command line interface (cli) application that sends automated and dynamic emails to the list.`,
      link: `https://www.github.com/KumarAbhirup/bulk-mail-cli`,
      image: `${process.env.PUBLIC_URL}/prebuilt/images/bulkmail.gif`
    },
    { 
      title: `kumarabhirup.com`,
      description: `This website itself is a part of my portfolio... It is created in React.JS and uses GraphQL to empower the content.`,
      link: `https://www.github.com/KumarAbhirup/kumarabhirup`,
      image: `${process.env.PUBLIC_URL}/prebuilt/images/kumarabhirupwebsite.jpg`
    },
    { 
      title: `Glitter (twitter bot)`,
      description: `Automate your Twitter. Endlessly.`,
      link: `https://github.com/KumarAbhirup/glitter`,
      image: `${process.env.PUBLIC_URL}/prebuilt/images/glitterbot.png`
    },
    { 
      title: `iconic-input`,
      description: `A react-native input component library which deals with appealing and attractive input boxes.`,
      link: `https://www.github.com/KumarAbhirup/iconic-input`,
      image: `${process.env.PUBLIC_URL}/prebuilt/images/iconic-input.jpg`
    },
    { 
      title: `WP Iconizer`,
      description: `Replace the well-known WordPress icon of the TopLeft into a firey WordPress Icon, or into your OWN!`,
      link: `https://wordpress.org/plugins/iconizer`,
      image: `${process.env.PUBLIC_URL}/prebuilt/images/iconizer.png`
    },
    { 
      title: `WP Festgreets`,
      description: `Greet your readers with exciting animated GIFs on your WordPress website, anywhere placed decoratively in theme!`,
      link: `https://wordpress.org/plugins/wp-festgreets`,
      image: `https://ps.w.org/wp-festgreets/assets/icon-256x256.png`
    }
]

const projectsAtHomepage = 3

export const portfolio = {
  title: `Portfolio 🍊`,
  portfolio: projects,
  moreButtonText: projects.length > projectsAtHomepage ? `Wanna see more of my projects? ☕` : null,
  projectsAtHomepage
}