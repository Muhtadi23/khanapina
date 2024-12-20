import { Box, Button, Grid, TextField } from '@mui/material';
import React from 'react';

const LoginForm = () => {
    return (
        <div className="w-full shrink-0 mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <Box
                sx={{
                    padding: "20px",
                    // backgroundColor: "#f5f5f5",
                    borderRadius: "5px",
                    // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    width: "400px",
                    margin: "0 auto",
                }}
            >
                <Grid container spacing={2} direction="column">
                    <Grid item xs={12}>
                        <TextField
                            label="username or email"
                            variant="outlined"
                            fullWidth
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="password"
                            variant="outlined"
                            fullWidth
                            type="password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{
                                textTransform: "none", // Keeps text as normal case
                                fontWeight: "bold",
                            }}
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default LoginForm;