import SiteHeader from "./components/SiteHeader";
import PolicyContent from "./components/PolicyContent";
import ArticleContent from "./components/ArticleContent";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main className="max-w-[1100px] mx-auto px-6 pb-10">
        <h1 className="text-[20px] font-bold mt-2 mb-3">Escorts Affair Management</h1>
        <PolicyContent />
        <ArticleContent />
      </main>
      <SiteFooter />
    </div>
  );
}
