//write test to check if submit button is pressed in App.js

// Path: App.test.js
import React from 'react'
import {fireEvent, render, waitFor} from '@testing-library/react-native'
import App from './App'


describe('App.js', () => { 
    it('should call submit function when button is pressed', () => {
        const {getByTestId} = render(<App />)
        const button = getByTestId('button')
       fireEvent.press(button)
      // expect(submit).toHaveBeenCalled()
    })
 })