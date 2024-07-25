import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { appImages } from "../../assets";

const BannerContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "250px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection:"column",
  padding:"20px",
  [theme.breakpoints.down("md")]: {
    height: "150px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "120px",
  },
}));

const BackgroundImage = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `url(${appImages.pizzaImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.2,
  zIndex: -1,
}));

const Banner = () => {
  return (
    <BannerContainer>
      <BackgroundImage />
      <Typography
        variant="banner_heading"
        component={"h1"}
        style={{ zIndex: 1 }}
      >
        Optimized Your Meal
      </Typography>
      <Typography
        variant="body2"
        style={{ zIndex: 1 }}

      >
        Select Meal to add in week. You will be able to edit. Modify and change the Meal
      </Typography>
    </BannerContainer>
  );
};

export default Banner;
