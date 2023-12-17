import useAuth from "../hooks/useAuth"
import { useForm, SubmitHandler } from "react-hook-form"
import { LoginData } from "../types";
import ErrorMessage from "./ErrorMessage";

const AdminLoginForm = () => {
    const { login } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
      } = useForm<LoginData>();

    
    const onSubmit: SubmitHandler<LoginData> = (data) => {
        login(data); 
    };

  return (
    <div>
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className="container px-8 py-5 mt-10 bg-whiteBack shadow rounded font-mainFont flex flex-col gap-3"
            >
            <input 
                type="email"
                className="p-2 border rounded"
                placeholder="Email Address"
                {...register("email", { required: "Email is required" })}
            />
            {errors.email && <ErrorMessage message={errors.email.message}/>}
            <input 
                type="password" 
                className="p-2 border rounded"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
            />
            {errors.password && <ErrorMessage message={errors.password.message}/>}
            {
                isSubmitSuccessful && <ErrorMessage message="Invalid Email or Password" />
            }
            <input
                type="submit"
                className="p-3 border rounded shadow bg-textColor text-whiteBack cursor-pointer"
                value="Login"
            />
        </form>
    </div>
  )
}

export default AdminLoginForm