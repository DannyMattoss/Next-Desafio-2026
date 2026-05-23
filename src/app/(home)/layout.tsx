import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>    
        <Navbar/>
        <div>
            {children}
        </div> 
        <Footer/>
    </div>
          
  );
}
