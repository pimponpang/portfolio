import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "堀内 浩｜ポートフォリオ",
  description: "堀内浩のポートフォリオ。仕組みをデザインする。20年以上のWeb制作経験を礎に、事業・技術・ユーザー体験をつなぐUI/UXデザイナー。",
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
