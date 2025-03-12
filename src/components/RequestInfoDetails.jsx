import { useContext } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useDbData } from '../utilities/firebase';
import { idContext } from '../pages/RequestPage';


const RequestInfoDetails =() => {
    const id = useContext(idContext);
    const [request, error] = useDbData(`requests/${id}`);

    console.log(request)

    if(!request) {
        return (<p>Loading data</p>)
    }

    return (
        <Box sx={{
                display: "flex",
                height: "auto",
                padding: "32px 32px 0px 32px",
                alignItems: "flex-start",
                gap: "24px",
                flex: "1 0 0",
                flexDirection: "column",
                overflowY: "auto",
            }}>

            {/* Header Container */}
            <Box sx={{
                display: "flex",
                flexIirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                flex: "1 0 0",
            }}>
                <Typography sx={{
                    color: "#000",
                    fontFamily: "Inter",
                    fontSize: "32px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                }}>
                    {request.name}
                </Typography>
            </Box>

            {/* Image and Request Information Container */}
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "14px",
                alignSelf: "stretch",
            }}>

            <p className="text-lg"> Request Information</p>
            { <Typography sx={{
                color: "#000",
                fontFamily: "Inter",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "16px", // or 1.14 for the percentage-based value
                letterSpacing: "0.28px",
                alignSelf: "stretch",
                paddingLeft: "10px",
            }}>

                Property name: demo • Number of walls: 1 • Wall dimensions: Wall 1: 10x10 ft
            </Typography> }
            </Box>

            <Typography sx={{
                flex: "1 0 0",
                alignSelf: "stretch",
                overflow: "auto",
                color: "#000",
                fontFeatureSettings: "'liga' off, 'clig' off",
                // textOverflow: "ellipsis",
                // whiteSpace: "nowrap",
                fontFamily: "Inter",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "24px", // or 1.5 for the percentage-based value
            }}>
                {request.desc}
            </Typography>

        </Box>
    )
}

export default RequestInfoDetails;