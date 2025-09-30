
/**work on asynchandler for cathc any kind of error */
import asyncHandler from "express-async-handler";
import prisma from "../config/prismaClient.js";

/**Make different different controller */

/**
 * @at first GET METHOD CONTROLLER ->catch whole data
 * @api endpoing /api/v1/tag
 */
export const get_wholeTag = asyncHandler(async (req, res) => {

    const tagData = await prisma.tag.findMany()
    res.status(200).json(tagData);
})

/**
 * @at first GET METHOD CONTROLLER-> catch single data with single ID
 * @api endpoing /api/v1/tag
 */
export const get_singleDAta = asyncHandler(async (req, res) => {

    const { id } = req.params;
    const single_data = await prisma.tag.findUnique()
    res.status(200).json(single_data)
})

/**
 * @at first POST METHOD CONTROLLER->for user data create
 * @api endpoing /api/v1/tag
 * 
 */
export const post_data = asyncHandler(async (req, res) => {

    const createData = await prisma.tag.create({
        data: req.body
    })
    res.status(201).json(createData);
})

/**
 * @at first PUT OR PATCH METHOD CONTROLLER-> data update use cathc user id
 * @api endpoing /api/v1/tag
 * 
 */
export const pathc_data = asyncHandler(async (req, res) => {

    const { id } = req.params;
    const update_data = await prisma.tag.update();
    res.status(200).json(update_data);
})

/**
 * @at first DELETE METHOD CONTROLLER-> user data delete cathc user id
 * @api endpoing /api/v1/tag
 * 
 */
export const delete_data = asyncHandler(async (req, res) => {

    const { id } = req.params;
    const remove = await prisma.tag.delete();
    res.status(200).json(remove)
})