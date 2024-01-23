import { sql } from '@vercel/postgres';

async function crearTabla() {
    try {
        const result = await sql`
        CREATE TABLE IF NOT EXISTS proveedores (
            id SERIAL PRIMARY KEY,
            nombre TEXT NOT NULL,
            telefono INTEGER
        );
        `;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

crearTabla();
