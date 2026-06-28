import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-6xl font-bold leading-tight">
          Welcome to <span className="text-emerald-500">Timoks18</span>
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300">
          Software Engineer, Investor, Traveler and Food Lover.
        </p>
      </section>
    </MainLayout>
  );
}

export default App;