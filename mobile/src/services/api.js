import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

export default api

/*
  android com emulador: adb reverse tcp:3333 tcp:3333    
*/