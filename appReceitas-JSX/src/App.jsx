import GlobalProvider from "./context/GlobalProvider";
import Path from "./path/Path";

function App() {
    return (
        <GlobalProvider>
                <Path />
        </GlobalProvider>
    );
}

export default App
