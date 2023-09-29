import React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function CardWeek({title, array = []}) {
  return (
    <div> 
    {
      array !== 0 ?
            <Card
            sx={{ minWidth: 275 }}
            style={{ marginTop: "2px", borderColor: "#fff" }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {title}
              </Typography>
    
              {array.map((array, i) => (
                <Typography variant="body2" key={i}>
                  {array.woman}
                </Typography>
              ))}
            </CardContent>
          </Card>
     : <p>Sem dados</p>
  
  }

    </div>
  );
}
