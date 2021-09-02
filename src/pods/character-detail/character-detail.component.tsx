import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Character } from './character-detail.vm';

interface Props {
  char: Character;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 'auto',
  },
  media: {
    height: 300,
  },
  item: {
    marginBottom: '4px',
  },
  label: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginRight: '4px',
  },
});

export const CharacterDetail: React.FC<Props> = props => {
  const { char } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={char.image}
          title={char.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {char.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.item}
          >
            <span className={classes.label}>Id:</span> {char.id}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.item}
          >
            <span className={classes.label}>Location:</span> {char.locationName}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.item}
          >
            <span className={classes.label}>Status:</span> {char.status}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.item}
          >
            <span className={classes.label}>Gender:</span> {char.gender}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.item}
          >
            <span className={classes.label}>Species:</span> {char.species}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
