import React, { useState } from "react";
import { useForm } from "react-hook-form";

import './RegisterForm.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEye,faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const EyeSlash = <FontAwesomeIcon className="icon" icon ={faEyeSlash}/>;

export default function LoginForm() {
  
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const { 
    register, 
    handleSubmit,
    formState: { errors } } = useForm();

    const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
       <input 
         type="email" 
         name="email"
         {...register("email", { 
            required: "Quelle est votre adresse email ?"})} 
            aria-invalid={errors.mail ? "true" : "false"}
            /* use aria-invalid to indicate field contain error */
       />
    {errors.email && <p role="alert">{errors.email?.message}</p>}
      <label htmlFor="password">Password</label>
      <div className="pass-wrapper eye">
        <input
          type={passwordShown ? "text" : "password"}
          name="password"
          {...register("password", { 
            required: "Veuillez renseigner votre mot de passe.",
            minLength: {
              value: 5,
              message: "Le mot de passe doit comporter au moins 5 caractères"
                  },
            maxLength: {
              value: 16,
              message: "Le mot de passe doit contenir 16 caractères au maximum"
                  } 
          })} 
        />
        {passwordShown ? <i onClick={togglePasswordVisiblity}>{eye}</i>:<i onClick={togglePasswordVisiblity}>{EyeSlash}</i>}
      </div>
        {errors.password && <p>{errors.password.message}</p>}
      <div>Mot de passe oublié ?</div>
      <input type="submit" value="Me Connecter"/>
    </form>
  );
}


