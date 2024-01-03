import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { useMutation, useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import { sendVerificationMail } from "../../../api/query/userQuery";
import Loader from "../../../components/Loader";

const RegisterEmailVerify = () => {
  const { email } = useParams();

  if (!email)
    return (
      <Box
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={30}
      >
        Invalid Email{" "}
      </Box>
    );

  // sending email for verification
  const { mutate, isSuccess, isLoading } = useMutation({
    mutationKey: ["send-verification-mail"],
    mutationFn: sendVerificationMail,
    onSuccess: (data) => {
      console.log(data, "send-email-verification");
    },
    onError: (error) => {
      toast.error(error.message);
    },
    enabled: !!email,
  });

  useEffect(() => {
    mutate({ email });
  }, [email]);

  if (isLoading) {
    return <Loader />;
  }

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
      {" "}
      {isSuccess && (
        <Box width={"100%"} margin={"auto"} textAlign={"center"}>
          <MdEmail size={40} color="#5F00D9" />
          <Typography
            variant="h3"
            color="#171717"
            py={2}
            fontSize={25}
            fontWeight={600}
          >
            Email Verification
          </Typography>
          <Typography color={"#797E82"} fontSize={18} pb={2}>
            We have sent you an email verification to{" "}
            <strong style={{ color: "#171717" }}> {email} </strong> If you
            didn’t receive it, click the button below.
          </Typography>
          <Button
            style={{
              fontSize: "1.4rem",
              backgroundColor: "#5f00d9",
              width: "100%",
              color: "#fff",
              marginTop: "1rem",
            }}
            onClick={() => {
              mutate({ email });
            }}
          >
            Re-Send Email
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default RegisterEmailVerify;
