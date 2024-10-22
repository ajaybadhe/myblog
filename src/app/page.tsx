import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-4">
      <h1 className="text-purple-800 text-center font-bold">My Home Page</h1>
      <div className="text-center">
      <Image
        src="/images/web-design-technology-browsing-programming-concept.jpg"
        width={400}
        height={300}
        className="inline-block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      </div>
      <p>
      The Times of India, also known by its abbreviation TOI, is an Indian English-language daily newspaper and digital news media owned and managed by The Times Group. It is the fourth-largest newspaper in India by circulation and largest selling English-language daily in the world.
      The Times of India, also known by its abbreviation TOI, is an Indian English-language daily newspaper and digital news media owned and managed by The Times Group. It is the fourth-largest newspaper in India by circulation and largest selling English-language daily in the world.
      The Times of India, also known by its abbreviation TOI, is an Indian English-language daily newspaper and digital news media owned and managed by The Times Group. It is the fourth-largest newspaper in India by circulation and largest selling English-language daily in the world.
      
      </p>
      <div className="pt-4 text-center">
        <Link className="bg-blue-800 text-white p-2" href={'/blog/posts'}>Posts</Link>
      </div>
    </div>
  );
}
