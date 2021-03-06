import React, { FC, useCallback, useRef} from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiLock } from 'react-icons/fi';

import Input from '../../../components/global/Input';
import Button from '../../../components/global/Button';

const FormPassword: FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmitForm = useCallback<SubmitHandler>(() => {
    console.log('oi')
  }, [])

  return (
    <Form ref={formRef} onSubmit={handleSubmitForm}>
      <Input
        name="current_password"
        icon={FiLock}
        label="Senha atual"
        type="password"
        />
      <Input
        name="password"
        label="Nova senha"
        icon={FiLock}
        type="password"
      />
      <Input
        name="confirmation_password"
        label="Confirmação da senha"
        icon={FiLock}
        type="password"
      />
      <Button fullwidth>Confirmar</Button>
    </Form>
  )
}

export default FormPassword;
