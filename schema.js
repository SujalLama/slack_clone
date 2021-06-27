const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type User {
        name: String,
        email: String!,
        password: String!,
        token: String,
    }

    type Query {
        allUsers: [User]
    }
`

module.exports = {typeDefs}