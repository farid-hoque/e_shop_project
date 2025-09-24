

import asyncHandler from "express-async-handler";
import prisma from "../config/prismaClient.js";



/**
 * @method GET/getalldata
 * @endpoint /api/v1/brand
 */
export const getAlldata = asyncHandler(async (req, res) => {
    const data = await prisma.brand.findMany()

    res.status(200).json(data);
})

/**
 * @method GET/getsingledata
 * @endpoint /api/v1/brand/:id
 */
export const getSingledata = asyncHandler(async (req, res) => {
    const { id } = req.params
    const single_data = await prisma.brand.findUnique({
        where: { id }
    })

    res.status(200).json(single_data);
})

/**
 * @method POSt/create data
 * @endpoint /api/v1/brand/id-dorkar hoy na post method a data create  korte
 */
export const createData = asyncHandler(async (req, res) => {

    const create_data = await prisma.brand.create({

        data: req.body
    })

    res.status(200).json(create_data);
})

/**
 * @method PUT-PATCH/edit-single/multiple/update data
 * @endpoint /api/v1/brand/:id
 */
export const updateData = asyncHandler(async (req, res) => {
    const { id } = req.params
    const edit_data = await prisma.brand.update({
        where: { id },
        data: req.body,
    })

    res.status(200).json(edit_data);
})

/**
 * @method DELETE/delte data
 * @endpoint /api/v1/brand/:id(delete er somoy req-er body er dorkar hoy na id diaei kaz chole jai only id lage)
 */
export const deleteData = asyncHandler(async (req, res) => {
    const { id } = req.params
    const delete_data = await prisma.brand.delete({
        where: { id },

    })

    res.status(200).json(delete_data);
})