import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(3).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(8).required("Please enter your password"),
  phoneno: Yup.string().min(10).max(15).required("Please enter your phone number"),
  // confirm_password: Yup.string()
  //   .required()
  //   .oneOf([Yup.ref("password"), null], "Password must match"),
});
