const projects = [
    { 
      title: `bulk-mail-cli`,
      description: `A command line interface (cli) application that sends automated and dynamic emails to the list.`,
      link: `https://www.github.com/KumarAbhirup/bulk-mail-cli`,
      image: `${process.env.PUBLIC_URL}/prebuilt/images/jumbotron.jpg`
    },
    { 
      title: `iconic-input`,
      description: `A react-native input component library which deals with appealing and attractive input boxes.`,
      link: `https://www.github.com/KumarAbhirup/iconic-input`,
      image: `${process.env.PUBLIC_URL}/prebuilt/images/mbr-774x1080.jpg`
    },
    { 
      title: `kumarabhirup.com`,
      description: `This website itself is a part of my portfolio... It is created in React.JS and uses GraphQL to empower the content.`,
      link: `https://www.github.com/KumarAbhirup/kumarabhirup`,
      image: `${process.env.PUBLIC_URL}/prebuilt/images/background5.jpg`
    },
    { 
      title: `kumarabhirup.com`,
      description: `This website itself is a part of my portfolio... It is created in React.JS and uses GraphQL to empower the content.`,
      link: `https://www.github.com/KumarAbhirup/kumarabhirup`,
      image: `${process.env.PUBLIC_URL}/prebuilt/images/background5.jpg`
    }
]

const projectsAtHomepage = 3

export const portfolio = {
  title: `Portfolio 🍊`,
  portfolio: projects,
  moreButtonText: projects.length > projectsAtHomepage ? `Wanna see more of my projects? ☕` : null,
  projectsAtHomepage
}