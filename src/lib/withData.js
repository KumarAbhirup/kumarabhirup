import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';

function createClient({ headers }) {

  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? process.env.DEV_ENDPOINT : process.env.PROD_ENDPOINT,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      })
    }
  })

}

export default withApollo(createClient);