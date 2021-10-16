import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import PostArchive from './PostArchive'
import * as useFetch from '../hooks/useFetch'

describe('<PostArchive />',  () => {
  const testData ={
    'loading': false,
    'error': null,
    'data': [{'title': 'testTitle1', 'type': 'testCategory1', 'author': 'testAuthor1', 'date': 'testDate1'}, {'title': 'testTitle2', 'type': 'testCategory2', 'author': 'testAuthor2', 'date': 'testDate2'}]
  }

  test('table renders with expected content', async () => {
    const testTableRows = testData.data.map(item => `<tr><td>${item.title}</td><td>${item.type}</td><td>${item.author}</td><td>${item.date}</td></tr>`)
    const testTableContent = `<thead><tr><th>Title</th><th>Category</th><th>Author</th><th>Date</th></tr></thead><tbody>${testTableRows.join('')}</tbody>`

    const spy = jest.spyOn(useFetch, 'default')
    spy.mockReturnValue(testData)

    const component = render(<PostArchive />)
    const tableContent = component.container.querySelector('Table').innerHTML
    expect(tableContent).toBe(testTableContent)
    }
  )
})
