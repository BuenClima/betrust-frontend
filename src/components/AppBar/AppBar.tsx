import AdbIcon from '@mui/icons-material/Adb'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar as AppBarMui,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material/'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * @description AppBar pages
 */
const pages = [
  { title: 'Tipsters', url: '/tipsters' },
  { title: 'Tips', url: '/tips' }
]

/**
 * @description AppBar settings
 */
const settings = [
  { title: 'Account', url: '/account' },
  { title: 'Logout', url: '/logout' }
]

/**
 *
 * @description AppBar component
 * @returns {JSX.Element} AppBar component
 */
export const AppBar = (): JSX.Element => {
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <>
      <AppBarMui position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters id="appBar" data-testid="toolbar">
            <AdbIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
              data-testid="logo-md"
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
              data-testid="logo-name-md"
            >
              Mr.Tipsters
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                data-testid="menu-icon"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
                data-testid="menu"
              >
                {pages.map((page) => (
                  <MenuItem
                    data-testid={`xs-menu-${page.title?.toLowerCase()}-button`}
                    key={page.title}
                    onClick={() => {
                      navigate(page.url)
                      handleCloseNavMenu()
                    }}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
              data-testid="logo-xs"
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
              data-testid="logo-name-xs"
            >
              Mr.Tipsters
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  data-testid={`menu-${page.title?.toLowerCase()}-button`}
                  key={page.title}
                  onClick={() => {
                    navigate(page.url)
                    handleCloseNavMenu()
                  }}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    fontSize: '1rem',
                    letterSpacing: '.1rem',
                    '&:hover': {
                      opacity: 0.8
                    }
                  }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings" data-testid="menu-tooltip">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                  data-testid="menu-user-button"
                >
                  <Avatar
                    alt="Avatar of the user"
                    src="https://i.pravatar.cc/300"
                    sx={{
                      border: '2px solid #fff',
                      width: 42,
                      height: 42,
                      '&:hover': {
                        opacity: 0.9
                      }
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                data-testid="menu-user"
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting.title}
                    onClick={handleCloseUserMenu}
                    data-testid={`menu-user-${setting.title.toLowerCase()}`}
                  >
                    <Button onClick={() => navigate(setting.url)}>
                      <Typography textAlign="center" textTransform="none">
                        {setting.title}
                      </Typography>
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBarMui>
      <Toolbar />
    </>
  )
}
export default AppBar
