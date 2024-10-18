export type ProductTable = {
    id: string;
    name: string;
    details:string;
    category:string;
    subcategory:string;
    price: number;
    links: string;
    image:string;
    rating: number;
    use:string;
    whose: 'product-card' | 'product-card-d';
  };
  