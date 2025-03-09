import React from "react";
import { useId } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required field")
    .min(3, "Too short name")
    .max(50, "Too long name"),
  number: Yup.string()
    .required("Required field")
    .min(3, "Too short number")
    .max(50, "Too long number"),
});

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
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <div>
          <label id={textFieldId}>name</label>
          <Field type="text" name="name" id={textFieldId} />
          <ErrorMessage name="name" component="p" />
        </div>
        <div>
          <label id={telFieldId}>number</label>
          <Field type="tel" name="number" id={telFieldId} />
          <ErrorMessage name="number" component="p" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
