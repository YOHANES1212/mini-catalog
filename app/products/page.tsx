import { getProducts } from "../lib/api"

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="rounded-2xl border border-border bg-card shadow-sm">
          <img
            src={product.image}
            alt={product.title}
            className="h-56 w-full rounded-t-2xl object-contain bg-muted"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}