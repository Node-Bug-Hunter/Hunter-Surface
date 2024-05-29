import FAQ from "./pieces/FAQ";
import { Stack } from "@mui/joy";
import Hero from "./pieces/Hero";
import { useState } from "react";
import Features from "./pieces/Features";
import Header from "#components/Header.js";
import Footer from "#components/Footer.js";
import LoginPopup from "#components/drawers/LoginDrawer.js";

export default function Landing() {
  const [loginDrawerState, setLoginDrawerState] = useState(false);
  const state = { setLoginDrawerState };

  return (
    <>
      <LoginPopup
        opened={loginDrawerState}
        setOpened={setLoginDrawerState} />
      <Header {...state} />
      <Stack
        justifyContent={"space-between"}
      >
        <Hero {...state} />
        <Features />
        <FAQ />
        <Footer />
      </Stack>
    </>
  );
}
