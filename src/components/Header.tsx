import { Avatar, Button, IconButton, Stack, Typography, useColorScheme } from "@mui/joy";
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { SxProps } from "@mui/joy/styles/types";

const style: SxProps = {
  boxShadow: t => `rgba(${t.vars.palette.primary.lightChannel} / 0.2) 0 0 0 1px, rgba(6, 24, 44, 0.65) 0 2px 5px 0`,
  backgroundColor: t => `color-mix(in srgb, ${t.vars.palette.background.level1}, transparent 42%)`,
  backdropFilter: "blur(4px)",
  position: "sticky",
  top: 0,
}

export default function Header({ setLoginDrawerState }: { setLoginDrawerState: (open: boolean) => void }) {
  const { mode, setMode } = useColorScheme();
  
  return (
    <>
      <Stack
        justifyContent={"space-between"}
        direction={"row"}
        zIndex={100}
        sx={style}
        p={1}
      >
        <Stack direction="row" alignItems="center">
          <Avatar
            sx={{ width: 32, height: 32 }}
            src="/icon.png"
          ></Avatar>
          <Typography
            fontWeight={"bold"}
            fontSize={[18, 24]}
            level="h4"
            ml={0.5}
          >
            Bug-Hunter
          </Typography>
        </Stack>
        <Stack direction={"row"}>
          <IconButton
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            sx={{ borderRadius: "50px", mr: 1 }}
          >
            <Brightness4RoundedIcon />
          </IconButton>
          <Button
            onClick={() => setLoginDrawerState(true)}
            startDecorator={<LoginRoundedIcon />}
            variant="outlined"
          >
            Login
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
