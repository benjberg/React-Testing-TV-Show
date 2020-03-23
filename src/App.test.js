import React from 'react';
import {render, fireEvent,wait} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {fetchShow as mockFetchShow} from './api/fetchShow';

import Episodes from './components/Episodes';
import App from './App';
import MockData from './api/MockData';

test('app renders initially', ()=>{
    render(<App/>);
});

test('app renders seasons on click', async () =>{
const {getByTestId, getByText} = render(<App/>);
await wait(()=>{
    getByText(/select a season/i);
});
const dropDown=getByText(/select a season/i);
userEvent.click(dropDown);
const text= getByText(/season 1/i);
expect(text).toBeInTheDocument();
userEvent.click(text);
getByText(/season 1, episode 1/i);
})


