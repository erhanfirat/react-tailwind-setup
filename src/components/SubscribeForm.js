import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SubscribeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    // form settings
    mode: "all",
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Submitted with data > ", data);
    setTimeout(() => {
      toast.success("Başarılı bir şekilde abone oldunuz!");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      Subscribe our newslatter! Form Valid mi? {isValid ? "true" : "false"}
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          {...register("email", { required: "Email alanı zorunludur" })}
        />
        {errors.email && (
          <div className="text-red-600"> {errors.email.message} </div>
        )}
      </label>
      <label>
        Name:
        <input type="text" name="name" {...register("name")} />
        {errors.name && <div> {errors.name.message} </div>}
      </label>
      <button className="btn" type="submit" disabled={!isValid}>
        Subscribe!
      </button>
    </form>
  );
};

export default SubscribeForm;
