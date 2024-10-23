//import { posts } from '@/app/lib/posts';
import Post from '@/app/ui/component/posts/Post';
import { getPosts } from '@/app/lib/data';
import Link from 'next/link';

export default async function Page() {
    const posts = await getPosts();
    return (
        <>
            <h1 className="text-purple-800">Post</h1>
            <p>
                <br />
                <button className='bg-purple-500'><Link href={`post/insert`}>ADD</Link></button>
                <br /><br />
            </p>
           <ul>
                {posts?.map((value) => <Post key={value.id}  id={value?.id} title={value?.title} content={value?.content} author={value?.author} />)}
           </ul>
        </>
    )
}