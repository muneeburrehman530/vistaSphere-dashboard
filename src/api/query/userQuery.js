import Axios from "../axios";
const USER_URL = "/user";

export const singinUser = async ({ email, password }) => {
  try {
    const userData = {
      email,
      password,
    };
    const { data } = await Axios.post(`${USER_URL}/signin`, userData);
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

// signup user

export const signupUser = async ({ firstName, lastName, email, password }) => {
  try {
    const userData = {
      firstName,
      lastName,
      email,
      password,
    };
    const { data } = await Axios.post(`${USER_URL}/signup`, userData);
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Signup failed");
  }
};

// vefification mail

export const sendVerificationMail = async ({ email }) => {
  try {
    const userData = {
      email,
    };
    const { data } = await Axios.post(
      `${USER_URL}/send-verification-mail`,
      userData
    );
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Signup failed");
  }
};
export const verifyEmailAddressSignup = async ({ token }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/verfiy-user-mail`, {
      token,
    });
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message);
  }
};

export const sendForgotMail = async ({ email }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/forgot-password`, {
      email,
    });
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message);
  }
};

export const verifyForgotToken = async ({ token, password }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/verify-forgot-mail`, {
      token,
      password,
    });
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message);
  }
};
