import { deleteProduct, getAllProduct, insertProduct } from "@/lib/prisma/product-prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
    const payload = await getAllProduct();
    return NextResponse.json(
        {
            message: " Product has been found successful !",
            payload,
            status: 200
        },
        { status: 200 });
};

export const POST = async (req) => {
    const body = await req.json();
    const payload = await insertProduct(body);
    return NextResponse.json(
        { message: "Data insert succesfylly", status: 201 },
        { status: 201 }
    );
};

