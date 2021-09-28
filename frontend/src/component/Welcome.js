import { Grid, Typography } from "@material-ui/core";
import homeimg from "./im1.jpeg";
const Welcome = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh",backgroundColor:'#939aca' }}
    >
      <Grid item style={{textAlign:'center'}}>
     
        <Typography variant="h4" style={{color:'#0d4b71'}}>Reshape Academia-Industry Partnership</Typography>
        <img src={homeimg} style={{display:'block',margin:'auto'}} alt="AcadConnect" width="300" height="300"/>
        <p style={{color:'#6f41d0'}}>Either sign-up as Industry or Academic Student</p>
        <p style={{color:'#6f41d0'}}>Industries could post the small projects/proof of concepts based on the latest technology in which
the industry is planning to work in upcoming years.</p>
<p style={{color:'#6f41d0'}}>Academic Students can apply to small projects/proof of concepts based on their interests. Help students to get insight about industry projects and work culture.</p>
      </Grid>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
