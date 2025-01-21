import React, { useState } from 'react';
import { Grid, Typography, Button, List, ListItem, InputBase } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import image from '../assests/images/NeuralNetwork.png'
import useStyles from '../assests/useStyles';
import axios from 'axios';

function Home() {
    const classes = useStyles();
    const [vd, setVd] = useState('');
    const [vq, setVq] = useState('');
    const [psoeValue, setPsoeValue] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handlePredictPSOE = async () => {
        setErrorMessage(''); // Clear previous errors
        try {
            const response = await axios.post('http://127.0.0.1:5000/predict', {
                Vd: parseFloat(vd),
                Vq: parseFloat(vq),
            });
            setPsoeValue(response.data.prediction || 'N/A');
        } catch (error) {
            setErrorMessage('Error predicting PSOE. Please check your inputs or try again later.');
        }
    };

    return (
        <>
            <Header />
            <Grid container direction="column" style={{ padding: '30px 120px' }}>

                <Grid item xs={12}>
                    <Grid
                        container
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}
                    >
                        <Grid item xs={6} md={6}>
                            <Typography variant="body1">
                                Analysis of <span style={{ color: 'red', fontWeight: 'bold' }}>Position Sensor Offset Error (PSOE)</span> <br />
                                in Permanent Magnet Synchronous Machines (PMSMs)
                            </Typography>
                            <div style={{ margin: '50px 0' }}></div>
                            <Typography>
                                <span style={{ color: '#5B57D2', fontSize: '30px' }}>MotorMind </span>
                                <br />
                                for enhanced <br />
                                PMSM Performance
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <img
                                src={image}
                                alt="MotorMind"
                                style={{ width: '40%', height: 'auto', objectFit: 'contain' }}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                {/* Input Fields for Vd and Vq */}
                <Grid container spacing={2} style={{ padding: '40px 0px 10px 0px', display: 'flex', alignItems: 'center' }}>
                    <Grid item xs={6} md={3}>
                        <InputBase
                            className={classes.textFeild}
                            type="text"
                            placeholder="Enter Vd"
                            value={vd}
                            onChange={(e) => setVd(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <InputBase
                            className={classes.textFeild}
                            type="text"
                            placeholder="Enter Vq"
                            value={vq}
                            onChange={(e) => setVq(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Button
                            fullWidth
                            variant="contained"
                            className={classes.button}
                            onClick={handlePredictPSOE}
                        >
                            Predict PSOE
                        </Button>
                    </Grid>
                </Grid>

                {/* Display PSOE Value */}
                {psoeValue !== null && (
                    <Grid container spacing={2} style={{ marginTop: '20px' }}>
                        <Grid item xs={6} md={4}>
                            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                Predicted PSOE Value: {psoeValue}
                            </Typography>
                        </Grid>
                    </Grid>
                )}

                {/* Display Error Message */}
                {errorMessage && (
                    <Grid container spacing={2} style={{ paddingBottom: '20px'}}>
                        <Grid item xs={6} md={6}>
                            <Typography variant="body1" style={{ color: 'red' }}>
                                {errorMessage}
                            </Typography>
                        </Grid>
                    </Grid>
                )}

                {/* Conditions */}
                <Grid item xs={12}>
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

                {/* About Section */}
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
            </Grid>
            <Footer />
        </>
    );
}

export default Home;
