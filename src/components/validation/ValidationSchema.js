import * as Yup from "yup";
export const ValidationSchema = {
  username: Yup.string()
    .min(3, "Must be 3 characters or more")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Must be more than 6 characters")
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  itemTitle: Yup.string()
    .min(3, "Must be 3 characters or more")
    .required("Required"),
  itemDescription: Yup.string()
    .min(3, "Must be 10 characters or more")
    .required("Required"),
};
