import Link from "next/link";

export default function Post({id, author, content, title}: {id: number, author: string, content: string, title: string}) {
    return (
        <li>
            <Link href={`/blog/post/${id}`}>{title}</Link>
            <p>{content} </p>
            <h4>by {author} </h4>
            <hr />
        </li>
    );
}

