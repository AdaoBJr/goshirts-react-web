import React from 'react';

import defaultClasses from './createAccount.module.css';
import { InputText, Dropdown, useStyle } from '@goshirts-react/lib';

import { useCreateAccount } from '../../services/talons';

const gender = [
  { key: 1, label: 'Masculino', value: 0 },
  { key: 2, label: 'Feminino', value: 1 },
];

const country = [
  { key: 1, label: 'Brasil', value: 1 },
  { key: 2, label: 'Chile', value: 2 },
  { key: 3, label: 'Espanha', value: 3 },
  { key: 4, label: 'Estados Unidos', value: 4 },
  { key: 5, label: 'Inglaterra', value: 5 },
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
          type="text"
          name="firstname"
          label="Nome*"
          autoComplete="off"
          onBlur={handleChange}
        />
        <InputText
          id="lastname"
          type="text"
          name="lastname"
          label="Sobrenome*"
          autoComplete="off"
          onBlur={handleChange}
        />
        <div className={classes.genderBirth}>
          <Dropdown
            id="gender"
            label="Gênero*"
            items={gender}
            onValueChange={onValueChange}
          />
          <InputText
            id="birthOfDate"
            type="text"
            name="birthOfDate"
            label="Data de Nascimento*"
            autoComplete="off"
            onBlur={handleChange}
          />
        </div>
        <Dropdown
          id="country"
          label="País*"
          items={country}
          onValueChange={onValueChange}
          classes={{
            items: classes.dropCountryItems,
            itemsActive: classes.dropCountryItemsActive,
          }}
        />
        <div className={classes.cpfPhone}>
          <InputText
            id="CPF"
            type="text"
            name="CPF"
            label="CPF*"
            autoComplete="off"
            onBlur={handleChange}
          />
          <InputText
            id="phone"
            type="text"
            name="phone"
            label="Telefone Celular*"
            autoComplete="off"
            onBlur={handleChange}
          />
        </div>
        <InputText
          id="email"
          type="e-mail"
          name="email"
          label="E-mail*"
          autoComplete="off"
          onBlur={handleChange}
        />
        <InputText
          id="newsletter"
          type="checkbox"
          name="newsletter"
          label="Quero receber a newsletter"
          autoComplete="off"
          classes={{
            root: classes.checkNewsletter,
            label: classes.label,
            input: classes.input,
            textVisible: classes.textVisible,
            textInvisible: classes.textInvisible,
          }}
          onChange={handleChange}
        />
        <InputText
          id="password"
          type="password"
          name="password"
          label="Senha*"
          autoComplete="off"
          onBlur={handleChange}
        />
        <InputText
          id="confirm_password"
          type="password"
          name="confirm_password"
          label="Confirme senha*"
          autoComplete="off"
          onBlur={handleChange}
        />
      </div>
    </div>
  );
};

export default CreateAccount;
