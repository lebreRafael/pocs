import Link from "next/link";


export default function StatePage({ params }) {
  console.log(11111111111, 'StatePage');
  return <Link href={`/${params.contentType}/${params.state}/los-angeles`}>Los Angeles</Link>
}