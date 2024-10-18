import { Query, sql } from '@vercel/postgres';

import { ProductTable } from "./definitions";


const ITEMS_PER_PAGE = 16;
export async function fetchProducts(
    query: string,
    currentPage: number,
  ) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    try {
      const futproducts = await sql<ProductTable>`
        SELECT
          futproducts.id,
          futproducts.name,
          futproducts.details,
          futproducts.category,
          futproducts.subcategory,
          futproducts.price,
          futproducts.links,
          futproducts.image,
          futproducts.rating,
          futproducts.use,
          futproducts.whose
        FROM futproducts
        WHERE
          futproducts.name ILIKE ${`%${query}%`} OR
          futproducts.details ILIKE ${`%${query}%`} OR
          futproducts.category ILIKE ${`%${query}%`} OR
          futproducts.subcategory ILIKE ${`%${query}%`} OR
          futproducts.use ILIKE ${`%${query}%`}

        ORDER BY futproducts.rating 
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;
      return futproducts.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch products.');
    }
  }


  export async function fetchProductPages(query: string) {
    try {
      const count = await sql`SELECT COUNT(*)
      FROM futproducts
      WHERE
      futproducts.name ILIKE ${`%${query}%`} OR
      futproducts.details ILIKE ${`%${query}%`} OR
      futproducts.category ILIKE ${`%${query}%`} OR
      futproducts.subcategory ILIKE ${`%${query}%`} OR
      futproducts.use ILIKE ${`%${query}%`} 
    `;
  
      const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE );
      return totalPages;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch total number of doctors data.');
    }
  }
