export interface ProductProps {
    id: string,
    name: string,
    price: number,
    image: string,
    description: string,
    model: string,
    brand: string,
    SKUID: string,
    categoryID: string,
    createdAt: Date
    updatedAt: Date
    category: CategoryProps
}
export interface CategoryProps {
    id: string,
    name: string,
    createdAt: Date,
    updatedAt: Date
}