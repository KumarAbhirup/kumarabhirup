import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';

function createClient({ headers }) {

  return new ApolloClient({
    uri: `https://ka-backend.herokuapp.com/graphql`,
    request: operation => {
      operation.setContext({
        // fetchOptions: {
        //   credentials: 'include',
        // },
        headers,
      })
    }
  })

}

export default withApollo(createClient);