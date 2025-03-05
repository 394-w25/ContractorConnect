import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import CheckIcon from '@mui/icons-material/Check';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

// Styled components
const NumberBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '30px',
  height: '30px',
  backgroundColor: '#4169E1',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '4px',
  fontWeight: 'bold'
}));

const VerifiedBadge = styled(Avatar)(({ theme }) => ({
  backgroundColor: '#4169E1',
  width: '40px',
  height: '40px'
}));

const ContractorBidCard = ({name, quote, imgUrl, height = 80, width = '50%', needsQuote = true}) => {
  // Default values from the image if not provided in props
  const companyName = name || "Connor Construct, LLC";
  const price = quote || "350.00";
  const rating = 3.10;
  const reviews = "8.7K";
  const website = "www.connorconstruct.com";
  const phone = "888-867-5309";
  const contractorsNeeded = 2;
  const days = 2;
  const materials = 150;
  const labor = 200;
  
  return (
    <Card sx={{ 
      border: '2px dashed #4169E1',
      width: '100%', 
      borderRadius: 3,
      padding: 2,
      position: 'relative',
      overflow: 'visible'
    }}>
      {/* Top number badge */}
      <NumberBadge sx={{ top: -15, right: 15 }}>12</NumberBadge>
      
      {/* Header with image and price */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 2
      }}>
        <CardMedia
          sx={{ 
            height: height,
            width: width,
            flexShrink: 0,
            borderRadius: 1
          }}
          image={imgUrl || "/construction-image.jpg"}
          title={companyName}
        />
        
        {needsQuote &&
          <CardActions>
            <Button 
              variant="outlined" 
              size="large" 
              sx={{
                color: '#4169E1',
                borderRadius: 2,
                border: '2px solid #4169E1',
                fontWeight: 'bold',
                fontSize: '1.25rem'
              }}
            >
              ${price}
            </Button>
          </CardActions>
        }
      </Box>
      
      {/* Company name */}
      <CardContent sx={{ p: 0, mb: 1 }}>
        <Typography variant="h5" component="div">
          {companyName}
        </Typography>
      </CardContent>
      
      {/* Rating section */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <VerifiedBadge>
          <CheckIcon />
        </VerifiedBadge>
        <Box sx={{ ml: 1, display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component="span" sx={{ mr: 1, fontWeight: 'bold' }}>
            {rating}
          </Typography>
          <Rating value={3} readOnly sx={{ color: '#4169E1' }} />
          <Typography variant="body1" component="span" sx={{ ml: 1, color: '#757575' }}>
            | {reviews} Reviews
          </Typography>
        </Box>
      </Box>
      
      {/* Website */}
      <Typography variant="body1" component="p" sx={{ mb: 1 }}>
        {website}
      </Typography>
      
      {/* Phone */}
      <Typography variant="h6" component="p" sx={{ mb: 2 }}>
        {phone}
      </Typography>
      
      {/* See full bid button */}
      <Button variant="outlined" 
        sx={{
          width: '100%',
          padding: 1.5,
          color: '#4169E1',
          fontWeight: 'bold',
          borderRadius: 2,
          border: '1px solid #E0E0E0',
          mb: 2
        }}
      >
        See full bid
      </Button>
      
      {/* Details section */}
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body1">Contractors Needed</Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{contractorsNeeded}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body1">Days</Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{days}</Typography>
        </Box>
        
        <Divider sx={{ my: 2 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body1">Materials</Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{materials}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body1">Labor</Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{labor}</Typography>
        </Box>
      </Box>
      
      {/* Bottom number badge */}
      <NumberBadge sx={{ bottom: -15, right: '50%', transform: 'translateX(50%)' }}>12</NumberBadge>
    </Card>
  );
};

export default ContractorBidCard;