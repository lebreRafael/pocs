import PaginationTrigger from './paination-trigger';

const listperPage = [
  [
    {name: 'test 1'},
    {name: 'test 2'},
  ],
  [
    {name: 'test 3'},
    {name: 'test 4'},
  ],
]

export default function Batman({searchParams}) {
  const { page = 1 } = searchParams;
  console.log(1111111111, 'batman', page);
 
  return (
    <div>
      {listperPage[page - 1].map((data) => {
        return (
          <div>{data.name}</div>
        );
      })}
      <PaginationTrigger/>
    </div>
  )
}