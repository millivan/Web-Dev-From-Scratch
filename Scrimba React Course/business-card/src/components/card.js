import { Footer } from "./footer";
import { ProfilePictureHolder } from "./profile-picture-holder";
import { Main } from "./main";
import { CustomButton } from "./button";
import { Details } from "./details";
import "../styles/card.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { createTheme } from "@mui/material/styles";

export const Card = () => {
  const mailColor = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
    },
  });
  const linkedinColor = createTheme({
    palette: { primary: { main: "#5093e2" } },
  });

  return (
    <>
      <ProfilePictureHolder />
      <div className="card">
        <Main
          name="Alvin Lim"
          position="Frontend Developer"
          website="millivan.website"
        />
        <div className="buttons-holder">
          <CustomButton
            title={"Email"}
            link={<EmailIcon />}
            bgcolor="white"
            theme={mailColor}
          />
          <CustomButton
            title={"LinkedIn"}
            link={<LinkedInIcon />}
            bgcolor="#5093e2"
            theme={linkedinColor}
          />
        </div>
        <Details
          title={"About"}
          description={
            "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
          }
        />
        <Details
          title={"Interests"}
          description={
            "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
          }
        />
      </div>
      <Footer />
    </>
  );
};
