import { Box, Checkbox, Typography, FormControlLabel, Button, Grid2 } from "@mui/material";
import { contractors } from "../utilities/data";
import ContractorCard from "./ContractorCard";

const BidsDisplay = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '32px',
            paddingRight: '24px',
            paddingLeft: '24px',
            paddingBottom: '10',
            width: '25%'
        }}>
            {/* Header */}
            <Grid2
                container
                direction="row"
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography sx={{
                    display: 'inline-flex',
                    color: 'var(--Color-Cool-Gray-900, #111827)',
                    fontFamily: 'Inter',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '24px',
                }}>
                    Bids
                </Typography>
                <FormControlLabel
                    sx={{
                        color: '#000',
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal',
                    }}
                    control={
                        <Checkbox sx={{
                            color: '#402EC6',
                            "&.Mui-checked": {
                                color: '#402EC6',
                            },
                        }} />}
                    label="Find someone else?"
                    labelPlacement="start" />

            </Grid2>
            {/* Estimated Cost */}
            <Grid2
                container
                direction="row"
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: '24px'
                }}
            >
                <Typography sx={{
                    display: 'inline-flex',
                }}>
                    Our estimated cost
                </Typography>
                <Button variant="outlined"
                    size="large"
                    sx={{
                        color: '#2511BE',
                        borderRadius: 2,
                        borderColor: '#2511BE'
                    }}>
                    $350
                </Button>
            </Grid2>
            <Typography sx={{
                color: 'var(--Color-Cool-Gray-900, #111827)',
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '24px', // 150% of font-size
            }}>
                Contractors
            </Typography>
            {Object.values(contractors).map((contractor) => <ContractorCard name={contractor.name} quote={contractor.quote} imgUrl={contractor.img} width={'302px'} height={'105px'} />)}
        </Box >
    )
}

export default BidsDisplay;