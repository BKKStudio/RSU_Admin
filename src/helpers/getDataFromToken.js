import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";


export const getDataFromToken = (request) => {
    try {
        const token = request.cookies.get("token")?.value||''        
        
        const decode = jwt.verify(token,process.env.TOKEN_SECRET)
        return decode.id;
    } catch (error) {
        throw new Error(error.message)
    }
}