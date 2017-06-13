import React from 'react';
import Form from './Form';
import List from './List';

const data = [{
  _id: 1,
  name: 'Jean',
  surname: 'Paul',
  email: 'jean@paul.com',
  phone: '123456789',
}, {
  _id: 2,
  name: 'Alexandr',
  surname: 'Pozarov',
  email: 'alexandr.pozarov@nicecompany.ru',
  phone: '987654321',
}];

export default () => (
  <main>
    <Form />
    <List data={data} />
  </main>
);
