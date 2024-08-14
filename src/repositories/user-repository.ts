import { UserModel } from "../models/UserModel"


const database: UserModel[] = [
    {id: 1, name: "Pedro"},
    {id: 2, name: "Carol"},
    {id: 3, name: "Mariana"},
    {id: 4, name: "Fernando"},
    {id: 5, name: "Joana"},
    {id: 6, name: "Carlos"},
    {id: 7, name: "Ana"},
    {id: 8, name: "Lucas"},
    {id: 9, name: "Beatriz"},
    {id: 10, name: "João"}
]



export const getAllUsers = async(): Promise<UserModel[]>=>{
    return database
}

export const getUserById = async(id:number): Promise<UserModel | undefined>=>{
    return database.find((user) => user.id===id)
}

export const insertUser = async(user:UserModel)=>{
    database.push(user)
}


export const deleteUser = async(id:number)=>{
    const index = database.findIndex(u =>u.id === id)

    if(index!==-1){
        database.splice(index,1)
        return true
    }

    return false
}

export const findAndModifyUser = async(id:number, user:UserModel): Promise<UserModel | undefined>=>{
    const userIndex = database.findIndex(u=>u.id===id)

    if (userIndex!==-1) {
        database[userIndex] = user
    }
    return database[userIndex]
}