function supportWebStorage() {
  if(typeof(Storage) !== "undefined") {
    return true
  }
  else {
    return false
  }
}

export function saveStoreOnCache(state) {
  if(!supportWebStorage()) {
    return
  }

  localStorage.loginToken = state.loginToken
  localStorage.loggingFail = state.loggingFail
  localStorage.signupFail = state.signupFail
  localStorage.loggingIn = state.loggingIn
}

export function readStoreOnCache(state) {
  if(!supportWebStorage()) {
    return
  }

  return {
    loginToken: localStorage.loginToken,
    loggingFail: localStorage.loggingFail,
    signupFail: localStorage.signupFail,
    loggingIn: localStorage.loggingIn
  }
}

export default {
  saveStoreOnCache: saveStoreOnCache,
  readStoreOnCache: readStoreOnCache
}