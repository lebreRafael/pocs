import InnerServerComponent from './inner-server-component';
import { Suspense } from 'react';

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
  console.log(1111111111111, 'BatmanPage');
 
  return (
    <div>
      {listperPage[page - 1].map((data) => {
        return (
          <div>{data.name}</div>
        );
      })}
      <Suspense fallback={<div>loading...</div>}>
        <InnerServerComponent/>
      </Suspense>
    </div>
  )
}