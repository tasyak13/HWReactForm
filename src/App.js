import { useForm } from "react-hook-form";
import './App.css';

function App() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Name" {...register("firstName", { required: true, minLength: 2 })} />
      <br />
      {errors.firstName?.type === 'required' && "Поле обязательно к заполнению"}
      {errors.firstName?.type === 'minLength' && "Поле не должно быть менее 2 символов"}
      <br />
      <input placeholder="Last Name" {...register("lastName", { required: true, minLength: 2 })} />
      <br />
      {errors.lastName?.type === 'required' && "Поле обязательно к заполнению"}
      {errors.lastName?.type === 'minLength' && "Поле не должно быть менее 2 символов"}
      <br />
      <input type="text" placeholder="Email" {...register("email", { pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i })} />
      <br />
      {errors.email?.type === 'pattern' && "Ошибка в почте"}
      <br />
      <input placeholder="Password" {...register("password", { required: true, minLength: 6 })} />
      <br />
      {errors.password?.type === 'required' && "Поле обязательно к заполнению"}
      {errors.password?.type === 'minLength' && "Поле не должно быть менее 6 символов"}
      <br />
      <input placeholder="Age" type="number" {...register("age", { min: 18, max: 60 })} />
      <br />
      <input type="submit" />
    </form>
  );
}

export default App;