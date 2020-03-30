/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box } from "theme-ui";
import { Grid } from "theme-ui";
import { Image } from "theme-ui";

const Columns = props => (
  <Grid gap={5} columns={[1, 1, 2]}>
    <Box>{props.column.copy}</Box>
    <Image src={props.column.image} />
  </Grid>
);

export default Columns;
