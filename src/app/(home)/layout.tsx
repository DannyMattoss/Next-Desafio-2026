import Navbar from "@/src/components/navbar";

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
    </div>
          
  );
}
