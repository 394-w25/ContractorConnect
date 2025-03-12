import { jobRequests } from '../utilities/data';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const RequestInfoDetails =({index}) => {
    console.log(index);
    const title = jobRequests[index].name;
    const img = jobRequests[index].img;
    const {
        isIndoor,
        sqft,
        ceilingHeight,
        wallMaterial,
        paintType,
        numColors,
        preperationNeeded,
        wallCondition,
        numCoats,
        schedule,
        otherServices,
        desc,
      } = jobRequests[index];

    // Grid Data
    const gridData = [
        { label: "Is this indoor or outdoor?", value: isIndoor },
        { label: "How many square feet?", value: sqft },
        { label: "How tall are your ceilings?", value: `${ceilingHeight.ft} ft ${ceilingHeight.in} in` },
        { label: "Wall material?", value: wallMaterial },
        { label: "Do you have your own paint?", value: "No" }, // Static value since it is not in data.js
        { label: "Paint type preference?", value: paintType },
        { label: "How many colors?", value: numColors },
        { label: "Preparation needed?", value: preperationNeeded },
        { label: "Wall condition", value: wallCondition },
        { label: "How many coats of paint?", value: numCoats },
        { label: "When to schedule?", value: schedule },
        { label: "Any other services needed?", value: otherServices },
    ];

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
                    {title}
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
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                paddingTop: "10px",
                lineHeight: "16px", // or 1.14 for the percentage-based value
                letterSpacing: "0.28px",
                alignSelf: "stretch",
            }}>
                Tell us a bit more about the project:
            </Typography> }
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

            
           {/* <Typography sx={{
                color: "#000",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "16px", // or 1.14 for the percentage-based value
                letterSpacing: "0.28px",
                alignSelf: "stretch",
                marginTop: 3
            }}>
                Tell us a bit more about the project
            </Typography> */}
            

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
                {desc}
            </Typography>

        </Box>
    )
}

export default RequestInfoDetails;