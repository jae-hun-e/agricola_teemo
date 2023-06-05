import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import Layout from "@components/Share/Layout";

import Script from "next/script";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // enabled: false, // 쿼리 비활성화
      staleTime: 20 * 1000, // 리패칭 시간
      cacheTime: 10 * 60 * 1000, // 캐싱처리 시간
    },
  },
});

declare global {
  // Kakao 함수를 전역에서 사용할 수 있도록 선언
  interface Window {
    Kakao: any;
  }
}
export default function App({ Component, pageProps }: AppProps) {
  function kakaoInit() {
    // 페이지가 로드되면 실행
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    console.log(window.Kakao.isInitialized());
  }
  return (
    <RecoilRoot>
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        onLoad={kakaoInit}
      />
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
