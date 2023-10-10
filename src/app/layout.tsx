import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBar from "./components/SideBar";
import { SessionProvider } from "./components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import Login from "./components/Login";
import ClientProvider from "./components/ClientProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "chatGpt-clone",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? (
            <Login/>
          ) : (
            <div className="flex">
              {/*SideBar*/}
              <div className="bg-[#202123] max-w-xs hidden md:block h-screen overflow-y-auto md:min-w-[20rem] ">
                <SideBar/>
              </div>
              
              {/*Client Provider - Notification */}
              <ClientProvider/>

              <div className="flex-1 bg-[#343541]">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
