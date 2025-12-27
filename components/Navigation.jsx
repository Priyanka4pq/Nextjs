import Link from "next/link";

export default function Navigation(){
    return  (
    <header className="grid grid-cols-2">
        <div className="">Priyanka</div>
        <nav>
            <ul className="flex gap-2 justify-between">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/service">Service</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}