const request = require('superagent')
const API_BASEURL = 'http://localhost:7071/api/MyHttpTrigger'
const main = async () => {
  const i =2
  const createData = async () => {
    const data = {name: 'abe'}
    return data
  }

  const requestPost = async (requestData) => {
    const url = API_BASEURL
    let res = null
    try {
      res = await request.post(url).query(requestData).send(requestData)
    } catch(e) {
      console.warn(e)
    }
    console.info('success', res.text)
    return
  }

  try {
    const data = await createData()
    await requestPost(data)
  } catch(e) {
    console.warn(e)
    throw e
  } finally {
  }
  return
}

const init = async () => {
}

const finish = async() => {

}

(async () => {
  try {
    await init()
    await main() 
    await finish()
  } catch(e) {
    console.warn(e)
  }
})()