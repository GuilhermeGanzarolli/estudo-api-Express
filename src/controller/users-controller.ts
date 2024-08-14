import {Request, Response} from "express"
import { createUserService, getUserByIdService, getUserData, deleteUserService, updataUserService } from "../services/users-service"
import { noContent } from "../utils/http-helper"
import { UserModel } from "../models/UserModel"



export const getUsers = async (request:Request, response:Response)=>{
    try{

        const httpResponse = await getUserData()

        response.status(httpResponse.statusCode).json(httpResponse.body)
    }
    catch(err){
        
        console.log(err)
    }
}

export const getUserById = async (request:Request, response:Response)=>{
    let id = parseInt(request.params.id)
    const httpResponse = await getUserByIdService(id)
    response.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postUser = async (request:Request, response:Response)=>{

    const bodyValue = request.body

    const httpResponse = await createUserService(bodyValue)
    if(httpResponse){
        response.status(httpResponse.statusCode).json(httpResponse.body)
    }
}


export const deleteUser = async (request:Request, response:Response)=>{

    const id = parseInt(request.params.id)

    const httpResponse = await deleteUserService(id)

    response.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updateUser = async (request:Request, response:Response)=>{

    const id = parseInt(request.params.id)
    const bodyValue:UserModel = request.body

    const httpResponse = await updataUserService(id, bodyValue)

    
    response.status(httpResponse.statusCode).json(httpResponse.body)
    
}

