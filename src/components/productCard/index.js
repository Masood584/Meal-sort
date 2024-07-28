import {
  Box,
  Grid,
  IconButton,
  Rating,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const CardContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "400px",
  backgroundColor: "#ffffff",
  padding: 20,
  borderRadius: 10,
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 5px 0px",
  cursor: "pointer",

  "& .image-container": {
    borderRadius: "inherit",
    height: 200,
    overflow: "hidden",
    position: "relative",
  },

  "& .delete-btn": {
    position: "absolute",
    top: 3,
    left: 3,
    backgroundColor: "#e5c8c8cf",
    borderRadius: 2,
    padding: 5,
    "&:hover": {
      backgroundColor: "#e5c8c8cf",
    },
  },

  "& .product-name": {
    fontWeight: 800,
    fontSize: "1rem",
  },

  "& .product-des": {
    fontSize: "0.75rem",
    height: 140,
    overflow: "hidden",
  },

  "& .product-cuisine": {
    fontSize: "0.7rem",
    fontWeight: 800,
  },

  "& .MuiRating-root ": {
    fontSize: "0.875rem",
    color: "#4f4fa3de",
  },
  "& .meal-tag ": {
    position: "absolute",
    top: 3,
    right: 3,
    borderRadius: 4,
    backgroundColor: "#000000",
    padding: "2px 4px",
  },
}));

const ProductCard = ({
  data,
  setAllData,
  canSelect,
  selectedMeal,
  setSelectedMeal,
  showDelete,
  mainData,
  setMainData,
  handleDelete,
}) => {
  const handleSelectMeal = (e, val, index) => {
    // e.preventDefault()
    let tempArray = [...data];
    tempArray[index].isSelected = !tempArray[index].isSelected;
    let selectedMeals = tempArray.filter((item) => item.isSelected === true);
    setAllData(tempArray);
    setSelectedMeal(selectedMeals);
  };

  return (
    <Grid container spacing={5} my={3}>
      {data?.map((val, index) => {
        const mealType = val.mealType.join(",");
        return (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <CardContainer
              onClick={(e) => {
                if (canSelect) {
                  handleSelectMeal(e, val, index);
                }
              }}
              sx={{
                border: val.isSelected ? "2px solid blue" : "none",
              }}
            >
              <Box className={"image-container"}>
                <img
                  src={val.image}
                  alt={val.name}
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
                <Box className={"meal-tag"}>
                  <Typography
                    variant="body2"
                    fontSize={"0.7rem"}
                    color={"#ffffff"}
                  >
                    {val.mealType.join("+")}
                  </Typography>
                </Box>
                {showDelete && (
                  <IconButton
                    className="delete-btn"
                    onClick={(e) => handleDelete(val, index)}
                  >
                    <DeleteForeverIcon htmlColor="red" />
                  </IconButton>
                )}
              </Box>
              <Typography my={1.5} variant="h1" className="product-name" noWrap>
                {val.name}
              </Typography>
              <Typography variant="body2" className="product-des" height={150}>
                {val.instructions}
              </Typography>
              <Stack
                my={0.5}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="body2" className="product-cuisine">
                  Cuisine:{" "}
                  <span style={{ fontWeight: 400 }}>{val.cuisine} </span>
                </Typography>

                <Stack direction={"row"} alignItems={"center"} gap={0.5}>
                  <Typography variant="body2" className="product-cuisine">
                    Rating:{" "}
                    <span style={{ fontWeight: 400 }}>{val.rating} </span>
                  </Typography>
                  <Rating
                    name="size-small"
                    value={val.rating}
                    size="small"
                    precision={0.5}
                  />
                </Stack>
              </Stack>
            </CardContainer>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductCard;
