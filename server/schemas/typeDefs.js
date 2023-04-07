const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Inventory {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Batch {
    _id: ID
    batchDate: String
    inventory: [Inventory]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    batches: [Batch]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Inventory]
    inventory(_id: ID!): Inventory
    user: User
    batch(_id: ID!): Batch
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addBatch(products: [ID]!): Batch
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateInventory(_id: ID!, quantity: Int!): Inventory
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
