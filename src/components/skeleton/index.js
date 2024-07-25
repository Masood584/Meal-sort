import { Grid, Skeleton, Box } from "@mui/material";
import React from "react";

const SkeletonCard = () => {
  const skeletons = Array.from(new Array(3));

  return (
    <Grid container spacing={5} my={4}>
      {skeletons.map((_, index) => (
        <Grid key={index} item xs={12} sm={6} md={4}>
          <Box
            sx={{
              padding: 2,
              borderRadius: 2,
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px",
              backgroundColor: "#fff",
            }}
          >
            <Skeleton variant="rectangular" width="100%" height={200} />
            <Skeleton variant="text" width="60%" height={40} sx={{ mt: 2 }} />
            <Skeleton variant="text" width="80%" height={20} />
            <Skeleton variant="text" width="80%" height={20} />
            <Skeleton variant="text" width="80%" height={20} />
            <Skeleton variant="text" width="80%" height={20} />
            <Skeleton variant="text" width="80%" height={20} />
            <Skeleton variant="text" width="80%" height={20} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default SkeletonCard;
