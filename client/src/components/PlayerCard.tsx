import { Avatar, Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { Player } from "../interfaces/player";

export const PlayerCard = ({ name, image, class: _class, level, race, subclass }: Player) => {
  return (
    <Card
      sx={{
        textAlign: "center",
        borderRadius: 12,
        minWidth: 256,
        maxWidth: 500,
        minHeight: 256,
        maxHeight: 500,
      }}>
      <CardContent>
        <Avatar
          src={image}
          sx={{
            width: 60,
            height: 60,
            margin: "auto",
          }}
        />
        <Typography variant="h4">{name}</Typography>
        <span>{race}</span>
      </CardContent>
      <Divider />
      <Box display={"flex"}>
        <Box p={2} flex={"auto"}>
          <b>Class</b>
          <p>
            {_class}, {subclass}
          </p>
        </Box>
        <Box p={2} flex={"auto"}>
          <b>Level</b>
          <p>{level}</p>
        </Box>
      </Box>
    </Card>
  );
};
