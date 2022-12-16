import Link from "next/link"

export default function Custom404(){
    return (
        <div style={{
            backgroundColor: "black",
            height: "800px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            flexDirection: "column",
            }}>
            <h1>404 Unathorized to view this page</h1>
            
            <Link href={"/"}>Back to Homepage</Link>
        </div>
    )
}