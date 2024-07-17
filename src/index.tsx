import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/index.css";
import { RecoilRoot } from "recoil";
import { RouterProviderComponent } from "./providers/router-provider";
import ToastContainer from "@/components/common/ToastContainer";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/graphql/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <ApolloProvider client={apolloClient}>
      <ToastContainer />
      {/* rebld 07-13-2024 */}
      <RouterProviderComponent />
    </ApolloProvider>
  </RecoilRoot>
);
