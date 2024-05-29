import { AspectRatio, Box, Button, IconButton, Stack, Typography } from "@mui/joy";
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';

export default function Hero({ setLoginDrawerState }: { setLoginDrawerState: (open: boolean) => void }) {  
  return (
    <Stack
      justifyContent={"space-evenly"}
      height={"calc(100vh - 72px)"}
      sx={{ textWrap: "balance" }}
      alignItems={"center"}
      textAlign={"center"}
      m={2}
    >
      <Box>
        <Typography
          fontFamily={"monospace"}
          fontWeight={"bold"}
          fontSize={32}
          level="h3"
          mb={4}
        >
          Robust Process & Server Manager
        </Typography>
        <Stack
          gap={2}
          maxWidth={750}
          alignItems={["unset", "center"]}
          direction={["column-reverse", "row"]}
        >
          <Stack flexWrap={"wrap"} spacing={1}>
            <Typography>
              Eliminate bugs and errors from your deployments effortlessly, configure a secure auditing manager for robust protection.
              Maintain constant vigilance over your production server, and that's just the tip of an iceberg.
            </Typography>
            <Button
              endDecorator={<KeyboardArrowRightRoundedIcon />}
              sx={{ mx: "auto !important", width: 180 }}
              onClick={() => setLoginDrawerState(true)}
              variant="plain"
            >
              Get Started
            </Button>
          </Stack>

          {/* ToDo: Add auto-sliding image carousel */}
          <AspectRatio
            objectFit="contain"
            ratio={"18/11"}
            sx={{
              minWidth: 290,
              borderRadius: 5
            }}
          >
            {/* ToDo: Add images from new Dashboard */}
            <img
              alt="hero"
              src="/branding/hero.png" />
          </AspectRatio>
        </Stack>
      </Box>
      <Stack alignItems={"center"}>
        <Typography>Explore our jaw dropping features</Typography>
        <Typography>And yes it's all freeeee!!</Typography>
        <IconButton
          onClick={() => location.hash = "#features"}
          color="success"
          sx={{
            width: "min-content",
            animation: "upDown 0.8s ease alternate infinite",
            "@keyframes upDown": {
              "from": {
                "transform": "translateY(0)"
              },
              "to": {
                "transform": "translateY(50%)"
              }
            }
          }}
        >
          <KeyboardDoubleArrowDownRoundedIcon />
        </IconButton>
      </Stack>
    </Stack>
  )
}
