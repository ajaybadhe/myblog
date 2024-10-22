import Link from "next/link";

export default function SideNav() {
    return (
        <div className="w-28">
            <Link href={'/'}>Home</Link>
            <br />
            <Link href={'/blog/posts'}>Posts</Link>
            
            <br />
            <Link href={'/blog/about'}>About Us</Link>
            <br />
            <Link href={'/blog/contact'}>Contact Us</Link>
            <br />
        </div>
    )
}