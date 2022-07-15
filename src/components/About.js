import React from 'react';
import { Grid, Box, Avatar, Typography, ListItemIcon, ListItem, ListItemText } from '@mui/material';
import { Cake } from '@mui/icons-material';

const About = () => {
    return (
        <Grid container columnSpacing={20}>
            <Grid item xs={4} style={{ height: "132px" }}>
                <Avatar sx={{ width: 350, height: 350 }} src="images/huy_face.PNG" />
            </Grid>
            <Grid item xs={8}>
                
                <Grid container>
                    <Grid item xs={12}>
                        <Box mb={4}>
                            <Typography variant="body1">
                                Hi! My name is Tran Huu Le Huy, and I am a software developer. I started my field in Computer Science since October 2017 and since then, I have daily learned and acquired good problem-solving mindset for programming skills and languages. Right now, I am working as a front-end developer focusing on React.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <Cake />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Single-line item"
                                    />
                                </ListItem>
                            </Grid>
                            <Grid item xs={6}>
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
                {/* <Box mb={4}>
                    <Typography variant="body1">I'm Albert Walkers and Web Developer
                        Hi! My name is Albert Walkers. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success.
                    </Typography>
                </Box> */}

        </Grid>
    )
}

export default About