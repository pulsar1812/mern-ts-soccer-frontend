import { useAppSelector } from '../../app/hooks'
import { Container, Grid, Typography } from '@mui/material'

export default function GamesPage() {
  const { games } = useAppSelector((state) => state.games)

  return (
    <Container>
      <Grid container justifyContent='space-between' sx={{ mt: 5 }}>
        {games &&
          games.map((game) => (
            <Grid
              item
              key={game._id}
              xs={3}
              sx={{
                borderRadius: 2,
                m: 2,
                p: 3,
                backgroundImage:
                  'linear-gradient(90deg, rgb(12, 237, 147), rgb(13, 200, 220))',
                minHeight: 50,
                minWidth: 50,
              }}
            >
              <Typography variant='body1'>
                {game.name ? game.name : 'No name'}
              </Typography>
            </Grid>
          ))}
      </Grid>
    </Container>
  )
}
