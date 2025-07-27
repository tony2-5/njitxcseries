import { useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px'
}));

export default function AppAppBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: '2vh'
      }}
    >
      <Container maxWidth="lg" sx={{ 
        mt: '2.5vh'
      }}>
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-around', px: 0 }}>
            <Box sx={{ display: { xs: 'none', md: 'flex', gap: '2vw' } }}>
            {/* <Button 
              component={Link} 
              to="/" 
              sx={{ fontWeight: "bold" }} 
              variant="text" 
              color="primary" 
              size="medium"
            >
              Home
            </Button> */}
            <Button 
              component={Link} 
              to="/alumn-opener" 
              sx={{ fontWeight: "bold" }} 
              variant="text" 
              color="primary" 
              size="medium"
            >
              NJIT Alumni XC Opener
            </Button>
            <Button 
              component={Link} 
              to="/xc-invite" 
              sx={{ fontWeight: "bold" }} 
              variant="text" 
              color="primary" 
              size="medium"
            >
              NJIT XC Invitational
            </Button>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1, width: "100%", justifyContent: "center" }}>
            {/* Menu when display is small */}
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <span className='mr-4'>Open Menu</span>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuItem>
                  <Button 
                    component={Link} 
                    to="/" 
                    sx={{ fontWeight: "bold", width: "100%" }} 
                    variant="text" 
                    color="primary" 
                    size="medium"
                  >
                    Home
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button 
                    component={Link} 
                    to="/alumn-opener" 
                    sx={{ fontWeight: "bold", width: "100%" }} 
                    variant="text" 
                    color="primary" 
                    size="medium"
                  >
                    NJIT Alumni XC Opener
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button 
                    component={Link} 
                    to="/xc-invite" 
                    sx={{ fontWeight: "bold", width: "100%" }} 
                    variant="text" 
                    color="primary" 
                    size="medium"
                  >
                    NJIT XC Invitational
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
