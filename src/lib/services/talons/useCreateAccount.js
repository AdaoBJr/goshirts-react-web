import { useCallback, useState } from 'react';

const useCreateAccount = () => {
  const initialData = {};
  const [inputData, setInputData] = useState(initialData);
  const initialPwd = { password: false, password_confirm: false };
  const [activePwdIcon, setActivePwdIcon] = useState(initialPwd);

  const handleChange = useCallback(
    ({ target: { checked, value, name } }) =>
      setInputData((prevState) => ({ ...prevState, [name]: checked || value })),
    [setInputData]
  );

  const handleClickPwd = useCallback(
    ({ target: { id } }) =>
      setActivePwdIcon((prevState) => ({ ...prevState, [id]: !prevState[id] })),
    [setActivePwdIcon]
  );

  const onValueChange = useCallback(
    ({ id, itemActive }) =>
      setInputData((prevState) => ({ ...prevState, [id]: itemActive })),
    [setInputData]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('enviando os dados', inputData);
  };

  return {
    handleChange,
    handleSubmit,
    handleClickPwd,
    onValueChange,
    inputData,
    activePwdIcon,
  };
};

export default useCreateAccount;
