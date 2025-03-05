import React, { useState } from 'react';
import { Button, Box, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

// Importing the two card components
import ContractorCard from "./ContractorCard";
import ContractorBidCard from "./ContractorBidCard";

// Styled expand button
const ExpandButton = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1.5),
  color: '#4169E1',
  fontWeight: 'bold',
  borderRadius: theme.spacing(1),
  border: '1px solid #E0E0E0',
  marginTop: theme.spacing(1)
}));

// Styled expand icon that rotates
const ExpandMore = styled(({ expand, ...other }) => {
  return <ExpandMoreIcon {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ExpandableContractorComponent = ({
  name,
  quote,
  imgUrl,
  height = 120,
  width = 150,
  needsQuote = true,
  bidData,
  ...props
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ position: 'relative' }}>
      {/* Show ContractorCard when collapsed */}
      {!expanded && (
        <ContractorCard 
          name={name}
          quote={quote}
          imgUrl={imgUrl}
          height={height}
          width={width}
          needsQuote={needsQuote}
        />
      )}
      
      {/* Show full ContractorBidCard when expanded */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <ContractorBidCard data={bidData || {
          name,
          quote,
          imgUrl,
          // Add other necessary bid data
        }} />
      </Collapse>
      
      {/* Expand/Collapse button */}
      <ExpandButton 
        onClick={handleExpandClick}
        endIcon={<ExpandMore expand={expanded} />}
      >
        {expanded ? "Hide full bid" : "See full bid"}
      </ExpandButton>
    </Box>
  );
};

export default ExpandableContractorComponent;