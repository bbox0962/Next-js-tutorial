import React, { useEffect } from 'react'
import Link from "next/link";
import { useRouter } from "next/router"; 

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            //router.go(1);
            router.push('/')
        }, 3000)
    }, [])


    return (
        <div className="not-found">
            <h1>Access Denied</h1>
            <h2>Page Not Found</h2>
            <p><Link href="/"><a>Home</a></Link></p>
        </div>
    )
}

export default NotFound
