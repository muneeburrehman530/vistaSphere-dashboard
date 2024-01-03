import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { verifyForgotToken } from "../../../api/query/userQuery";
import Loader from "../../../components/Loader";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { token, password } = useParams();

  const { mutate, isSuccess, isLoading } = useMutation(
    {
      mutationKey: ["verify-forgot-token"],
      mutationFn: verifyForgotToken,

      onSuccess: () => {
        navigate("/reset-password-success");
      },
    },

    {
      enabled: !!token,
      onError: (error) => {
        toast.error(error.message);
        navigate("/signup");
      },
    }
  );

  if (!token) {
    // Handle the case when token is missing or undefined
    navigate("/signup");
    return null;
  }

  if (isLoading) return <Loader />;
  const initialValues = {
    password: "",
    repeatPassword: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please repeat your password"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        mutate({
          token,
          password: values.password,
        });
      }}
    >
      {(formik) => (
        <Box
          mt={"10%"}
          bgcolor={"#ededed"}
          width={"40%"}
          mx={"auto"}
          p={3}
          borderRadius={"2rem"}
          sx={{ boxShadow: 2 }}
        >
          <Form>
            <Box width={"100%"} margin={"auto"} textAlign={"center"}>
              <Typography
                variant="h3"
                color="#171717"
                fontSize={22}
                fontWeight={600}
                my={2}
              >
                Successfully Sent
              </Typography>
              <Typography variant="body1" color="#797E82" fontSize={16}>
                We have sent instructions on how to reset your password to
                jenny.wilson@gmail.com. Please follow the instructions from the
                email.
              </Typography>
              <Field
                as={TextField}
                fullWidth
                label="Password"
                variant="outlined"
                margin="normal"
                type="password"
                name="password"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={TextField}
                fullWidth
                label="Repeat Password"
                variant="outlined"
                margin="normal"
                type="password"
                name="repeatPassword"
                error={
                  formik.touched.repeatPassword &&
                  Boolean(formik.errors.repeatPassword)
                }
                helperText={<ErrorMessage name="repeatPassword" />}
              />
              <Button
                type="submit"
                style={{
                  fontSize: "1.4rem",
                  backgroundColor: "#5f00d9",
                  width: "100%",
                  color: "#fff",
                  marginTop: "1rem",
                }}
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting
                  ? "Resetting Password..."
                  : "Reset Password"}
              </Button>
            </Box>
          </Form>
        </Box>
      )}
    </Formik>
  );
};

export default ResetPassword;
