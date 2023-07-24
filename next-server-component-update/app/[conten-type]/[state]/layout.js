export default function DestinationLayout({ children, params }) {
  console.log(11111111111, 'DestinationLayout');
  return (
    <div>
      <h1>State: {params.state}</h1>
      {children}
    </div>
  )
}
