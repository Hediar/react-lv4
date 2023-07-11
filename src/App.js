import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./shared/Router";
import GlobalStyle from "./styles/GlobalStyle";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router />
    </QueryClientProvider>
  );
};

export default App;
