import "./App.css";
import Details from "./components/Details/Details";
import PaginationDemo from "./components/PaginationDemo/PaginationDemo";
import DebounceSearchDemo from "./components/DebounceSearchDemo/DebounceSearchDemo";
function App() {
  return (
    <>
      <Details summary="Pagination" open>
        <PaginationDemo />
      </Details>
      <Details summary="Debounce Search">
        <DebounceSearchDemo />
      </Details>
    </>
  );
}

export default App;
