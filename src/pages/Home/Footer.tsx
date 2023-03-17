import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

const Footer: React.FC<{}> = () => {
    return (
        <footer>
            <Box
                px={{sm: 10}}
                py={{sm: 10}}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} style={{ marginBottom: 16 }}>Customer Service</Box>
                            <Box>
                                <Link color="inherit">Contact Us</Link>
                            </Box>
                            <Box>
                                <Link color="inherit">FAQs</Link>
                            </Box>
                            <Box>
                                <Link color="inherit">Support</Link>
                            </Box>
                            <Box>
                                <Link color="inherit">Privacy Policy</Link>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} style={{ marginBottom: 16 }}>Account</Box>
                            <Box>
                                <Link color="inherit">Login</Link>
                            </Box>
                            <Box>
                                <Link color="inherit">Register</Link>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} style={{ marginBottom: 16 }}>About Us</Box>
                            <Box>
                                <Link color="inherit">Corporate Sales</Link>
                            </Box>
                            <Box>
                                <Link color="inherit">Corporate Sits</Link>
                            </Box>
                            <Box>
                                <Link color="inherit">Investors</Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box textAlign="center" pt={{sm: 10}} pb={{sm: 10}}>
                Group 4 &reg; {new Date().getFullYear()}
            </Box>
        </footer>
    )
}

export default Footer;