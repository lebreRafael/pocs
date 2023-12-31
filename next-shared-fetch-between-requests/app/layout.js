export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
 
export default async function RootLayout({ children }) {
  const response = await fetch('http://localhost/');
  const pokemons = await response.text();
  return (
    <html lang="en">
      <body>{children}<div>{pokemons}</div></body>
    </html>
)
}
