import React, { useContext } from "react"
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
import Button from '@mui/material/Button'
import { useRouter } from "next/dist/client/router"
import { refreshDataGlobal } from '../../common/redux'
import { ColorThemeContext } from "../contexts/ColorThemeContext"

const ShopItem = (props: any) => {
  const {colorTheme} = useContext(ColorThemeContext)
  const { id, name, avatar, coverImage, description, registerDate } = props
  const router = useRouter()

  const onClick = () => {
    router.push('/detail/' + id)
    refreshDataGlobal()
  }
  return (
    <Grid item md={6} lg={3}>
      <Card sx={{ boxShadow: 6, borderRadius: 5 }}>
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
          <Button
            variant="contained" 
            onClick={onClick}
            className="d-block ms-auto"
            style={{backgroundColor: colorTheme.color}}
          >
          Watch detail</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ShopItem;
