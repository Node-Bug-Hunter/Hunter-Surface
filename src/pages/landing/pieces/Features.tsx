import { Box, Button, Card, Chip, Divider, IconButton, Input, Link, Snackbar, Stack, Typography } from "@mui/joy";
import HourglassEmptyRoundedIcon from '@mui/icons-material/HourglassEmptyRounded';
import CopyAllRoundedIcon from '@mui/icons-material/CopyAllRounded';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from "react";

export default function Features() {
  const [open, setOpen] = useState(false);
  
  const features = [
    "Realtime logs tracing",
    "Remote cluster monitoring",
    "Detailed contextual reports",
    "Manage microservice architecture",
    "Automated errors & bugs reporting",
    "And much more coming soon...",
  ];

  const flen = features.length;

  return (
    <Stack
      m={2}
      id="features"
      alignItems={"center"}
      justifyContent={"center"}
      height={"calc(100vh - 72px)"}
    >
      <Typography
        fontFamily={"monospace"}
        fontWeight={"bold"}
        fontSize={32}
        level="h3"
        mb={4}
      >
        Features
      </Typography>
      <Stack
        gap={2}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
        direction={["column", "row-reverse"]}
      >
        <Box>
          {
            features.map((feature, i) => (
              <Stack
                width={"fit-content"}
                direction={"row"}
                key={`f-${i}`}
                gap={1}
                mt={1}
                p={1}
                sx={{
                  "&:hover": {
                    borderTopLeftRadius: 20,
                    transition: "all 0.5s ease",
                    bgcolor: "background.level2"
                  }
                }}
              >
                {(i + 1 === flen) ? <HourglassEmptyRoundedIcon /> : <DoneAllRoundedIcon color="warning" />}
                <Typography>{feature}</Typography>
              </Stack>
            ))
          }
        </Box>
        <Card variant="soft" sx={{ p: 3 }}>
          <Typography level="title-md">
            Ready to give it a try?
          </Typography>
          <Input
            readOnly
            value={"npm i bug-hunter"}
            sx={{ fontFamily: "monospace" }}
            endDecorator={(
              <IconButton onClick={() => {
                  navigator.clipboard.writeText("npm i bug-hunter");
                  console.log("Copied to clipboard");
                  setOpen(true);
                }
              }>
                <CopyAllRoundedIcon />
              </IconButton>
            )} />
            <Snackbar
              onClose={() => setOpen(false)}
              autoHideDuration={3000}
              color="success"
              open={open}
            >
              <DoneAllRoundedIcon /> Command copied to clipboard
            </Snackbar>
            <Divider sx={{ my: 2 }}>
              <Chip variant="solid">OR</Chip>
            </Divider>
            <Typography level="title-md">
              Want to review us?
            </Typography>
            <Button startDecorator={<GitHubIcon />}>
              <Link href="https://github.com/Node-Bug-Hunter/Bug-Hunter" target="_blank" overlay />
              We are Open Source
            </Button>
        </Card>
      </Stack>
    </Stack>
  )
}
