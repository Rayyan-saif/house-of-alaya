import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"The House Of Alaya | Women's, Men's & Jewellery Fashion Pakistan",description:"Shop contemporary women's fashion, men's clothing and jewellery in Pakistan from The House Of Alaya.",icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
