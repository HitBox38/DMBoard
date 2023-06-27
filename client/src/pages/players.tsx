import { Box, Divider, Grid, Typography } from "@mui/material";
import { players } from "../data/players";
import { PlayerCard } from "../components/PlayerCard";

export const PlayersPage = () => {
  return (
    <Box>
      <Typography variant="h1" sx={{ fontWeight: "bold", color: "primary.main" }}>
        You have {players.length} players!
      </Typography>
      <Divider />
      <br />
      {players?.length > 0 ? (
        <Grid container spacing={2}>
          {players.map((player) => (
            <Grid item>
              <PlayerCard {...player} key={player.id} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h2" sx={{ color: "warning.main", fontWeight: "bold" }}>
          No players here
        </Typography>
      )}
    </Box>
  );
};
