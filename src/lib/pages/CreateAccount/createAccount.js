import React from 'react';
import defaultClasses from './createAccount.module.css';
import { InputText, Dropdown, useStyle } from '@goshirts-react/lib';

const items = [
  { key: 1, label: 'Masculino', value: 0 },
  { key: 2, label: 'Feminino', value: 1 },
];

const CreateAccount = (props) => {
  const classes = useStyle(defaultClasses, props.classes);

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Cadastrar</h1>
        <InputText
          label="Nome*"
          name="firstname"
          classes={{ input: classes.createAccountInput }}
        />
        <InputText
          label="Sobrenome*"
          name="lastname"
          classes={{ input: classes.createAccountInput }}
        />
        <Dropdown items={items} />
      </div>
    </div>
  );
};

export default CreateAccount;
