import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';

const ContractorCard = ({name, quote, imgUrl, height = 120, width = '75%', needsQuote}) => {
    
    return( <Card sx={{ 
        border: '2px solid #2511BE',
        width: '100%', 
        borderRadius: 5,
        padding: 2,
    }}>

        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 1
        }}>
            <Box sx={{
                height: height,
                width: width,
                overflow: 'hidden',
                borderRadius: '5.164px',
                position: 'relative',
                paddingTop: '33.33%', // This creates a 3:1 aspect ratio
                }}>
                <CardMedia
                component="img"
                sx={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    borderRadius: '5.164px'
                }}
                image={imgUrl}
                title={name}
                />
            </Box>
            
            {needsQuote &&
            <CardActions>
                <Button variant="outlined" 
                        size="large" 
                        sx={{
                    color:'#2511BE',
                    borderRadius: 2,
                    borderColor: '#2511BE'
                }}>
                    ${quote}
                </Button>
            </CardActions>
            }   
        </Box>
        
       <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
       }}>
        <CardContent sx={{
                margin: 0,
                padding: 0,
            }}>
            <Typography gutterBottom variant="h7" component="div" sx={{ margin: 0, padding: 0 }}>
                {name}
            </Typography>
        </CardContent>


        <IconButton sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            border: '1px solid #2511BE',
            backgroundColor: '#2511BE',
            borderRadius: 1
        }}>
            <LocalPhoneIcon sx={{color: 'white', width: 15, height: 15}}/>
        </IconButton>

       </Box>
       
      </Card> );
}

export default ContractorCard;