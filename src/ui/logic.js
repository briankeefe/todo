import React from 'react'
import { Accordion, AccordionDetails, Typography, Box, AccordionSummary } from "@mui/material";
import cleanText from './code/clean.js'
import addText from './code/add.js'
import removeText from './code/remove.js'
import Block from './code';

function Logic(){
    return(
        <React.Fragment>
            <Box>
                <Accordion sx={{minWidth: '100px'}}>
                    <AccordionSummary>
                        <Typography>Click to see coding logic</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Accordion>
                            <AccordionSummary>
                                <Typography>
                                    Cleaning the inputs
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <Block code={cleanText} />
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary>
                                <Typography>
                                    Add an input
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <Block code={addText} />
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary>
                                <Typography>
                                    Remove an item
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <Block code={removeText} />
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </React.Fragment>
    )
}

export default Logic;