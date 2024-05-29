import { Card, Divider, Stack, Typography } from "@mui/joy";

export default function Footer() {
  return (
    <Stack
      justifyContent={"center"}
      textAlign={"center"}
      mt={10}
    >
      <Divider sx={{ height: 2, bgcolor: "warning.400" }} />
      <Card
        variant="solid"
        sx={{ p: 2, borderRadius: 0, opacity: 0.8 }}
      >
        {/* ToDo: Add links with icons and about developer card */}
        <Typography>
          &copy; 2023-{new Date().getFullYear()} <b>Bug-Hunter</b>{" "}<br />
          <Typography fontSize={14}>All rights reserved</Typography>
        </Typography>
      </Card>
    </Stack>
  )
}
