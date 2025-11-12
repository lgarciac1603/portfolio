import Navbar from "../components/Navbar";
import { useLanguage } from "../hooks/useLanguage";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  const { t } = useLanguage();

  return (
    <div className="bg-neutral-950 text-white min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-20">{children}</main>
      <footer className="text-center py-6 text-neutral-500 text-sm border-t border-neutral-800">
        © {new Date().getFullYear()} Fernando — {t('footer.rights')}
      </footer>
    </div>
  );
}
