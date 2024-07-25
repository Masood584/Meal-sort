import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

let weeks = [
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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const AddMealDialog = React.forwardRef(
  ({ selectedWeek, setSelectedWeek, handleSetMeal }, ref) => {
    const [open, setOpen] = React.useState(false);

    React.useImperativeHandle(ref, () => ({
      isVisible() {
        setOpen(true);
      },
      handleClose() {
        setOpen(false);
      },
    }));

    return (
      <BootstrapDialog
        onClose={() => setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Select Week
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Stack
            my={4}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            flexWrap={"wrap"}
            gap={1.5}
          >
            {weeks.map((val, ind) => {
              const isMatched = selectedWeek?.week == val.week;
              return (
                <Button
                  key={ind}
                  variant="contained"
                  onClick={() => {
                    setSelectedWeek(val);
                  }}
                  sx={{
                    color: "#ffffff",
                    backgroundColor: isMatched ? "blue" : "#adadadde",
                    "&:hover": {
                      backgroundColor: isMatched ? "blue" : "#adadadde",
                    },
                  }}
                >
                  {val.name}
                </Button>
              );
            })}
          </Stack>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            disabled={!selectedWeek ? true : false}
            sx={{
              color: "#ffffff",
              backgroundColor: "#4f4fa3de",
              "&:hover": {
                backgroundColor: "#4f4fa3de",
              },
            }}
            onClick={handleSetMeal}
          >
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    );
  }
);

export default AddMealDialog;
