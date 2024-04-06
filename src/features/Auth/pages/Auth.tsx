import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography, { TypographyProps } from '@mui/material/Typography'
import * as React from 'react'
import { useSignIn } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '@/app/store'
import { signIn } from '@/features/Auth/services/authSlice'

/**
 * @description CopyRight component
 * @param {TypographyProps} props - props
 * @returns {JSX.Element} CopyRight component
 */
const Copyright = ({ ...props }: TypographyProps): JSX.Element => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        BETRUST
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

/**
 * @description SignIn component
 * @returns {JSX.Element} SignIn component
 */
export const SignIn = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const authSignIn = useSignIn()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password')
    })
  }

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        container
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={() => {
                const user = {
                  id: '1',
                  email: 'user@email.com',
                  name: 'User',
                  role: {
                    id: 1,
                    name: 'user'
                  }
                }
                dispatch(
                  signIn({
                    token: '123',
                    user
                  })
                )
                authSignIn({
                  token: '123',
                  tokenType: 'Bearer',
                  expiresIn: 3600,
                  authState: user
                })
                navigate('/')
              }}
            >
              Sign In User
            </Button>
            <Button
              onClick={() => {
                const user = {
                  id: '1',
                  email: 'tipster@email.com',
                  name: 'Tipster',
                  role: {
                    id: 1,
                    name: 'tipster'
                  }
                }
                dispatch(
                  signIn({
                    token: '123',
                    user
                  })
                )
                authSignIn({
                  token: '123',
                  tokenType: 'Bearer',
                  expiresIn: 3600,
                  authState: user
                })
                navigate('/')
              }}
            >
              Sign In Tipster
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => navigate('/tipsters')}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default SignIn
