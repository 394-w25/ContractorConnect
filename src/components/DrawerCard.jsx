import { useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import { fetchImage } from '../utilities/firebase'


const DrawerCard =  ({ width, height, imgUrl, name, handleClick }) => {
  const [img, setImg] = useState('');

  useEffect(() => {
    const wrapper = async () => {
      console.log(imgUrl)
      const response = await fetchImage(imgUrl);
      setImg(response);
    }

    wrapper();
    
  }, [imgUrl])
  
  return (
    <Box 
      onClick = {handleClick}
      sx={{
      width: '100%'
    }}>
      <Card sx={{
        width: { width },
        display: "flex",
        padding: "12px",
        alignItems: "center",
        gap: "10px",
        alignSelf: "stretch",
        borderRadius: "12px",
        border: '2px solid #2511BE',
        marginBottom: '8px'
      }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height={height}
            image={img}
            sx={{
              display: 'flex',
              height: 51,
              padding: '24px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8.607px',
              alignSelf: 'stretch',
              borderRadius: '5.164px',
              background: `url(${img}) lightgray 50% / cover no-repeat`,
              maxWidth: 345,
              border: 'blue'
            }}
          />
          <CardContent>
            <Typography
              sx={{
                alignSelf: "stretch",
                color: "#111827", // Cool Gray 900
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "20px", // 142.857%
                letterSpacing: "0.25px",
              }}
            >
              {name}
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>

    </Box>

  );
}

export default DrawerCard;