import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Input, Button } from './SubmitForm.styled';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

let schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      nameRegExp,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .matches(
      numberRegExp,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const SubmitForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    onSubmit(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <p>Name</p>
        <label htmlFor="name">
          <Input type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <p>Number</p>
        <label htmlFor="number">
          <Input type="tel" name="number" />
          <ErrorMessage name="number" component="div" />
        </label>
        <br />
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
