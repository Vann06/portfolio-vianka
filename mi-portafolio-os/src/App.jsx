import HomeView from "./views/HomeView";
import ThemeToggle from "./components/ThemeToggle";
import { WindowProvider } from "./context/WindowContext";


function App() {
  return (
    <WindowProvider>
        <ThemeToggle />
        <HomeView />
    </WindowProvider>
  );
}

export default App;
