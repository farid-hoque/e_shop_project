

import asyncHandler from "express-async-handler";
import prisma from "../config/prismaClient.js";
import { cloud_upload } from "../utils/cloud.js";



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
 * THis is the without multer create data sending on database
 * 
 * NExt sending data to database with use multer midlleware
 */
/*
export const createData = asyncHandler(async (req, res) => {

    console.log(req.body);
    return false;

    const create_data = await prisma.brand.create({

        data: req.body
    })

    res.status(200).json(create_data);
})
    */
export const create_multer_data = asyncHandler(async (req, res) => {
    // console.log(req.file);

    /**use cloudinary from clouduplaod function */
    const file_data = await cloud_upload(req.file.path);

    // return  false
    const create_data = await prisma.brand.create({
        data: {
            ...req.body,
            logo: file_data.secure_url

        }
    })

    res.status(201).json(create_data)
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