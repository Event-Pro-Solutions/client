import MainLanding from "@/components/directory/MainLanding";
import { ViewportProvider } from "@/hook/useViewport";

export default function Home() {
  return (
    <ViewportProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-0 selection:bg-accent selection:text-neutral">
        <MainLanding />
      </main>
    </ViewportProvider>
  );
}
