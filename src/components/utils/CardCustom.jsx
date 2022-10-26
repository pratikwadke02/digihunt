import {
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Check } from "@mui/icons-material";

const ListIemCustom = ({ itemtext }) => {
  return (
    <ListItem>
      <ListItemIcon>
        <Check />
      </ListItemIcon>
      <ListItemText primary={itemtext} />
    </ListItem>
  );
};

const CardCustom = ({ title, content }) => {
  return (
    <Grid
      item
      component={Card}
      sx={{ bgcolor: "background.default" }}
      minWidth='300px'
      maxWidth='500px'
      p='1em'
      raised>
      <CardContent>
        <Typography variant='h2' fontWeight='bold'>
          {title}
        </Typography>
        <List>
          {content.map((c, i) => (
            <ListIemCustom key={i} itemtext={c} />
          ))}
        </List>
      </CardContent>
    </Grid>
  );
};

export default CardCustom;
