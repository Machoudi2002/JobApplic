import useAuth from "../hooks/useAuth"
import { useForm, SubmitHandler } from "react-hook-form"
import { LoginData } from "../types";
import ErrorMessage from "./ErrorMessage";
import { useState } from "react";

const AdminLoginForm = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const { login } = useAuth();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm<LoginData>();

    const setDemoData = () => {
        setValue("email", "123@123.com");
        setValue("password", "123456789");
    }
    const onSubmit: SubmitHandler<LoginData> = async (data) => {
        const errorMessage = await login(data);
        if (errorMessage !== null && errorMessage !== undefined) {
            console.error('Login error:', errorMessage);
            setErrorMessage(errorMessage);
          }
      };

  return (
    <div className="container bg-whiteBack px-8 py-5 mt-10 shadow rounded font-mainFont">
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col gap-3"
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
                errorMessage && <ErrorMessage message={errorMessage} />
            }
            <input
                type="submit"
                className="p-3 border rounded shadow bg-textColor text-whiteBack cursor-pointer"
                value="Login"
            />
        </form>
        <button 
            className="w-full p-3 border rounded shadow bg-backColor text-textColor border-none mt-2 font-bold cursor-pointer"
            onClick={setDemoData}
        >
            Demo Info
        </button>
    </div>
  )
}

export default AdminLoginForm