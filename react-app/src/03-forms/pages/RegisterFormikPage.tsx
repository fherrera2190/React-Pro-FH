import "../styles/styles.css";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "", password2: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Must be 3 characters or more")
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("Required"),
          password2: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords must match")
            .required("Required"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput
              label="Name"
              name="name"
              type="text"
              placeholder="name"
            />

            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="email"
            />

            <MyTextInput
              label="Password"
              name="password"
              type="password"
              placeholder="********"
            />

            <MyTextInput
              label="Confirm Password"
              name="password2"
              type="password"
              placeholder="********"
            />

            <button type="submit">Create</button>
            <button onClick={handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
