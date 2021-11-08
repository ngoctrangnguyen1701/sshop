import React from "react"
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import { useRouter } from "next/dist/client/router"

const ShopItem = (props: any) => {
  const { id, name, avatar, coverImage, description, registerDate } = props
  const router = useRouter()

  const onClick = () => router.push('/detail/' + id)
  return (
    <Grid item md={6} xl={3} onClick={onClick}>
      <Card sx={{ maxWidth: 345, boxShadow: 6, borderRadius: 5 }}>
        <CardHeader
          avatar={<Avatar src={avatar} alt={name} />}
          title={name}
          subheader={registerDate}
        />
        <CardMedia
          component="img"
          height="194"
          image={coverImage}
          alt={name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ShopItem;
