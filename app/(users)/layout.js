import Navigation from "@/components/Navigation";
import "../globals.css";
import {Roboto } from "next/font/google";
import { Work_Sans } from "next/font/google";

const roboto =  Roboto({
  subsets:["latin"]    //ye specific audience ke liye use hota hai
})

const workSans = Work_Sans({
  subsets:["latin"]
})


export default function RootLayout({ children }) {
  return (
    <html>
      <body className={workSans.className}>
        {/* <h1>Hello layout</h1> */}
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
