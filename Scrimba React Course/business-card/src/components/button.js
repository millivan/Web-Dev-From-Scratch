import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";

export const CustomButton = ({ title, link, bgcolor = "white", theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        startIcon={link}
        variant="contained"
        color="primary"
        sx={{
          borderRadius: 2,
          backgroundColor: { bgcolor },
          width: "115px",
          fontSize: "14px",
          fontFamily: "Inter",
        }}
        style={{ textTransform: "none" }}>
        {title}
      </Button>
    </ThemeProvider>
  );
};
