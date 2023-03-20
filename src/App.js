import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import SubscribeForm from "./components/SubscribeForm";
import Greeting from "./components/Greeting";
import ContactForm from "./components/ContactForm";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const user = {
    name: "ali",
    surname: "taş",
    email: "ali@tas.com",
  };

  const getUserInfo = () => {
    return {
      name: user.name,
      surname: user.surname,
    };
  };

  useEffect(() => {
    toast.warn("Abone listemize katıldınız mı?");
  }, []);

  return (
    <div className="App">
      <Greeting {...getUserInfo()} />
      <hr />
      <SubscribeForm />
      <hr />
      <ContactForm />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
      />
      <hr />
      <form className="flex flex-col gap-4 space-x-4 space-y-6">
        <div>
          <div className="mb-2 block">
            <label htmlFor="email1" value="Your email" />
          </div>
          <input
            id="email1"
            className="input input-bordered input-primary w-full max-w-xs"
            type="email"
            placeholder=""
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <label htmlFor="password1" value="Your password" />
          </div>
          <input
            id="password1"
            className="input input-bordered input-primary w-full max-w-xs"
            type="password"
            required={true}
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            id="remember"
          />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button type="submit" label="Submit" />
      </form>
    </div>
  );
}

export default App;
