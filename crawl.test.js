const { test, expect } = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')

test("verify string", () => {
    expect(normalizeURL("https://blog.boot.dev/path/")).toBe("blog.boot.dev/path")
})