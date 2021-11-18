import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <Box>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            CA Todo
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <main id='main'>
                {children}
            </main>
        </div>
        
    );
};

type Props = {
    children: React.ReactChild | React.ReactChildren
}

export default Layout;