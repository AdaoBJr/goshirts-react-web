import React from 'react';

import defaultClasses from './createAccount.module.css';
import { InputText, Dropdown, useStyle } from '@goshirts-react/lib';

import { useCreateAccount } from '../../services/talons';

const items = [
  { key: 1, label: 'Masculino', value: 0 },
  { key: 2, label: 'Feminino', value: 1 },
];

const CreateAccount = (props) => {
  const classes = useStyle(defaultClasses, props.classes);

  const { handleChange, onValueChange, inputData } = useCreateAccount();

  console.log(inputData);

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Cadastrar</h1>
        <InputText
          id="firstname"
          name="firstname"
          label="Nome*"
          autoComplete="off"
          onBlur={handleChange}
        />
        <InputText
          id="lastname"
          name="lastname"
          label="Sobrenome*"
          autoComplete="off"
          onBlur={handleChange}
        />
        <div className={classes.genderBirth}>
          <Dropdown
            id="gender"
            label="Gênero*"
            items={items}
            onValueChange={onValueChange}
          />
          <InputText
            id="birthOfDate"
            name="birthOfDate"
            label="Data de Nascimento*"
            autoComplete="off"
            onBlur={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
