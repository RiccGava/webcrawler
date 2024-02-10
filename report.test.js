const { test, expect} = require('@jest/globals')
const {sorting, printReport} = require("./report.js")

test("verify sorting", () => {
    const input = {
        a:10, 
        b:2,
        c:4,
        d:3
    }
    const actual = sorting(input)
    const expected = [["a", 10],["c", 4],["d", 3],["b", 2]]
    expect(actual).toEqual(expected)
})

test("empty", () => {
    const input = {

    }
    const actual = sorting(input)
    const expected = []
    expect(actual).toEqual(expected)
})

