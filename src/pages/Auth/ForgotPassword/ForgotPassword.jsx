import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { sendForgotMail } from "../../../api/query/userQuery";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const { mutate } = useMutation({
    mutationKey: ["forgot-email"],
    mutationFn: sendForgotMail,
    onSettled: (data, error, variables) => {
      if (error) {
        toast.error(error.message);
        return;
      }
      console.log(data, "forgot password");
      navigate(`/forgot-password-sent/${variables.email}`);
    },
  });

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  return (
    <Box
      mt={"10%"}
      bgcolor={"#ededed"}
      width={"40%"}
      mx={"auto"}
      p={3}
      borderRadius={"2rem"}
      sx={{ boxShadow: 2 }}
    >
      <Box width={"100%"} margin={"auto"}>
        <Link to={-1}>
          <FaLongArrowAltLeft size={35} />
        </Link>
        <Typography
          variant="h3"
          color="#171717"
          fontSize={22}
          fontWeight={600}
          my={1.5}
        >
          Forgot Password
        </Typography>
        <Typography variant="body1" color="#797E82" fontSize={16}>
          Enter your email address for the account you want to reset your
          password.
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            setEmail(values.email);
            mutate({ email: values.email });
            actions.setSubmitting(false); // Remove this line when integrating with actual reset logic
          }}
        >
          {(formik) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                type="email"
                name="email"
                value={formik.values.email}
                placeholder="name@email.com"
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={<ErrorMessage name="email" />}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                {formik.isSubmitting ? "Submitting..." : "Reset Password"}
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
