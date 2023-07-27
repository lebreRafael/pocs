



export default async function InnerServerComponent() {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('myData')
    }, 7000);
  });

  console.log(1111111111111, 'InnerServerComponent', data);
  return (
    <div>
      <div>InnerServerComponent</div>
      <span>data: {data}</span>
    </div>
  )
}