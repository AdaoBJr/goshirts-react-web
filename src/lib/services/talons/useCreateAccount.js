import { useCallback, useState } from 'react';

const useCreateAccount = () => {
  const initial = {};
  const [input, setInput] = useState(initial);

  const handleChange = useCallback(({ target: { value, name } }) =>
    setInput((prevState) => ({ ...prevState, [name]: value }))
  );

  return { handleChange, inputData: input };
};

export default useCreateAccount;
