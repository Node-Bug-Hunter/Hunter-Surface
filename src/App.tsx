import Landing from "#pages/landing";
import { theme } from "#utils/theme.js";
import { CssBaseline, CssVarsProvider } from "@mui/joy";

function App() {
  return (
    <CssVarsProvider
      modeStorageKey="theme__mode"
      defaultMode="system"
      theme={theme}
    >
      <CssBaseline />
      <Landing />
    </CssVarsProvider>
  )
}

export default App;
