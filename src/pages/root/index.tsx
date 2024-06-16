import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import illustration from "../../assets/time-calculator.jpg"
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export function Welcome () {
  
  const navigate = useNavigate()
  const handleGoDatetime = useCallback(() => { navigate('/datetime') }, [])
  return <Grid container gap={2}>
    <Card onClick={handleGoDatetime}>
    <CardMedia
        component="img"
        height="100"
        image={illustration}
        alt="calendrier, sablier et boulier"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Calculatrice d'heure
        </Typography>
      </CardContent>
    </Card>
  </Grid>;
};

export default Welcome;
