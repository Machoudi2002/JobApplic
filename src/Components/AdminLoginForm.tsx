import useAuth from "../hooks/useAuth"
import { useForm, SubmitHandler } from "react-hook-form"
import { LoginData } from "../types";

const AdminLoginForm = () => {
    const { login } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<LoginData>();
    
      const onSubmit: SubmitHandler<LoginData> = (data) => {
        login(data)
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
                value="123@123.com" 
                {...register("email", { required: "email is required" })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <input 
                type="password" 
                className="p-2 border rounded"
                placeholder="Password"
                value="123456789"
                {...register("password", { required: "password is required" })}
            />
            {errors.password && <p>{errors.password.message}</p>}
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