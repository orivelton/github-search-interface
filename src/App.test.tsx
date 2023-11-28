import React from 'react'
import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import App from './App'
import { successMock } from './helpers/tests/mock'
import { client } from './graphql'
import { ApolloProvider } from '@apollo/client'

describe('App component', () => {
  test('renders App component', () => {
    render(
      <ApolloProvider client={client}>
        <MockedProvider mocks={successMock}>
          <App />
        </MockedProvider>
      </ApolloProvider>,
    )

    expect(
      screen.getByRole('heading', {
        name: /github search interface/i,
      }),
    ).toBeVisible()
  })
})
