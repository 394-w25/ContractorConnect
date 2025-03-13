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
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { styled } from '@mui/material/styles';
import VerifiedBadge from '../lib/verifiedbadge';

const ContractorBidCard = ({ name, quote, rating, reviews, website, phone, contractorsNeeded = 2, days = 2, materials = 75, labor = 200, equipment = 75,
  imgUrl, height = 80, width = '50%', needsQuote = true }) => {

  return (
    <Card sx={{
      border: '2px solid #2511BE',
      borderRadius: 3,
      padding: 2,
      position: 'relative',
      width: '100%',
      backgroundColor: '#F4F0FF'
    }}>
      {/* Header with image and price */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <CardMedia
          sx={{
            height: 50,
            width: '62%',
            borderRadius: 1
          }}
          image={imgUrl || "/construction-image.jpg"}
          title={name}
        />
        {needsQuote &&
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'white',
              color: '#2511BE',
              borderRadius: 2,
              fontWeight: 'bold',
              fontSize: '1.25rem',
              boxShadow: 'none',
              border: '1px solid #2511BE'
            }}
          >
            ${quote}
          </Button>
        }
      </Box>
      {/* Company name and contact icons */}
      <CardContent sx={{ p: 0, mb: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            {name}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <EmailIcon sx={{ color: '#2511BE' }} />
            <PhoneIcon sx={{ color: '#2511BE' }} />
          </Box>
        </Box>
      </CardContent>
      {/* Rating section */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <VerifiedBadge>
          <CheckIcon fontSize="small" />
        </VerifiedBadge>
        <Typography variant="h6" component="span" sx={{ mx: 1, fontWeight: 'bold' }}>
          {rating}
        </Typography>
        <Rating value={rating} precision={0.1} readOnly sx={{ color: '#2511BE' }} />
        <Typography variant="body1" component="span" sx={{ ml: 1, color: '#2511BE' }}>
          {reviews} Reviews
        </Typography>
      </Box>
      {/* Website and phone */}
      <Typography variant="body2" sx={{ color: '#2511BE', mb: 1 }}>
        {website}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        {phone}
      </Typography>
      {/* See full bid button */}
      <a href="https://drive.google.com/file/d/1ll0H4vFWaYKxATcn-cHjILFIctjPTjB3/view?usp=drive_link">
        <Button 
          variant="contained" 
          fullWidth 
          sx={{ backgroundColor: '#2511BE', color: 'white', mb: 2 }}>
          See full bid
        </Button>
      </a>
 
      {/* Details section */}
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2">Contractors Needed</Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{contractorsNeeded}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2">Days</Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{days}</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2">Materials</Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{materials}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2">Labor</Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{labor}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2">Equipment</Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{equipment}</Typography>
        </Box>
      </Box>
    </Card>
  );
};
export default ContractorBidCard;