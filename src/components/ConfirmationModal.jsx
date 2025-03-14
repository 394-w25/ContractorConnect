import { useContext, useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { contractors } from '../utilities/data';
import ConfirmationUpdateModal from './ConfirmationUpdateModal';
import { useDbUpdate } from '../utilities/firebase';
import { idContext } from '../pages/RequestPage';

function CustomModal({ isOpen, onClose,onContractorSelect }) {
  const [selectedContractor, setSelectedContractor] = useState(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const id = useContext(idContext);
  const [update, result] = useDbUpdate(`requests/${id}`)

  const handleContractorSelect = (id) => {
    update({'contractorName': id})
    setSelectedContractor(id);
    if (onContractorSelect) {
      onContractorSelect(id); // Call the parent callback
    }
  };

  return (
    <>
    <Modal open={isOpen} onClose={onClose} aria-labelledby="modal-title">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          bgcolor: "white",
          borderRadius: 3,
          boxShadow: 24,
          p: 4,
          textAlign: "center",
        }}
      >
        {/* Header */}
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <CheckCircle sx={{ color: "purple", fontSize: 30, mr: 1 }} />
          <Typography variant="h5" fontWeight="bold">
            Confirmed!
          </Typography>
        </Box>


        {/* Message */}
        <Typography variant="body1" mb={3}>
          Glad we could help you find someone. Which contractor did you select?
        </Typography>

        {/* Contractor Selection */}
        <Grid container spacing={2}>
          {Object.entries(contractors).map(([id, contractor]) => (
            <Grid item xs={6} key={id}>
              <Button
                fullWidth
                onClick={() => handleContractorSelect(id)}
                sx={{ 
                  p: 0,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'transparent',
                  }
                }}
              >
              <Card
                sx={{
                  border: "2px solid blue",
                  borderRadius: 2,
                  cursor: "pointer",
                  textAlign: "center",
                  p: 1,
                  height: '100%', 
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Box sx={{ 
                  width: '100%',
                  height: 160, 
                  position: 'relative' 
                }}>
                {/* Ensure image URLs are correctly used */}
                <CardMedia
                  component="img"
                  height="80"
                  image={contractor.logo} // Image from data.js
                  alt={contractor.name}
                  sx={{ 
                    borderRadius: 1,
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                </Box>
                <CardContent sx={{ p: 1 }}>
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    sx={{
                      border: "2px solid blue",
                      borderRadius: "5px",
                      display: "inline-block",
                      px: 1,
                      color: "blue",
                    }}
                  >
                    ${contractor.quote.toFixed(2)}
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    {contractor.name}
                  </Typography>
                </CardContent>
              </Card>
              </Button>
            </Grid>
          ))}
        </Grid>

        {/* Cancel Button */}
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            mt: 3,
            borderColor: "purple",
            color: "purple",
            fontWeight: "bold",
            borderRadius: 2,
            px: 4,
          }}
        >
          Cancel
        </Button>
      </Box>
    </Modal>
    <ConfirmationUpdateModal 
      isOpen={showConfirmationModal} 
      onClose={() => setShowConfirmationModal(false)}
    />
  </>
  );
};

export default CustomModal;
