import { db } from '@vercel/postgres';
import { futProducts } from '../lib/product';


const client = await db.connect();

async function seedProducts(){
  await client.sql`
  CREATE TABLE IF NOT EXISTS futProducts(
    id VARCHAR(20) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    details VARCHAR(400),
    category VARCHAR(50),
    subcategory VARCHAR(150),
    price INT NOT NULL,
    links VARCHAR(700) NOT NULL,
    image VARCHAR(200) NOT NULL,
    rating INT NOT NULL,
    use VARCHAR(20) NOT NULL,
    whose VARCHAR(20) NOT NULL
  );
  `;
  const insertProduct = await Promise.all(
    futProducts.map((itemprod)=>client.sql`
    INSERT INTO futProducts(id, name, details, category, subcategory, price, links, image, rating, use, whose)
    VALUES(${itemprod.id}, ${itemprod.name}, ${itemprod.details}, ${itemprod.category},${itemprod.subcategory}, ${itemprod.price}, ${itemprod.links}, ${itemprod.image}, ${itemprod.rating}, ${itemprod.use}, ${itemprod.whose})
    ON CONFLICT (id) DO NOTHING;
    `,
  ),
  );
  return insertProduct;
}


export async function GET() {
    try {
      await client.sql`BEGIN`;
      await seedProducts();
      await client.sql`COMMIT`;
  
      return Response.json({ message: 'Product Database seeded successfully' });
    } catch (error) {
      await client.sql`ROLLBACK`;
      return Response.json({ error }, { status: 500 });
    }
  }
  