import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post("/auth/token", data);
      store.dispatch(loginUser(response.data));
      toast.success("Logged in successfully");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Please double check your credentials";
      Array.isArray(errorMessage)
        ? errorMessage.map((err) => toast.error(err))
        : toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuest = async () => {
    try {
      const response = await customFetch.post("/auth/token", {
        username: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("Welcome Guest User!");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Guest user login error. Please try again.");
    }
  };

  return (
    <div>
      <section className="h-screen grid place-items-center">
        <Form
          method="post"
          className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
        >
          <h4 className="text-center text-3xl font-bold">Login</h4>
          <FormInput type="text" label="username" name="username" />
          <FormInput type="password" label="password" name="password" />
          <div className="mt-4">
            <SubmitBtn text="Login" />
          </div>
          <button
            type="button"
            className="btn btn-secondary btn-block"
            onClick={loginAsGuest}
          >
            Guest User
          </button>
          <p className="text-center mt-4">
            Not a member yet?{" "}
            <Link
              to="/register"
              className="ml-2 link link-hover link-primary capitalize"
            >
              Register
            </Link>
          </p>
        </Form>
      </section>
    </div>
  );
};

export default Login;
