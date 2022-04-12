import { generateMutationOp } from '../../../generated';

export const createCustomerGQL = ({ data }) => {
  return generateMutationOp({
    createCustomer: [{ data }, { customer: { id, email, firstname } }]
  });
};
