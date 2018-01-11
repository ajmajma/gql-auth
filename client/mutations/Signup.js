import gql from 'graphql-tag';

export default gql`
  mutation ($email: String, $password: String) {
    signUp(email: $email, password: $password) {
      id
      email
    }
  }
`
