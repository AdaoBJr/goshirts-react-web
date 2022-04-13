import { generateMutationOp } from '../../../generated';

export const createCustomerGQL = ({ data }) =>
  generateMutationOp({
    createCustomer: [{ data }, { customer: { id: true, email: true, firstname: true } }]
  });
