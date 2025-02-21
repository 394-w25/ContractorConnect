import React from 'react';
import {
  Modal,
  Box,
  Typography,
} from "@mui/material";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { HomieIcon } from "../lib/icons";

const ConfirmationUpdateModal = ({ isOpen, onClose }) => {
    console.log('entered')
  return (
    <Modal open={isOpen} onClose={onClose} aria-labelledby="confirmation-modal">
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
        {/* Header */}
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
        <HomieIcon />
          <Typography variant="h5" fontWeight="bold">
            Confirmed!
          </Typography>
        </Box>

        {/* Message */}
        <Typography variant="body1">
          Updating your information ...
        </Typography>
      </Box>
    </Modal>
  );
};

export default ConfirmationUpdateModal;