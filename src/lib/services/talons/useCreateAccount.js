import { useCallback, useState } from 'react';

const useCreateAccount = () => {
  const initial = {};
  const [input, setInput] = useState(initial);

  const handleChange = useCallback(({ target: { checked, value, name } }) =>
    setInput((prevState) => ({ ...prevState, [name]: checked || value }))
  );

  const onValueChange = useCallback(({ id, itemActive }) =>
    setInput((prevState) => ({ ...prevState, [id]: itemActive }))
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return { handleChange, handleSubmit, onValueChange, inputData: input };
};

export default useCreateAccount;
