import Form from "@/components/Form2"
import { sql } from '@vercel/postgres';
import { editProveedor } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({searchParams}) {
  const { rows }  = await sql`select * from proveedores where id = ${searchParams.id};` 
  const proveedor = rows[0];

  return (
    <div>
        <h3>Editar proveedor {searchParams.id}</h3>
        <Form action={editProveedor} title='Editar proveedor' proveedor={proveedor} disabled={false}  />
    </div>
  )
}


export default page