import InnerServerComponent from './inner-server-component';
import PaginationTrigger from './paination-trigger';
import store from './store';

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

export default function BatmanPage({searchParams}) {
  const { page = 1 } = searchParams;
  const [getValue, setValue] = store();
  console.log(1111111111, 'robin', page, getValue()?.currentTime);
  setValue({currentTime: (new Date).getTime()});
  console.log(1111111111, 'batman', page, getValue()?.currentTime);
 
  return (
    <div>
      {listperPage[page - 1].map((data) => {
        return (
          <div>{data.name}</div>
        );
      })}
      <PaginationTrigger currentTime={getValue()?.currentTime}/>
      <InnerServerComponent currentTime={getValue()?.currentTime}/>
    </div>
  )
}