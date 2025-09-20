import Home from "./components/Home";
import Sparc from "./components/Sparc";
import AboutPage from "./components/Sparchome";



export default function HomePage({ searchParams }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
    
      <Sparc />
  <AboutPage/>
    </div>
  );
}
