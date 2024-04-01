import prisma from '@/lib/prisma/prisma'
import { deleteProduct, getProductById, updateProduct } from '@/lib/prisma/product-prisma'
import { NextResponse } from 'next/server'

export const GET = async (req, { params }) => {
    const payload = await getProductById(params.proId)
    return NextResponse.json({
        message: `Product ID: ${params.proId} have been found succesfully`,
        payload,
        status: 201
    }, { status: 201 })
}

export const DELETE = async (req, { params }) => {

    const payload = await deleteProduct(params.proId);
    return NextResponse.json({
        massage: `Product ID: ${params.proId} have been deleted`,
        status: 200
    }, { status: 200 })
}

export const PUT = async (req, { params }) => {
    const body = await req.json();
    const payload = await updateProduct(params.proId, body);
    return NextResponse.json(
        {
            massage: `Product ID: ${params.proId} have been updated sucessfully`,
            payload,
            status: 200
        }, { status: 200 });
}