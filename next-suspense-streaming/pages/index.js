// import fs from 'fs';
import { Poppins } from 'next/font/google';
import HelloWorld from '../components/hello-world'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  adjustFontFallback: true,
});

export default function Home() {
  return (
    <div className={`app ${poppins.variable}`}>
      <HelloWorld />
    </div>
  )
}

// export const getServerSideProps = async () => {
//   return { props: JSON.parse(fs.readFileSync('/var/www/props.json', 'utf8'))};
// };