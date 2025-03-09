import React from "react";
import { useId } from "react";
import { Formik, Field, Form } from "formik";
export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, { resetForm }) => {
    onAdd({
      id: `id-${Date.now()}`,
      name: values.name,
      number: values.number,
    });
    resetForm();
  };

  const textFieldId = useId();
  const telFieldId = useId();

  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
      <Form>
        <label id={textFieldId}>
          name
          <Field type="text" name="name" id={textFieldId} />
        </label>
        <label id={telFieldId}>
          number
          <Field type="tel" name="number" id={telFieldId} />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
