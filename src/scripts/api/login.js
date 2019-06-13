import axios from "axios"

async function login(email, password) {
  let response = await axios.post('/api/users/login', 
    {
      'identifier': email,
      'password': password
    })
  return response
}

export default login