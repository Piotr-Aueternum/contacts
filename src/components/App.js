import React from 'react';
import Form from './Form';
import List from './List';

const data = [{
  id: 1,
  data: {
    name: 'Jean',
    surname: 'Paul',
    email: 'jean@paul.com',
    phone: '123456789',
  },
}, {
  id: 2,
  data: {
    name: 'Alexandr',
    surname: 'Pozarov',
    email: 'alexandr.pozarov@nicecompany.ru',
    phone: '987654321',
  },
}, {
  id: 3,
  data: {
    name: 'Alexandr',
    surname: 'Pozarov',
    email: 'alexandr.pozarov@nicecompany.ru',
    phone: '987654321',
  },
}, {
  id: 4,
  data: {
    name: 'Alexandr',
    surname: 'Pozarov',
    email: 'alexandr.pozarov@nicecompany.ru',
    phone: '987654321',
  },
}, {
  id: 5,
  data: {
    name: 'Jean',
    surname: 'Paul',
    email: 'jean@paul.com',
    phone: '123456789',
  },
}, {
  id: 6,
  data: {
    name: 'Alexandr',
    surname: 'Pozarov',
    email: 'alexandr.pozarov@nicecompany.ru',
    phone: '987654321',
  },
}, {
  id: 7,
  data: {
    name: 'Alexandr',
    surname: 'Pozarov',
    email: 'alexandr.pozarov@nicecompany.ru',
    phone: '987654321',
  },
}, {
  id: 8,
  data: {
    name: 'Alexandr',
    surname: 'Pozarov',
    email: 'alexandr.pozarov@nicecompany.ru',
    phone: '987654321',
  },
}, {
  id: 9,
  data: {
    name: 'Alexandr',
    surname: 'Pozarov',
    email: 'alexandr.pozarov@nicecompany.ru',
    phone: '987654321',
  },
}, {
  id: 10,
  data: {
    name: 'Alexandr',
    surname: 'Pozarov',
    email: 'alexandr.pozarov@nicecompany.ru',
    phone: '987654321',
  },
}, {
  id: 11,
  data: {
    name: 'Alexandr',
    surname: 'Pozarov',
    email: 'alexandr.pozarov@nicecompany.ru',
    phone: '987654321',
  },
}, {
  id: 12,
  data: {
    name: 'Alexandr',
    surname: 'Pozarov',
    email: 'alexandr.pozarov@nicecompany.ru',
    phone: '987654321',
  },
}];

const form = [{}, {}];

export default () => (
  <main>
    <Form
      data={form}
      onSubmit={() => {}}
    />
    <List
      pagination={10}
      items={data}
      onEdit={(e, id) => {
        console.log(e, id);
      }}
      onDelete={(id) => {
        console.log(id);
      }}
    />
  </main>
);
