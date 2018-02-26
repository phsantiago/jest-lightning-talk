import sum from './sum'

describe("one plus two", () => {
  it("adds up to three", () => {
    expect(sum(1, 2)).toMatchSnapshot()
  })
})
