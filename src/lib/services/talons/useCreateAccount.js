import { useCallback, useState } from 'react';

const useCreateAccount = () => {
  const initial = {};
  const [input, setInput] = useState(initial);

  const handleChange = useCallback(({ target: { value, name } }) =>
    setInput((prevState) => ({ ...prevState, [name]: value }))
  );

  const onValueChange = useCallback(({ id, itemActive }) =>
    setInput((prevState) => ({ ...prevState, [id]: itemActive }))
  );

  return { handleChange, onValueChange, inputData: input };
};

export default useCreateAccount;
