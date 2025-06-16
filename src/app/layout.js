import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "الباب الخيري | جمع الملابس والأثاث المستعمل",
  description: "مشروع الباب الخيري يعمل على جمع الملابس والأحذية والأوراق والحقائب والكتب والأثاث وإعادة تدويرها لصالح الجمعيات الخيرية المتعاقد معها",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

