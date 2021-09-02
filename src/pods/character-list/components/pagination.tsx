import React, { useContext } from 'react';
import { CharactersContext } from 'core/providers';
import { makeStyles, Box } from '@material-ui/core';
import MuiPagination from '@material-ui/lab/Pagination';

interface Props {
  onChange: (page: number) => void;
}

const useStyles = makeStyles({
  root: {
    '& .MuiPagination-ul': {
      justifyContent: 'center',
      margin: '24px 0',
    },
  },
});

export const Pagination: React.FC<Props> = props => {
  const classes = useStyles();
  const { onChange } = props;
  const { pages } = useContext(CharactersContext);

  return (
    <Box mx={10}>
      <MuiPagination
        className={classes.root}
        count={pages}
        color="primary"
        showFirstButton
        showLastButton
        size="medium"
        boundaryCount={2}
        onChange={(event, page) => onChange(page)}
      ></MuiPagination>
    </Box>
  );
};
