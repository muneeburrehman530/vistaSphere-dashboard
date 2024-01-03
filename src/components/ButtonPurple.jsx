import { Button } from "@mui/material";

const ButtonPurple = ({ children, startIcon }) => {
  return (
    <Button className="purple-btn" varient="contained" startIcon={startIcon}>
      {children}
    </Button>
  );
};

export default ButtonPurple;
