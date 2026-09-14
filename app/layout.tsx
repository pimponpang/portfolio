import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "堀内 浩｜ポートフォリオ",
  description: "堀内浩のポートフォリオ。デジタルとリアルをつなぐサービス設計、UI/UX、ブランド、業務と運用のデザインを紹介します。",
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
