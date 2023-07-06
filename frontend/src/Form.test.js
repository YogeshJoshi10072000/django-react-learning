import { render, screen, cleanup,fireEvent,waitFor } from "@testing-library/react";
 import { BASE_URL,fetchUsers } from "./utils";
// Importing the jest testing library
import '@testing-library/jest-dom'
import axios from 'axios';
import userEvent from '@testing-library/user-event';
jest.mock('axios');
import axiosMock from 'axios'
import Form from './Form' ;

afterEach(() => {
    cleanup();
})


describe("form element rendering and input test ", () => {
 
// // Test 1
test('render email and password input', () => {
    render(<Form />);
 
    const inputEl = screen.getByTestId('email');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");

  const input2=screen.getByTestId('password');
  expect(input2).toBeInTheDocument();
  expect(input2).toHaveAttribute("type","password");

  });
 

  test('pass valid email to test email input field', () => {
    render(<Form />);
 
    const inputEl = screen.getByTestId("email");
 
    userEvent.type(inputEl, "test@mail.com");
 
    expect(screen.getByTestId("email")).toHaveValue("test@mail.com");


  const input2=screen.getByTestId("password");
  userEvent.type(input2,"dummy-password");
  expect(screen.getByTestId("password")).toHaveValue("dummy-password");

 

    
  });

  test('increment counter event testing ',async ()=>{

    const { getByTestId }=render(<Form />);

    fireEvent.click(getByTestId('button-up'))

    expect(getByTestId('counter')).toHaveTextContent('1')
  });

  test('decrement counter event testing ',async ()=>{

    const { getByTestId }=render(<Form />);  
    
        fireEvent.click(getByTestId('button-down'))
    
        expect(getByTestId('counter')).toHaveTextContent('-1')
      });
    
      test('async button testing ',async ()=>{

        const { getByTestId, getByText }=render(<Form />);  
        
            fireEvent.click(getByTestId('button-async'))
        
            const counter = await waitFor(() => getByText('1')) 

            expect(counter).toHaveTextContent('1')

          });


  
})

describe('postData', () => {
    it('loading show ', async () => {
      render(<Form />);  
      const content=screen.getByTestId ('fetchdata');
      // expect(content).toHaveValue('Loading...');
      
  });
}
)
  
  
  
  
  
  