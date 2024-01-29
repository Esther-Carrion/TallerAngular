
export interface Cart {
    id:          number;
    title:       string;
    description: null | string;
    category:    null | string;
    thumbnail:   string;
    author:      null | string;
    price:       number;
    quantity:    number;
    createdAt:   string;
    updatedAt:   string;
}
