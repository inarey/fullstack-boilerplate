import Navbar from "./components/common/Navbar";
import TopBanner from "./components/common/TopBanner";

function App() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <div className="flex flex-row bg-brand-50 mx-auto">Main content here</div>
    </>
  );
}

export default App;
