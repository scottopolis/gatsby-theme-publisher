import config from "../../config"

export const createLocalLink = url => {
  console.log(config.wordPressUrl)
  if (`#` === url) {
    return null
  }
  let newUrl = url.replace(config.wordPressUrl, ``)
  console.log(newUrl)
  return newUrl
}
