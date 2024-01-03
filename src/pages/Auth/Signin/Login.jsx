import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useMutation } from "react-query";
import { singinUser } from "../../../api/query/userQuery";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const { mutate, isLoading, error } = useMutation({
    mutationKey: ["signin"],
    mutationFn: singinUser,
    onSuccess: (data) => {
      const { token } = data;
      if (token) {
        login(token);
      }
    },
    onError: (error) => {
      toast.error(error.message, {});
    },
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
      password: yup
        .string()
        .min(8, "Password should be at least 8 characters")
        .required("Password is required"),

      rememberMe: yup.boolean(),
    }),
    onSubmit: (values) => {
      mutate(values);
      console.log(values, "login values");
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

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <FormControlLabel
              control={<Checkbox />}
              label="Remember Me"
              name="rememberMe"
              checked={formik.values.rememberMe}
              onChange={formik.handleChange}
              error={
                formik.touched.agreeTerms && Boolean(formik.errors.rememberMe)
              }
              helperText={formik.touched.agreeTerms && formik.errors.rememberMe}
            />
            <Link
              to={"/forgot-password"}
              style={{
                textDecoration: "none",
                color: "#5f00d9",
                fontWeight: 500,
              }}
            >
              {" "}
              Forgot Password
            </Link>
          </Box>
          <Button
            isLoading={isLoading}
            type="submit"
            variant="contained"
            // color={"#5f00d9"}
            fullWidth
            sx={{ mt: 2, fontSize: 13, py: 1 }}
            style={{ backgroundColor: "#5f00d9" }}
          >
            Login
          </Button>
          <Link to={"/signup"} style={{ color: "#5f00d9" }}>
            <Button
              type="submit"
              variant="outlined"
              bgcolor="#5f00d9"
              fullWidth
              sx={{
                mt: 2,
                fontSize: 13,
                py: 1,
                color: "#5f00d9",
                border: "1px solid #5f00d9",
              }}
            >
              Create New Account
            </Button>
          </Link>
        </form>
        {/* <Typography
          variant="body2"
          sx={{ textAlign: "center", mt: 3 }}
          fontSize={13}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            underline="always"
            style={{ paddingLeft: "0.5rem", color: "#065eb5" }}
          >
            Login
          </Link>
        </Typography> */}
      </Box>
    </Container>
  );
};

export default Login;
