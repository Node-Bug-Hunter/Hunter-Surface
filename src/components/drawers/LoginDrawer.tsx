import { Button, Divider, Drawer, FormHelperText, IconButton, Input, Link, Stack, Typography } from '@mui/joy';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { useState } from 'react';

/**
 * Login Popup
 * Should be responsible for authentication
 */

type DataProp = {
  opened: boolean;
  setOpened: (opened: boolean) => void;
}

export default function LoginPopup({ opened, setOpened }: DataProp) {
  const [inputConfig, _setInputConfig] = useState([
    {
      kind: "email",
      visible: true,
      placeholder: "Enter your email",
      icon: <AlternateEmailRoundedIcon />
    },
    {
      visible: false,
      kind: "password",
      placeholder: "Enter OTP",
      icon: <PasswordRoundedIcon />,
    },
    {
      kind: "text",
      visible: false,
      icon: <CreateRoundedIcon />,
      placeholder: "Enter your name"
    }
  ]);
  
  return (
    <Drawer
      size='md'
      open={opened}
      variant='soft'
      anchor='right'
    >
      <Stack
        sx={{ px: 4, py: 3 }}
        justifyContent={"space-between"}
      >
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Typography
            level='h4'
            alignContent={"center"}
            sx={{
              flexGrow: 1,
              fontWeight: "bold"
            }}
          >
            Login / Register
          </Typography>
          <IconButton
            onClick={() => setOpened(false)}
            color='danger'
          >
            <HighlightOffRoundedIcon />
          </IconButton>
        </Stack>
        <Divider sx={{ m: 1 }} />
        {
          inputConfig.map(({ icon, placeholder, kind, visible }) => (
            visible && <Input
              key={kind}
              startDecorator={icon}
              sx={{ px: 2, py: 1, mt: 1 }}
              placeholder={placeholder}
              variant='outlined'
              type={kind}
            />
          ))
        }
        <Button
          sx={{ px: 2, py: 1, mt: 1 }}
          disabled={false}
          loading={false}
          variant='soft'
        >
          Send OTP
        </Button>
        <FormHelperText sx={{ px: 2, py: 1, mt: 1, textAlign: "center" }}>
          <Typography>
            By continuing, you agree to our&nbsp;
            <Link target="_blank" href="https://github.com/Node-Bug-Hunter/Bug-Hunter/blob/main/LICENSE">Terms of Service</Link>
          </Typography>
        </FormHelperText>
      </Stack>
    </Drawer>
  )
}
