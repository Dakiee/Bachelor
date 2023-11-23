import React from "react";
import { Modal, Button, Box, Typography } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "rgba(58, 56, 69, 1)",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const secondStyle = {
    display: "flex",
    justifyContent: "end",
    marginTop: "1rem",
};
interface ResultModalProps {
  open: boolean;
  onClose: () => void;
  handleRetry: () => void;
  handleLeave: () => void;
  wpm: any;
  time: any;
  accuracy: any;
  failed: any;
}

function ResultModal({
  open,
  onClose,
  handleRetry,
  handleLeave,
  wpm,
  time,
  accuracy,
  failed,
}: ResultModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Үр дүн
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Typography variant="body1" color="initial">
            Нийт зарцуулсан хугацаа
          </Typography>
          <Typography variant="body1" color="initial">
            {time} Сек
          </Typography>
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Typography variant="body1" color="initial">
            Хурд
          </Typography>
          <Typography variant="body1" color="initial">
            {wpm} WPM
          </Typography>
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Typography variant="body1" color="initial">
            Нарийвчлал
          </Typography>
          <Typography variant="body1" color="initial">
            {accuracy} %
          </Typography>
        </Typography>
        <Box sx={secondStyle}>
          <Button variant="outlined" onClick={handleRetry}>
            Дахин оролдох
          </Button>
          <Button variant="outlined" onClick={handleLeave}>
            Орхих
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default ResultModal;
