import React from "react";
import { useForm } from "react-hook-form";
import './RegisterForm.css';

export default function RegisterForm() {
  const { 
    register, 
    handleSubmit,
    triggerValidation,
    getValues, 
    formState,
    formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  const repeatVal = (confirmPassword) =>
    confirmPassword === getValues().password || "Passwords do not match";
  const validateRepeat = () => {
    if (formState.isSubmitted) {
      // adjust this accordingly to differen validation modes. I assume "onSubmit" and "onChange" for revalidation here.
      triggerValidation({ name: "confirmPassword" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <label htmlFor="email">Email</label>
       <input 
         type="email" 
         {...register("email", { 
            required: "Quelle est votre adresse email ?"})} 
         aria-invalid={errors.email ? "true" : "false"} 
       />
    {errors.email && <p role="alert">{errors.email?.message}</p>}
      
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        {...register("password", { required: "Veuillez renseigner votre mot de passe." ,
        minLength: {
          value: 5,
          message: "Le mot de passe doit comporter au moins 5 caractères"
              },
        maxLength: {
          value: 16,
          message: "Le mot de passe doit contenir 16 caractères au maximum"
              } 
      })}
        onSubmit={validateRepeat}
      />
      {errors.password && <p>{errors.password.message}</p>}
      
      <label>Confirm Password</label>
      <input
      type="password"
      name="confirmPassword"
        {...register("confirmPassword", { required: "Veuillez confirmer votre mot de passe.", validate: repeatVal })}
      />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

      <input type="submit" value="S'INCRIRE" />
    </form>
  );
}


