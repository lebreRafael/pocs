export default function InnerServerComponent({currentTime}) {
  console.log(4444444444444, 'batman');

  return (
    <div>
      <div>InnerServerComponent</div>
      <span>time: {currentTime}</span>
    </div>
  )
}