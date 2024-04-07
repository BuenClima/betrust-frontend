import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField
} from '@mui/material'
import { useSignIn } from 'react-auth-kit'
import { Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '@/app/store'
import Copyright from '@/components/Copyright/Copyright'

import useSignInForm, { SignInFormValues } from '../../hooks/useSignInForm'
import { signIn } from '../../services/authSlice'

/**
 * @description SignInForm component
 * @returns {JSX.Element} SignInForm component
 */
export const SignInForm = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const authSignIn = useSignIn()
  const { control, handleSubmit, errors } = useSignInForm()

  /**
   * @description Submit form
   * @param data - form data
   */
  const onSubmit = (data: SignInFormValues) => {
    console.log(data)
  }

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
      <Controller
        name="email"
        control={control}
        rules={{ required: 'Email is required' }}
        render={({ field: { onChange, value } }) => (
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            placeholder="Email"
            name="email"
            autoComplete="email"
            onChange={onChange}
            value={value}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{ required: 'Password is required' }}
        render={({ field: { onChange, value } }) => (
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            placeholder="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onChange}
            value={value}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        )}
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
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
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
  )
}

export default SignInForm
