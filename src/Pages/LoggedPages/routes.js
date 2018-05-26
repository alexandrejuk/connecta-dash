import React from 'react';
import Products from  './Products/CreateProduct';

const oi = () => <div>Nome 4</div>
const routes = [
  {
    name: 'Home',
    allowedRoles: ['*'],
    path: '/',
    exact: true,
    component: Products,
  },
  {
    name: 'Cadastro',
    allowedRoles: ['*'],
    path: '/cadastro',
    component: oi,
  },
  {
    name: 'Produtos',
    icon: 'barcode',
    allowedRoles: ['*'],
    path: '/produtos',
    subroutes: [
      {
        name: 'Cadastro',
        allowedRoles: ['*'],
        component: Products,
        path: '/produtos/cadastro'
      },
      {
        name: 'Nome',
        allowedRoles: ['*'],
        component: () => (<div>Nome 4</div>),
        path: '/produtos/nome'
      }
    ],
  },
]

export default routes