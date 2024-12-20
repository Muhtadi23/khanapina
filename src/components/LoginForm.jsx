import { Box, Button, Grid, TextField } from '@mui/material';
import React from 'react';

const LoginForm = () => {
    return (
        <div className="w-full shrink-0 mx-auto">
            {/* <form className="p-6">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <div className="form-control mb-4">
                    <label className="label mb-2">
                        <span className="label-text font-medium">Email or Username</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email or username"
                        required
                    />
                </div>
                <div className="form-control mb-6">
                    <label className="label mb-2">
                        <span className="label-text  font-medium">Password</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div className="form-control mt-4">
                    <button
                        type="submit"
                        className="btn btn-primary w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition duration-300"
                    >
                        Login
                    </button>
                </div>
                <div className="text-center mt-4">
                    <p className="text-gray-500">
                        Don’t have an account?{' '}
                        <a href="/signup" className="text-blue-600 hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>
            </form> */}
            <Box
                sx={{
                    padding: "20px",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "5px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
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