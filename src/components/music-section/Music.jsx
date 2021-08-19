import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import pic4 from "../../assets/pic4.jpg";
import pic5 from "../../assets/pic5.jpg";
import pic6 from "../../assets/pic6.jpg";

const spLink1 = "https://open.spotify.com/album/5xtzQs1x67SuFElEAX20Sp?si=qZNYceBBSACdWrkOv0Yc6g&dl_branch=1";
const spLink2 = "https://open.spotify.com/album/6ewUdPpWXOFfqPV5AykWNY?si=-tNIYVdiT4yJwLHHXiACEQ&dl_branch=1";
const spLink3 = "https://open.spotify.com/album/3z89Mzndybk3qeSeDFCy7A?si=0_VXLLNNTheMEXEQYpqIMQ&dl_branch=1";
const spLink4 = "https://open.spotify.com/album/6m34FXKKGmCeZvrVRJ31rI?si=g4WKX8b6Sum4GTPRllsniQ&dl_branch=1";
const spLink5 = "https://open.spotify.com/album/66vE5FNbV86DG4syyJgbUo?si=cejpnyXXTpuRpAsgExNc5A&dl_branch=1";
const spLink6 = "https://open.spotify.com/album/3CRO7IoODEuUU6DU421p3U?si=2mGHS3MWQe2JQA7gJdY3XA&dl_branch=1";

const apLink1 = "https://music.apple.com/us/album/ask-4-single/1553144194";
const apLink2 = "https://music.apple.com/us/album/faith-single/1547822819";
const apLink3 = "https://music.apple.com/us/album/fell-in-luv-chopped-n-%24crewed-chopped-single/1531037491";
const apLink4 = "https://music.apple.com/us/album/fell-in-luv-single/1547432208";
const apLink5 = "https://music.apple.com/us/album/one-am-freestyle-3-single/1509266629";
const apLink6 = "https://music.apple.com/us/album/insect-single/1547431443";

const ytLink1 = "https://youtu.be/HIN94iiQn3o";
const ytLink2 = "https://youtu.be/detXY9npFPk";
const ytLink3 = "https://youtu.be/4dliJjS5iXU";
const ytLink4 = "https://youtu.be/1DRfi3XiJLw";
const ytLink5 = "https://youtu.be/aSIfC3C82xI";
const ytLink6 = "https://youtu.be/WMzZIZ3AiuU";




const useStyles = makeStyles({
    root: {
      minWidth: 200,
    },
    media: {
        height: 250,
        paddingTop: '56.25%', // 16:9
      },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
  export default function OutlinedCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
        <Grid container spacing={3}>  
            <Grid item xs={12} sm={6} md={4} lg={4}> 
                <Card className={classes.root} variant="outlined">
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Ask 4
                </Typography>
                <CardMedia className={classes.media} image={pic1} />
                </CardContent>
                <CardActions>
                <Button size="small" href={spLink1}>Spotify</Button>
                <Button size="small" href={apLink1}>Apple Music</Button>
                <Button size="small" href={ytLink1}>Youtube</Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}> 
                <Card className={classes.root} variant="outlined">
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Faith
                </Typography>
                <CardMedia className={classes.media} image={pic2} />
                </CardContent>
                <CardActions>
                <Button size="small" href={spLink2}>Spotify</Button>
                <Button size="small" href={apLink2}>Apple Music</Button>
                <Button size="small" href={ytLink2}>Youtube</Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}> 
                <Card className={classes.root} variant="outlined">
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Fell in Luv Chopped N $crewed
                </Typography>
                <CardMedia className={classes.media} image={pic3} />
                </CardContent>
                <CardActions>
                <Button size="small" href={spLink3}>Spotify</Button>
                <Button size="small" href={apLink3}>Apple Music</Button>
                <Button size="small" href={ytLink3}>Youtube</Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}> 
                <Card className={classes.root} variant="outlined">
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Fell in Luv
                </Typography>
                <CardMedia className={classes.media} image={pic4} />
                </CardContent>
                <CardActions>
                <Button size="small" href={spLink4}>Spotify</Button>
                <Button size="small" href={apLink4}>Apple Music</Button>
                <Button size="small" href={ytLink4}>Youtube</Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}> 
                <Card className={classes.root} variant="outlined">
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    ONE AM Freestyle &lt;3
                </Typography>
                <CardMedia className={classes.media} image={pic5} />
                </CardContent>
                <CardActions>
                <Button size="small" href={spLink5}>Spotify</Button>
                <Button size="small" href={apLink5}>Apple Music</Button>
                <Button size="small" href={ytLink5}>Youtube</Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}> 
                <Card className={classes.root} variant="outlined">
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                   Insect
                </Typography>
                <CardMedia className={classes.media} image={pic6} />
                </CardContent>
                <CardActions>
                <Button size="small" href={spLink6}>Spotify</Button>
                <Button size="small" href={apLink6}>Apple Music</Button>
                <Button size="small" href={ytLink6}>Youtube</Button>
                </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
  }
