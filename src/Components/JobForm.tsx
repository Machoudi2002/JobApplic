
import { useForm, SubmitHandler } from "react-hook-form";
import { jobApp } from "../types";
import useFetchApi from "../hooks/useFetchApi";

interface FormInput extends jobApp {}

interface Props {
  API_PUT_URL: string;
}

const JobForm: React.FC<Props> = ({ API_PUT_URL }) => {
  const { postNewJob } = useFetchApi();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    postNewJob(API_PUT_URL, data);
  };

  return (
    <section>
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
    </section>
  );
};

export default JobForm;
