import React from 'react';

const oi = () => <div>Nome 4</div>
const routes = [
  {
    name: 'Home',
    allowedRoles: ['*'],
    path: '/',
    exact: true,
    component: () => <div>Home</div>,
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
        component: () => (<div>Cadastro 2</div>),
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