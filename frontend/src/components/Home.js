import React, { useState } from 'react';
import { Grid, Typography, Button, List, ListItem, InputBase } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import image from '../assests/images/NeuralNetwork.png'
import useStyles from '../assests/useStyles';

function Home() {
    const classes = useStyles();
    const [voltage, setVoltage] = useState('');
    const [psoeValue, setPsoeValue] = useState(null);

    const handlePredictPSOE = () => {
        setPsoeValue(1.2345); // Example value
    };

    return (
        <>
            <Header />
            <Grid container direction="column" style={{ padding: '30px 120px' }}>

                <Grid item xs={12}>
                    <Grid container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
                        <Grid item xs={6} md={6}>
                            <Typography variant="body1">
                                Analysis of <span style={{ color: 'red', fontWeight: 'bold' }}>Position Sensor Offset Error (PSOE)</span> <br />
                                in Permanent Magnet Synchronous Machines (PMSMs)
                            </Typography>
                            <div style={{ margin: '50px 0' }}></div>
                            <Typography>
                                <span style={{ color: '#5B57D2', fontSize: "30px" }}>MotorMind </span><br />
                                for enhanced <br />
                                PMSM Performance
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} >
                            <img
                                src={image}
                                alt="MotorMind"
                                style={{ width: '40%', height: 'auto', objectFit: 'contain' }}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={2} style={{ padding: '40px 0px', display: 'flex', alignItems: 'center' }}>
                    <Grid item xs={6} md={3}>
                        <InputBase
                            className={classes.textFeild}
                            type="text"
                            placeholder="Enter Voltage"
                            required
                        />
                    </Grid>
                    <Grid item xs={5} md={2}>
                        <Button fullWidth variant="contained"
                            className={classes.button}
                            onClick={handlePredictPSOE}
                        >
                            Click to Predict PSOE
                        </Button>
                    </Grid>
                    {psoeValue !== null && (
                        <Grid item xs={11} md={2}>
                            <InputBase
                                className={classes.psoeGrid}
                                type="text"
                                value={`PSOE Value: ${psoeValue}`}
                                placeholder="Enter Voltage"
                                readOnly
                            />
                        </Grid>
                    )}
                </Grid>


                <Grid item xs={12} >
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h6">Conditions:</Typography>
                            <List>
                                <ListItem>
                                    <Typography>Condition 1: This is the first condition.</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography>Condition 2: This is the second condition.</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography>Condition 3: This is the third condition.</Typography>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={3} style={{display: 'flex', alignItems: 'center'}}>
                            <Typography variant="h6">
                                About <br />
                                <span style={{ color: '#0F0B81', fontSize: "30px" }}>MotorMind </span>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Typography>
                                This platform leverages an Artificial Neural Network (ANN)-based methodology
                                to accurately quantify and correct Position Sensor Offset Error (PSOE) in
                                Permanent Magnet Synchronous Machines (PMSMs). By analyzing motor parameters
                                such as current, speed, voltage, and the number of poles, the platform ensures
                                precise predictions and real-time insights, enabling enhanced motor performance,
                                reduced downtime, and optimized system efficiency for developers and engineers.
                            </Typography>
                            <Grid item xs={3} md={2} style={{ marginTop: '20px' }}>
                                <Button fullWidth variant="contained"
                                    className={classes.button}
                                >
                                    Read More
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} style={{ paddingTop: '40px' }}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={12}>
                            <Typography>
                                This platform leverages an Artificial Neural Network (ANN)-based methodology
                                to accurately quantify and correct Position Sensor Offset Error (PSOE) in
                                Permanent Magnet Synchronous Machines (PMSMs). By analyzing motor parameters
                                such as current, speed, voltage, and the number of poles, the platform ensures
                                precise predictions and real-time insights, enabling enhanced motor performance,
                                reduced downtime, and optimized system efficiency for developers and engineers.
                            </Typography>
                            <Grid item xs={5} md={2} style={{ marginTop: '20px' }}>
                                <Button fullWidth variant="contained"
                                    className={classes.button}
                                >
                                    Go to Documentation
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
            <Footer />
        </>
    );
}

export default Home;
