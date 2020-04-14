
interface TechObject{
  title: string
  experience: number
}

interface CreateUserData{
  name?: string // a ? indica que o paremetro é opcional
  email: string
  password: string
  techs: Array<string | TechObject>
}


export default function CreateUser({name= '', email, password, techs}: CreateUserData){
  const user = {
    name,
    email,
    password,
    techs
  }

  return user
}