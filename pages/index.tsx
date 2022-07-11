import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Carrousel from 'components/carrousel'
import Footer from 'components/footer';
import { Container, Divider, Grid, Typography } from '@mui/material'
import image from 'imgs/jackOseaOprey.jpg'

const Home: NextPage = () => {
  return(<>
  <Carrousel/>
<Grid container spacing={2} className={styles.container}>

<Typography
            variant="subtitle1"
            noWrap
            component="div"
            align="left"
            >
              Venta de Temporada
          </Typography>
          <Typography
            variant="subtitle2"
            noWrap={false }
            paragraph
            component="div"
            align="left"
            >
              Compra ahora
          </Typography>
          <Grid container columns={{ xs: 12, sm: 12, }} columnSpacing={{xs: 12, sm: 10, md: 20 }}>
            <Grid item xs={12} sm={6} md={6} >
              <Grid className={styles.grid}>
<div>

              <Image src={image} alt="leather jacket"/>
              <Container className={styles.container_card}>

            <Typography
            variant="subtitle2"
            noWrap
            component=""
            align="left"
            >
              Zapatos
          </Typography>
              </Container>
              </div>
              </Grid>
            </Grid>
            <Grid  item xs={12} sm={6} md={6} >
            <Image src={image} alt="leather jacket"/>

            <Typography
            variant="subtitle2"
            noWrap
            component="div"
            align="left"
            >
              Chaquetas
          </Typography>
            </Grid>

          </Grid>
            </Grid>
            <Divider/>
  </>);
}

export default Home

/*
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
*/