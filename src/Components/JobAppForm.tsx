
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { jobApp } from "../types";
import useFetchApi from "../hooks/useFetchApi";
import useSubmitMessage from "../hooks/useSubmitMessage";

interface FormInput extends jobApp {}

interface Props {
  API_PUT_URL: string;
}

const JobAppForm: React.FC<Props> = ({ API_PUT_URL }) => {
  const { postJobApp } = useFetchApi();
  const { submitSuccess, submitMessage, submitStatus } = useSubmitMessage();
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    postJobApp(API_PUT_URL, data);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
      submitSuccess(
        "You're Application has been successfully registered",
        true
      )
    }
    
  }, [reset, formState])

  return (
    <section>
      {
        submitStatus ? <h2 className="text-center font-extrabold italic text-5xl mt-16">{submitMessage}</h2> : (

          <form
          onSubmit={handleSubmit(onSubmit)}
          className="container px-8 py-5 mt-10 bg-whiteBack shadow rounded font-mainFont flex flex-col gap-3"
        >
          <input
            className="p-2 border rounded"
            type="text"
            placeholder="FullName"
            {...register("fullname", { required: "Full Name is required" })}
          />
          {errors.fullname && <p>{errors.fullname.message}</p>}
  
          <input
            className="p-2 border rounded"
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
  
          <input
            className="p-2 border rounded"
            type="tel"
            placeholder="Phone Number"
            {...register("phoneNumber", { required: "Phone Number is required" })}
          />
          {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
  
          <input
            className="p-2 border rounded"
            type="url"
            placeholder="Linkedin Profile URL"
            {...register("linkedinURL", { required: "LinkedIn URL is required" })}
          />
          {errors.linkedinURL && <p>{errors.linkedinURL.message}</p>}
  
          <input
            className="p-2 border rounded"
            type="url"
            placeholder="Portfolio Website URL"
            {...register("portfolioURL")}
          />
  
          <input
            className="p-2 border rounded"
            type="number"
            placeholder="Years of Experience"
            {...register("experience", {
              required: "Years of Experience is required",
              valueAsNumber: true, // convert the value to a number
            })}
          />
          {errors.experience && <p>{errors.experience.message}</p>}
  
          <input
            className="p-3 border rounded shadow bg-textColor text-whiteBack cursor-pointer"
            type="submit"
            value="Submit"
          />
        </form>

        )
      }

    </section>
  );
};

export default JobAppForm;
