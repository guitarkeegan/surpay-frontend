import Link from 'next/link'
export default function Navbar({children}){
    return(
        <>
        <div>
          <ul className='flex justify-evenly' >
            <li><Link href="/">Home</Link></li>
            <li><Link href="/sign-up/company">Company Sign-up</Link></li>
            <li><Link href="/login/company">Company Login</Link></li>
            <li><Link href="/sign-up/user">User Sign-up</Link></li>
            <li><Link href="/login/user">User Login</Link></li>
            <li><Link href="/survey/create">Create Survey</Link></li>
            <li><Link href="/survey/take">Take Survey</Link></li>
          </ul>
        </div>
        <div>
            {children}
        </div>
        </>
    )
}