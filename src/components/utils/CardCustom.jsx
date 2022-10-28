import { Grid, Card, CardContent } from "@mui/material";

const CardCustom = ({ children, ...rest }) => {
  return (
    <Grid
      {...rest}
      className='card'
      item
      component={Card}
      sx={{ bgcolor: "background.default", color: "text.main" }}
      raised>
      <CardContent>{children}</CardContent>
    </Grid>
  );
};

export default CardCustom;
