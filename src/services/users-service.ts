import { UserModel } from "../models/UserModel"
import { deleteUser, findAndModifyUser, getAllUsers, getUserById, insertUser } from "../repositories/user-repository"
import { badRequest, created, noContent, ok } from "../utils/http-helper"


export const getUserData = async () =>{
    const data = await getAllUsers()
    let res = null
    
    if (data) {
        res = await ok(data)
    }else{
        res = await noContent()
    }
    
    return res
}

export const getUserByIdService = async (id:number) =>{
    const data = await getUserById(id)
    let res = null
    if (data) {
        res = await ok(data)
    }else{
        res = await noContent()
    }

    return res
}

export const createUserService = async (user:UserModel)=>{
    let res = null
    if (Object.keys(user).length !==0) {
        await insertUser(user)
        res = await created()
    }else{
        res= await badRequest()
    }

    return res
}

export const deleteUserService = async (id:number)=>{
    let res = null
    const isDelited = await deleteUser(id)

    if (isDelited) {
        res = await ok({message:"deletado"})
    }else{
        res = await badRequest()
    }

    return res
}

export const updataUserService = async (id:number, user:UserModel)=>{
    let res = null
    const data = await findAndModifyUser(id, user)
    console.log(data)

    res = await ok(data)
    return res
}