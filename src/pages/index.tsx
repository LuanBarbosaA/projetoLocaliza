import React, { FC, useRef, useEffect, useState } from "react";
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import DatePickerForm from "@components/InputCalendario/DatePickerForm";
import Header from '../components/global/Header';
import Input from '../components/global/Input'
import Button from '../components/global/Button'
import Card from '../components/global/Card';

import { Section, SectionContainer, Content, HeaderPag, BoxCards } from '../styles/pages/dashboard';

import api from '../services/api';
import { FiCalendar } from "react-icons/fi";

interface IProps {
  id: number;
  valorHora: number;
  url: string;
  marca: {
    nome: string;
  }
  modelo: {
    nome: string;
  }
}

const Dashboard: FC = () => {
  const formRef = useRef<FormHandles>();
  const [veiculos, setVeiculos] = useState<IProps[]>([]);

  useEffect(() => {
    async function getVeiculos(): Promise<void> {
      const response = await api.get('/Veiculo/buscarTodos');
      setVeiculos(response.data)
    }

    getVeiculos()
  }, [])


  return (
    <>
      <Header hidden={true} />
      <Section>
        <SectionContainer>
          <h1>
          Aluguel de Carros com a maior frota do Brasil!
          <br />
          Faça sua simulação!
          </h1>
          <Form ref={formRef} onSubmit={() => console.log('oi')}>
            <DatePickerForm background="#ffffff" color="#000000" type="text" />
            <DatePickerForm background="#ffffff" color="#000000" type="text" />
            <Button fullwidth color="yellow">Reservar agora</Button>
          </Form>
        </SectionContainer>
      </Section>
      <Content>
        <HeaderPag>
          <h2>Selecione um carro</h2>
          <span>Total 6 carros</span>
        </HeaderPag>
        <BoxCards>
          {veiculos.map((veiculo) => (
            <Card key={veiculo.id} veiculo={veiculo} />
            ))}
        </BoxCards>
      </Content>
    </>
  );
}

export default Dashboard
