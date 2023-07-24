

export default function CityPage({ params }) {
  console.log(11111111111, 'CityPage');
  return (
    <div>
      <h1>
        City: {params.city}
      </h1>
    </div>
  )
}