import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import Layout from "../components/Layout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // enabled: false, // 쿼리 비활성화
      staleTime: 20 * 1000, // 리패칭 시간
      cacheTime: 10 * 60 * 1000, // 캐싱처리 시간
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
