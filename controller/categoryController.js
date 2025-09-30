
import asyncHandler from "express-async-handler";
import prisma from "../config/prismaClient.js";
import { cloud_upload } from "../utils/cloud.js";

/**
 * @method GET /get all category
 * @endpoing /api/v1/category endpoing=category
 */
export const get_allCategory = asyncHandler(async (req, res) => {

    const allData = await prisma.category.findMany()
    res.status(200).json(allData)
})

/**
 * @method GET/ for get single category
 * @endpoing /api/v1/category 
 */
export const get_singleCategory = asyncHandler(async (req, res) => {
    const { id } = req.params

    const singleData = await prisma.category.findUnique({
        where: { id }
    })
    res.status(200).json(singleData)
})

/**
 * @method POST / brand or categroy create
 * @endpoing /api/v1/category
 */
export const create_category = asyncHandler(async (req, res) => {
    /**use cloudinary=cloud_upload function for image uplaod */
    const file_data = await cloud_upload(req.file.path);
    
    const makeData = await prisma.category.create({
        data: { ...req.body, photo: file_data.secure_url }
    })
    res.status(201).json(makeData)
})

/**
 * @method PUT_PATCH/ brand or category update catch by single data id
 * @endpoing /api/v1/category
 */
export const update_category = asyncHandler(async (req, res) => {
    const { id } = req.params

    const updateData = await prisma.category.update({
        where: { id },
        data: { ...req.body }

    })

    res.status(200).json(updateData)

})

/**
 * @method DELETE/ brand or category data delete catch by single data id
 * @endpoing /api/v1/category
 */
export const delete_category = asyncHandler(async (req, res) => {
    const { id } = req.params
    const deleteData = await prisma.category.delete({
        where: { id }
    })
    res.status(200).json(deleteData)
})