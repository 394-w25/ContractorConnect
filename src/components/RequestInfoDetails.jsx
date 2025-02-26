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
                padding: "32px 32px 64px 32px",
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
                gap: "24px",
                alignSelf: "stretch",
            }}>

                <Box
                    component="img"
                    src={img} // Replace with actual image path
                    alt="Request Image"
                    sx={{
                        display: "flex",
                        height: "200px",
                        padding: "24px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8.607px",
                        flex: "1 0 0",
                        borderRadius: "5.164px",
                        backgroundImage: "url(<path-to-image>)",
                        backgroundColor: "lightgray",
                        backgroundPosition: "50%",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",                      
                    }}/>

                <Typography sx={{
                    alignSelf: 'stretch',
                    color: "#000",
                    fontFamily: "Inter",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                }}>
                    Request Information
                </Typography>
            </Box>

            {/* Grid Layout */}
            <Grid container spacing={4}>
                {gridData.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper sx={{ 
                            p: 2, 
                            textAlign: "center", 
                            borderRadius: 2, 
                            boxShadow: "none", 
                            height: "50px",  // Adjust this value to your desired height
                        }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                {item.label}
                            </Typography>
                            <Typography variant="body1">{item.value}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            
            <Typography sx={{
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
            </Typography>

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