
import Navigation from "@/components/Navigation";
import "../globals.css";

export default function AdminLayout ({children}){
    return(
        <html>
            <body>
                <Navigation/>
                {children}
            </body>
        </html>
    )
}
// import Navigation from "@/components/Navigation";
// import "../globals.css";


// export default function RootLayout({ children }) {
//   return (
//     <html>
//       <body>
//         {/* <h1>Hello layout</h1> */}
//         <Navigation/>
//         {children}
//       </body>
//     </html>
//   );
// }
