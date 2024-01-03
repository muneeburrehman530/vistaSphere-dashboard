import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { verifyEmailAddressSignup } from "../../../api/query/userQuery";
import Loader from "../../../components/Loader";
import { toast } from "react-toastify";

const RegisterSuccess = () => {
  const navigate = useNavigate();
  const { token } = useParams();

  const { isSuccess, isLoading } = useQuery(
    ["verify-email-token"],
    () => verifyEmailAddressSignup({ token }),
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
      {isSuccess && (
        <Box width={"100%"} margin={"auto"} textAlign={"center"}>
          <FaCircleCheck size={40} color="#059669" />
          <Typography
            variant="h3"
            color="#171717"
            fontSize={22}
            fontWeight={600}
            my={2}
          >
            Successfully Registration
          </Typography>
          <Typography variant="body1" color="#797E82" fontSize={16}>
            Hurray! You have successfully created your account. Enter the app to
            explore all its features.
          </Typography>
          <Link to={"/signin"}>
            <Button
              style={{
                fontSize: "1.4rem",
                backgroundColor: "#5F00D9",
                width: "100%",
                color: "#fff",
                marginTop: "1rem",
              }}
            >
              Enter the App
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default RegisterSuccess;
