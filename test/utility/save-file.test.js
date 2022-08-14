import { expect } from '@esm-bundle/chai'
import saveFile from '../../src/utility/save-file'
import { stub } from 'sinon'

it("Given I call the save file utility when I pass content as a string, a string filename, and content type of a 'text/plain' then it should write a file with the name as the filename and the content in the file as plain text.", () => {
  const content = 'Hello World'
  const fileName = 'hello-world.txt'
  const contentType = 'text/plain'

  let isClicked = false
  /** @type HTMLAnchorElement */
  const createElementResponse = {}
  createElementResponse.click = () => {
    isClicked = true
  }

  stub(document, 'createElement').returns(createElementResponse)

  saveFile(content, fileName, contentType)
  expect(isClicked).to.be.true
  expect(createElementResponse.download).to.be.eq(fileName)
  expect(createElementResponse.href.length).to.be.eq(
    URL.createObjectURL(new Blob([content], { type: contentType })).length
  )
})
