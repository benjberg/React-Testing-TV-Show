import React from 'react';
import {render,  waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {fetchShow as mockfetchShow} from './api/fetchShow';
import App from './App';
import {mockData} from './api/MockData';
import { act } from 'react-dom/test-utils';



test("initial render ", () => {
  
    render(<App />);
  });

test('app renders seasons on click', async () =>{
   
const { getByText} = render(<App/>);
await waitFor(()=>{
    getByText(/select a season/i);
});
const dropDown=getByText(/select a season/i);
userEvent.click(dropDown);
const text= getByText(/season 1/i);
expect(text).toBeInTheDocument();
userEvent.click(text);
getByText(/season 1, episode 1/i);
})


