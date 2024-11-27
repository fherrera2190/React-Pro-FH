import "../styles/styles.css";
import { useForm } from "../hooks/useForm";
import { FormEvent } from "react";

export const RegisterPage = () => {
  const {
    name,
    email,
    password,
    password2,
    formData,
    onChange,
    resetForm,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>RegisterPage</h1>
      <form onSubmit={onSumbit} noValidate>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length < 1 && "has-error"}`}
        />
        {name.trim().length < 1 && <span>Este campo es requerido</span>}
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>El email no es valido</span>}

        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={onChange}
        />
        {password.trim().length < 1 && <span>Este campo es requerido</span>}
        {password.trim().length < 6 && password.trim().length > 0 && (
          <span>La contraseña debe tener 6 caracteres</span>
        )}

        <input
          type="password"
          name="password2"
          placeholder="Repeat password"
          onChange={onChange}
          value={password2}
        />
        {password2.trim().length < 1 && <span>Este campo es requerido</span>}
        {password2.trim().length < 6 && password2.trim().length > 0 && (
          <span>La contraseña debe tener 6 caracteres</span>
        )}

        <button type="submit">Create</button>
        <button onClick={resetForm}>Reset</button>
      </form>
    </div>
  );
};
