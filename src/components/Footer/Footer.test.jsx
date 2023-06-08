import React from 'react'
import Footer from "./Footer"
import { render, screen } from '@testing-library/react'
import { Provider } from "react-redux"
import { store } from "../../store/store"


test('renders footer component', () => {
  const wrapper = render(
    <Provider store={store}>
      <Footer />
    </Provider>
  );

  expect(screen.getByText(/board/i).textContent).toBeTruthy();

});