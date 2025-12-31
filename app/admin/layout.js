
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

