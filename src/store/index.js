import { getItems } from "../api/items"

const items = []
let currentItem = {}
export const getReady = new Promise((resolve, reject) => {
  getItems
    .then((data) => data.forEach((i) => items.push(i)))
    .then(() => { currentItem = items[0] })
    .then(resolve)
    .catch(reject)
})

export function getItem (password) {
  console.log("hrmm?", items)
  if (!password) {
    return currentItem
  }
  let match = items.findIndex(
    (item) => item.password.toLowerCase() === password.toLowerCase()
  )
  if (match !== -1) {
    currentItem = items[match]
  }
  return currentItem
}
