import Link from "next/link"

export default function Custom404(){
    return (
        <div>
            <h1>404 Unathorized to view this page</h1>
            <Link href={"/"}>Back to Homepage</Link>
        </div>
    )
}