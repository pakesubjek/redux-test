import React from "react";
import axios from "axios";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Table } from "reactstrap";

const handleSubmit = async (values, actions) => {
  try {
    const response = await axios ({
      method: "POST",
      url: "https://bootcamp-rent-car.herokuapp.com/customer/auth/login",
      data: values,
    })
    actions.setSubmitting(false);
    actions.resetForm();

  }catch(error) {
    actions.setSubmitting(false);
  }
};

const FormikYup = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!")
    }),
    // onSubmit: values => {
    //   alert(JSON.stringify(values, null, 2));
    // }

    onSubmit: (values, actions) => {
      handleSubmit(values, actions)
    },
  });

  return (
    <div>
      <h5>Login</h5>

      <form onSubmit={formik.handleSubmit} method="post">
        <Table>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <p>{formik.errors.email}</p>
          )}
        </Table>
        <Table>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <p>{formik.errors.password}</p>
          )}
        </Table>
        
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormikYup;