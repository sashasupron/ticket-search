"use client";
import { Box, Grid2, Typography, Accordion, AccordionSummary, AccordionDetails, SxProps} from "@mui/material";
import styles from "./boxContactPage.module.css";
import clsx from "clsx";
import { Inputs } from "@/shared/ui/inputs/inputs";
import { Buttons } from "@/shared/ui/buttons/buttons";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";



interface BoxContactPageProps {
    className?: string;
    sx?: SxProps;
}


export function BoxContactPage({ className, sx }: BoxContactPageProps) {
    const [problem, setProblem] = useState('');

    

    return (
        <Box
            component="form" 
            className={clsx(styles.contactPageBox, className)} 
            noValidate autoComplete="off"
            sx={sx}
        >

        <Grid2 
            container 
            spacing={2} 
            justifyContent="center" 
            alignItems="center">

            <Grid2>
                <Typography  className = "text" sx={{color: 'white', fontWeight: "bold", fontSize: 20}}> 
                    If you have questions, describe your problem in the field below
                </Typography> 
            </Grid2>


            <Grid2>
                <Inputs 
                    label="Describe your problem here" 
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    sx = {{width: {xs: 340, sm: 600, md: 700, lg: 800, xl: 800}}}
                />
            </Grid2>


            <Grid2>
                <Typography  sx={{ fontWeight: "bold", marginBottom: 1, marginTop: 2, color: 'white', fontSize: 20 }}>
                    Frequently Asked Questions
                </Typography>
            </Grid2>


            <Grid2>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="faq1-content" id="faq1-header">
                        <Typography variant="subtitle1" >
                            How can I contact customer support?
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            You can contact our customer support team via email at support@example.com or by calling +1 (800) 123-4567.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid2>


            <Grid2>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="faq2-content" id="faq2-header">
                        <Typography variant="subtitle1" >
                            What is the refund policy?
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            Refunds are available within 30 days of purchase. Please contact our support team for assistance with the refund process.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid2>


            <Grid2>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="faq3-content" id="faq3-header">
                        <Typography variant="subtitle1" >
                            Can I modify my reservation?
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            Yes, reservations can be modified up to 24 hours before the scheduled date. Visit your account dashboard to make changes.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid2>

            <Grid2>
                <Buttons 
                    label="Sent" 
                    className={styles.buttons}
                    sx={{width: { xs: 340, sm: 300, md: 345, lg: 345, xl: 345 }, 
                    
                }}/>
            </Grid2>
        </Grid2>
    </Box>
  );
}

