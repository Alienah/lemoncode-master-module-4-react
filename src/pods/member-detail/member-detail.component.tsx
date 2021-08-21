import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Member } from './member-detail.vm';

interface Props {
  member: Member;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 'auto',
  },
  media: {
    height: 300,
  },
});

export const MemberDetail: React.FC<Props> = props => {
  const { member } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={member.avatarUrl}
          title={member.login}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {member.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Location: {member.location}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Id: {member.id}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="go to github page" color="primary">
          <a href={member.htmlUrl} target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
        </IconButton>
      </CardActions>
    </Card>
  );
};
