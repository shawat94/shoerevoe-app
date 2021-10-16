import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ArchiveTable from './ArchiveTable'

describe('<ArchiveTable />',  () => {
  const testData = [{'title': 'testTitle1', 'type': 'testCategory1', 'author': 'testAuthor1', 'date': 'testDate1'}, {'title': 'testTitle2', 'type': 'testCategory2', 'author': 'testAuthor2', 'date': 'testDate2'}]

  test('search terms affect table content', () => {
    const testTableQueriedRow = `<tr><td>${testData[1].title}</td><td>${testData[1].type}</td><td>${testData[1].author}</td><td>${testData[1].date}</td></tr>`
    const testTableContent = `<thead><tr><th>Title</th><th>Category</th><th>Author</th><th>Date</th></tr></thead><tbody>${testTableQueriedRow}</tbody>`

    const component = render(<ArchiveTable data={testData} searchTerm='TestTitle2' />)
    const tableContent = component.container.querySelector('table').innerHTML
    expect(tableContent).toBe(testTableContent)
    }
  )
})
