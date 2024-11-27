import { Formik, Form } from "formik";
import formJson from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";
import * as Yup from "yup";

const initialValues: {
  [key: string]: any;
} = {};

const requiredFields: { [key: string]: any } = {};

for (const field of formJson) {
  initialValues[field.name] = field.value;

  if (!field.validations) continue;
  let schema = Yup.string();

  for (const rule of field.validations) {
    if (rule.type === "required") {
      schema = schema.required("Required");
    }

    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        rule.message || `Min length 2`
      );
    }

    if (rule.type === "email") {
      schema = schema.email("Invalid email address");
    }
  }
  requiredFields[field.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    label={label}
                    name={name}
                    type={type as "email" | "password" | "text"}
                    placeholder={placeholder}
                  />
                );
              }

              if (type === "select") {
                return (
                  <MySelect
                    key={name}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                  >
                    <option value={""}>Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }

              throw new Error(`Type ${type} is not supported`);
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
