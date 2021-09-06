import mockData from '../fixtures/user_query.json'

// Utility to match GraphQL mutation based on the operation name
export const hasOperationName = (req, operationName) => {
  const { body } = req;
  console.log(body);
  return body.hasOwnProperty('query') && body.query.includes(operationName);
};

// Alias query if operationName matches
export const aliasQuery = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.reply(res => {
      res.body.data = mockData;
    });
  }
};

// Alias mutation if operationName matches
// export const aliasMutation = (req, operationName) => {
//   if (hasOperationName(req, operationName)) {
//     req.alias = `gql${operationName}Mutation`
//   }
// }