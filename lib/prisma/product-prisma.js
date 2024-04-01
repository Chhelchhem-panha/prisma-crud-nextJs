const { default: prisma } = require("./prisma")

export const getAllProduct = async () => {
    const payload = prisma.product.findMany();
    return payload;
};

export const insertProduct = async (proData) => {
    const price = parseFloat(proData['price'])
    const rating = parseFloat(proData.rating)

    const payload = prisma.product.create({
        data: {
            product_name: proData['product_name'],
            quote: proData.quote,
            description: proData.description,
            price: price,
            image: proData.image,
            rating: rating,
        }
    });
    return payload;
}

export const getProductById = async (proId) => {
    const productId = parseInt(proId)
    const payload = prisma.product.findUnique({
        where: {
            id: productId
        }
    })

    return payload;

}

export const deleteProduct = async (proId) => {
    const productId = parseInt(proId)
    const payload = await prisma.product.delete({
        where: {
            id: productId
        }
    })

    return payload;
}

export const updateProduct = async (proId, newProduct) => {
    const productId = parseInt(proId);
    const price = (newProduct['price'])
    const rating = (newProduct.rating)

    const payload = await prisma.product.update({
        where: {
            id: productId,
        },
        data: {
            product_name: newProduct['product_name'],
            quote: newProduct.quote,
            description: newProduct.description,
            price: price,
            image: newProduct.image,
            rating: rating,
        }
    })

    return payload;
}