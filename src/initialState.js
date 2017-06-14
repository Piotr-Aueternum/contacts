export const inputs = [{
  placeholder: 'Name',
  name: 'name',
  type: 'text',
  value: '',
  required: 'required',
}, {
  placeholder: 'Surname',
  name: 'surname',
  type: 'text',
  value: '',
  required: 'required',
}, {
  placeholder: 'Email',
  name: 'email',
  type: 'email',
  value: '',
  required: 'required',
}, {
  placeholder: 'Phone',
  name: 'phone',
  type: 'text',
  value: '',
  required: 'required',
  pattern: '[0-9]{9}',
  title: 'Phone number should contains 9 digits.',
}];

export const data = [{
  id: 1,
  data: {
    name: 'Hello',
    surname: 'Placeholder',
    phone: '123654789',
    email: 'Placeholder@contacts.list',
  },
}];
