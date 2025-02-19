import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';

const ContractorCard = ({name, quote, imgUrl, height, width, needsQuote}) => {
    

    return( <Card sx={{ 
        border: '2px solid #2511BE',
        width: '100%', 
        borderRadius: 5,
        padding: 2,
    }}>

        <Box sx={{display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 1
        }}>

            <CardMedia
                sx={{ height: {height},
                    width: {width},
                    flexShrink: 0,
                    borderRadius: '5.164px'
                }}
                image={imgUrl}
                title={name}
            />
            {needsQuote &&
            <CardActions>
                <Button variant="outlined" 
                        size="large" 
                        sx={{
                    color:'#2511BE',
                    borderRadius: 2,
                    borderColor: '#2511BE'
                }}>
                    {quote}
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