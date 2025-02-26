import React from 'react';
import {
  Modal,
  Box,
  Typography,
} from "@mui/material";
import { HomieIcon } from "../lib/icons";

const ChatBox = ({ isOpen, onClose }) => {
    console.log('entered')
  return (
    <Modal open={isOpen} onClose={onClose} aria-labelledby="chatbox-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "white",
          borderRadius: 3,
          boxShadow: 24,
          p: 4,
          textAlign: "center",
        }}
      >
      </Box>
    </Modal>
  );
};

export default ConfirmationUpdateModal;