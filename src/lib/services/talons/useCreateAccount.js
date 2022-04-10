import { useCallback, useState } from 'react';

const useCreateAccount = () => {
  const initial = {};
  const [inputData, setInputData] = useState(initial);

  const handleChange = useCallback(({ target: { checked, value, name } }) =>
    setInputData((prevState) => ({ ...prevState, [name]: checked || value }))
  );

  const onValueChange = useCallback(({ id, itemActive }) =>
    setInputData((prevState) => ({ ...prevState, [id]: itemActive }))
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('enviando os dados', inputData);
  };

  return { handleChange, handleSubmit, onValueChange, inputData };
};

export default useCreateAccount;
