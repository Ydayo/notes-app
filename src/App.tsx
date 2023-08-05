import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import { Box } from "@mui/material";

function App() {
  return (
    <div>
      <Header />
      <Box style={{ padding: 20 }}>
        <CreateNote />
      </Box>
    </div>
  );
}

export default App;
