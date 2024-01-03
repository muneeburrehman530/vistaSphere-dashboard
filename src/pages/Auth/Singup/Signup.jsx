import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "react-query";
import { signupUser } from "../../../api/query/userQuery";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["signup"],
    mutationFn: signupUser,
    onSuccess: (data) => {
      if (email !== "") {
        navigate(`/email-verification/${email}`);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
      agreeTerms: false,
    },
    validationSchema: yup.object({
      firstName: yup.string().required("First Name is required"),
      lastName: yup.string().required("Last Name is required"),
      email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
      password: yup
        .string()
        .min(8, "Password should be at least 8 characters")
        .required("Password is required"),
      repeatPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Repeat Password is required"),
      agreeTerms: yup
        .boolean()
        .oneOf([true], "Must agree to Terms & Conditions")
        .required("Must agree to Terms & Conditions"),
    }),
    onSubmit: (values) => {
      setEmail(values.email);
      mutate({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      });
    },
  });

  return (
    <Container>
      <Box
        width={"50%"}
        margin={"15% auto"}
        padding={4}
        bgcolor={"#e9e9e9"}
        borderRadius={5}
        sx={{ boxShadow: 10 }}
      >
        <Typography
          variant="h4"
          color="#171717"
          fontSize={30}
          textAlign={"center"}
        >
          Welcome to VistaSphere
        </Typography>
        <Typography
          variant="body1"
          color="#797E82"
          p={2}
          fontSize={15}
          textAlign={"center"}
        >
          Create a free account by filling data below.
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            label="First Name"
            variant="outlined"
            margin="normal"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            onBlur={formik.handleBlur}
          />
          <TextField
            fullWidth
            label="Last Name"
            variant="outlined"
            margin="normal"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            onBlur={formik.handleBlur}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
          />
          <TextField
            fullWidth
            label="Repeat Password"
            variant="outlined"
            margin="normal"
            type="password"
            name="repeatPassword"
            value={formik.values.repeatPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.repeatPassword &&
              Boolean(formik.errors.repeatPassword)
            }
            helperText={
              formik.touched.repeatPassword && formik.errors.repeatPassword
            }
            onBlur={formik.handleBlur}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="I agree with Terms & Conditions"
            name="agreeTerms"
            checked={formik.values.agreeTerms}
            onChange={formik.handleChange}
            error={
              formik.touched.agreeTerms && Boolean(formik.errors.agreeTerms)
            }
            helperText={formik.touched.agreeTerms && formik.errors.agreeTerms}
          />
          <Button
            isLoading={isLoading}
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, fontSize: 13, py: 1, backgroundColor: "#5f00d9" }}
          >
            Create Account
          </Button>
        </form>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", mt: 3 }}
          fontSize={13}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            underline="always"
            style={{ paddingLeft: "0.5rem", color: "#5f00d9" }}
          >
            Login
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Signup;
