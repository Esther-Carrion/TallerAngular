
export interface Book {
    id:          number;
    title:       string;
    description: string;
    category:    string;
    thumbnail:   string;
    author:      string;
    price:       number;
    quantity:    number;
    createdAt:   string;
    updatedAt:   string;
    cartId?: string;
    promoCode:string[];
}





