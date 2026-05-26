import { Inter} from "next/font/google";
import "./globals.css";
import LeftSideBar from "./components/LeftSideBar";
import RightMenu from "./components/RightMenu";
import Galaxy from "./components/ui/Galaxy";




const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});



export const metadata = {
  title: "nazmus-sakib-tunan.dev",
  description: "Personal portfolio website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      
     
      className={`${inter.className} h-full antialiased`}
    >
      <body className=" text-white bg-black">

       {/* Galaxy Background */}
        <div className="fixed inset-0 -z-10">
          <Galaxy
            mouseRepulsion={false}
            density={1.4}
            glowIntensity={0.4}
            saturation={0}
            hueShift={110}
            twinkleIntensity={0.3}
            rotationSpeed={0.05}
            repulsionStrength={6}
            autoCenterRepulsion={0}
            starSpeed={0.2}
            speed={0.6}
          />
        </div>
        
        
        {/* Container */}
        <div className="min-h-screen flex flex-col md:flex-row">

          {/* LEFT SIDEBAR */}
          <aside className="w-full md:w-[25%] md:fixed md:top-4 md:bottom-4 md:left-4 overflow-hidden">
            <LeftSideBar />
          </aside>

          {/* MAIN CONTENT */}
          <main className="w-full md:ml-[25%] md:mr-[15%] md:w-[60%] px-4 py-4">
            {children}
          </main>

          {/* RIGHT MENU */}
          <aside className="w-full md:w-[15%] md:fixed md:top-4 md:bottom-4 md:right-4  rounded-xl overflow-hidden">
            <RightMenu />
          </aside>

        </div>

      </body>
    </html>
  );
}