export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export type ProductsState = {
    products: Product[];
    isLoading: boolean;
    error: string | null;
}