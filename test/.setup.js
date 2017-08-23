const JSDOM = require("jsdom").JSDOM
const exposedProperties = ["window", "navigator", "document"]
const { window } = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`)
const { document } = window

global.document = document
global.window = window

Object.keys(document.defaultView).forEach(property => {
  if (typeof global[property] === "undefined") {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})

global.navigator = {
  userAgent: "node.js",
}

const documentRef = document
