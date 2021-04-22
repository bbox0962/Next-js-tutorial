import Link from 'next/link'
import Image from "next/image";

const NavBar = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <Image src ="/pic 1.jpg" width={150} height={150} />
                </div>   
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/about"><a>About</a></Link>
                    <Link href="/gramps"><a>Gramps Pad</a></Link>
                
            </nav>
        </div>
    )
}

export default NavBar
