import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactSubmit = (formData) => {
    // axios.post("contact", formData);
    console.log("contact form data > ", formData);
    setTimeout(() => {
      toast.error("Form gönderilirken bir hata ile karşılaşıldı!");
    }, 1500);
  };

  return (
    <form
      onSubmit={handleSubmit(contactSubmit)}
      className="flex flex-col gap-4 border border-radius"
    >
      <h2 className="text-2xl font-bold">Contact Form</h2>
      <div>
        <div className="mb-2 block">
          <label htmlFor="email" value="Your email" />
        </div>
        <input
          id="email"
          type="email"
          {...register("email", { required: "Bu alan zorunludur" })}
        />
        {errors.email && <div> {errors.email.message} </div>}
      </div>
      <label>
        İsim:
        <input type="text" name="name" {...register("name")} />
      </label>
      <br />
      {/* <label>
        Email:
        <input
          type="email"
          name="email"
          {...register("email", { required: "Bu alan zorunludur" })}
        />
        {errors.email && <div> {errors.email.message} </div>}
      </label> */}
      <br />
      <label>
        Mesajınız:
        <textarea
          rows={3}
          name="message"
          {...register("message", {
            required: "Bu alan zorunludur",
            minLength: 20,
          })}
        />
        {errors.message && <div> {errors.message.message} </div>}
      </label>
      <br />
      <button type="submit">Gönder!</button>
    </form>
  );
};

export default ContactForm;
