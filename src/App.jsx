import Loading from "./components/Loading";
import { useAuth } from "./hooks/use-auth";
import Router from "./routers/Router";

function App() {
  const { initialLoading } = useAuth();

  if (initialLoading) {
    return <Loading />;
  }

  return (
    <>
      <Router />
    </>
  );
}

export default App;
