import { Grid, Typography } from '@mui/material'

import Footer from '@/components/Footer/Footer'
import { Layout } from '@/layouts/Layout'

/**
 * @description Home component
 * @returns {JSX.Element} Home component
 */
export const Home = (): JSX.Element => {
  return (
    <Layout>
      <>
        <Grid
          item
          xs={12}
          container
          sx={{
            backgroundImage: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.8),
            rgba(255, 255, 255, 0.9)
          ),url("https://picsum.photos/1200/300")`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            window: '100%',
            position: 'relative',
            height: `${window.innerHeight}px`
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Typography>Header1</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          container
          sx={{
            backgroundImage: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.8),
            rgba(255, 255, 255, 0.9)
          ),url("https://picsum.photos/1200/301")`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            window: '100%',
            position: 'relative',
            height: `${window.innerHeight}px`
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Typography>Header2</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          container
          sx={{
            backgroundImage: `linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.8),
                rgba(255, 255, 255, 0.9)
              ),url("https://picsum.photos/1200/302")`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            window: '100%',
            position: 'relative',
            height: `${window.innerHeight}px`
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Typography>Header3</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          container
          sx={{
            backgroundImage: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.8),
            rgba(255, 255, 255, 0.9)
          ),url("https://picsum.photos/1200/303")`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            window: '100%',
            position: 'relative',
            height: `${window.innerHeight}px`
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Typography>Header4</Typography>
        </Grid>
        <Footer />
      </>
    </Layout>
  )
}

export default Home
