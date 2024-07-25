import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import React, { useRef } from "react";
import AddMealDialog from "./AddMealDialog";

let weeks = [
  {
    name: "All Meals",
    week: "all",
  },
  {
    name: "Week 1",
    week: 1,
  },
  {
    name: "Week 2",
    week: 2,
  },
  {
    name: "Week 3",
    week: 3,
  },
  {
    name: "Week 4",
    week: 4,
  },
];

const Tabs = ({ tabs, setTabs, count, handleOpenDialog }) => {
  return (
    <>
      <Box p={2.5} bgcolor={"#ffffff"}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          maxWidth={"1000px"}
          margin={"auto"}
          flexWrap={"wrap"}
        >
          <List
            sx={{
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              overflow: "auto",
              gap: 2,
            }}
          >
            {weeks.map((val, ind) => {
              const isMatched = tabs == val.week;
              return (
                <ListItem
                  key={ind}
                  onClick={() => {
                    if (!count > 0) {
                      setTabs(val.week);
                    }
                  }}
                  sx={{
                    cursor: "pointer",
                    borderBottom: isMatched ? "4px solid #4f4fa3de" : "none",
                    color: isMatched ? "#4f4fa3de" : "#000000",
                  }}
                >
                  <ListItemText
                    primary={val.name}
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                      },
                    }}
                  />
                </ListItem>
              );
            })}
          </List>
          <Button
            variant="contained"
            disabled={count === 0 ? true : false}
            onClick={handleOpenDialog}
            sx={{
              color: "#ffffff",
              backgroundColor: "#4f4fa3de",
              "&:hover": {
                backgroundColor: "#4f4fa3de",
              },
            }}
          >
            Add to week
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Tabs;
