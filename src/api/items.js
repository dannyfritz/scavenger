import Tabletop from "tabletop"
import { spreadSheetUrl } from "../../config"

export const getItems = new Promise(function (resolve, reject) {
  Tabletop.init({
    key: spreadSheetUrl,
    callback: function (data, tabletop) {
      resolve(data)
    },
    simpleSheet: true,
  })
})
