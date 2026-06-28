import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="mb-6 text-6xl font-bold">
          Welcome to <span className="text-emerald-500">Timoks18</span>
        </h1>

        <p className="max-w-2xl text-xl text-slate-300">
          Software Engineer • Investor • Traveler • Food Lover
        </p>
      </main>
    </div>
  );
}

export default App;