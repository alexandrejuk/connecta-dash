import React from 'react';
import { AutoComplete } from 'antd';
import Form from 'react-vanilla-form'
import FormInput from './../../FormInput'

const ProductForm = ({onSubmit}) => (<Form
  onSubmit={onSubmit}
  >
  <FormInput label="nome" name="nome"/>
  <FormInput label="modelo" name="modelo"/>
  <FormInput label="preci" type="number" name="preco"/>
  <button>Submit</button>
</Form>)

export {
  ProductForm
};