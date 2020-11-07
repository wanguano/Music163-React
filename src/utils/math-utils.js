export const getRandomNumber = num => {
  return Math.floor(Math.random() * num)
}

export const getFindIdIndex = (arr, findId) => {
  return arr.findIndex(song => song.id === findId)
}
