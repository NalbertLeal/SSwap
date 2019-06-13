import axios from "axios"

async function logout(accessToken) {
  let response = await axios.post('/api/users/logout', 
    {},
    {
      headers: {
        "Authorization": "Bearer " + accessToken
      }
    })
  return response
}

export default logout