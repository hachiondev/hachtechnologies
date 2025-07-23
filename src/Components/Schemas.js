import * as Yup from "yup";

export const LoginSchema = Yup.object({
  name: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  resume: Yup.mixed().required("Resume is required"),
});
