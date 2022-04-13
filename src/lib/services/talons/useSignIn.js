import { useState, useCallback } from 'react';
import { useMutation, gql } from '@apollo/client';
import { signInCustomerGQL } from '../../../gql/customer';

const useSignIn = () => {
  const initialData = { email: '', password: '' };
  const [inputData, setInputData] = useState(initialData);
  const [activePwdIcon, setActivePwdIcon] = useState({ password: false });

  const { query, variables } = signInCustomerGQL({ data: inputData });

  const [signInCustomer] = useMutation(gql(query));

  const handleChange = useCallback(
    ({ target: { value, name } }) => {
      setInputData(prevState => ({ ...prevState, [name]: value }));
    },
    [setInputData]
  );

  const handleClickPwd = useCallback(
    ({ target: { id } }) =>
      setActivePwdIcon(prevState => ({ ...prevState, [id]: !prevState[id] })),
    [setActivePwdIcon]
  );

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await signInCustomer({ variables });
      console.log('response', response);
    } catch (error) {
      console.log(`Unexpect Error on Mutation ${error}`);
    }
  };

  return {
    handleChange,
    handleSubmit,
    handleClickPwd,
    inputData,
    activePwdIcon
  };
};

export default useSignIn;
