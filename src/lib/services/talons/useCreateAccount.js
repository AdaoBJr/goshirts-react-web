import { useCallback, useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { createCustomerGQL } from '../../../gql/customer';

const useCreateAccount = () => {
  const initialData = {};
  const [inputData, setInputData] = useState(initialData);
  const initialPwd = { password: false, password_confirm: false };
  const [activePwdIcon, setActivePwdIcon] = useState(initialPwd);

  const { query, variables } = createCustomerGQL({ data: inputData });

  const [createCustomer] = useMutation(gql(query));

  const handleChange = useCallback(
    ({ target: { value, name } }) => {
      setInputData(prevState => ({ ...prevState, [name]: value }));
    },
    [setInputData]
  );

  const handleCheck = useCallback(
    ({ target: { checked, name } }) => {
      setInputData(prevState => ({ ...prevState, [name]: checked }));
    },
    [setInputData]
  );

  const handleClickPwd = useCallback(
    ({ target: { id } }) =>
      setActivePwdIcon(prevState => ({ ...prevState, [id]: !prevState[id] })),
    [setActivePwdIcon]
  );

  const onValueChange = useCallback(
    ({ id, itemActive }) =>
      setInputData(prevState => ({ ...prevState, [id]: itemActive })),
    [setInputData]
  );

  const handleSubmit = async e => {
    e.preventDefault();
    delete inputData.password_confirm;

    try {
      const response = await createCustomer({ variables });
      console.log('response', response);
    } catch (error) {
      console.log(`Unexpect Error on Mutation ${error}`);
    }
  };

  return {
    handleChange,
    handleCheck,
    handleSubmit,
    handleClickPwd,
    onValueChange,
    inputData,
    activePwdIcon
  };
};

export default useCreateAccount;
