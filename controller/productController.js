
import asyncHandler from "express-async-handler"
import prisma from "../config/prismaClient.js"

/**
 * @method GET 
 * 
 */
export const get_allproduct = asyncHandler(async (req, res) => {
    const data = await prisma.product.findMany({
        /**include er fole product wise brand chole asbe */
        include: {
            brand:true
        }
    });
    res.status(200).json(data)
})
/**
 * @method POST 
 * 
 */
export const createProduct = asyncHandler(async (req, res) => {
    const makeData = await prisma.product.create({
        data: req.body
    })
    res.status(201).json(makeData);
})