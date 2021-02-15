import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString} from 'graphql';
import * as faker from 'faker';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      name: {
        type: GraphQLString,
        resolve() {
          return faker.name.findName()
        }
      },
      streetAddress: {
        type: GraphQLString,
        resolve() {
          return faker.address.streetAddress()
        }
      },
      url: {
        type: GraphQLString,
        resolve() {
          return faker.internet.url()
        }
      }
    }
  })
})
