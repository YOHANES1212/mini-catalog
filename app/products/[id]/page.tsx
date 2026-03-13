export default async function ProductPage({ params }: { params: { id: string } }) {
    const { id } = await params;

    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!res.ok) {
        throw new Error("Failed to fetch product");
    }

    const product = await res.json();

    return (
        <div className="flex min-h-svh p-6">
            <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
                <div>
                    <img src={product.image} alt={product.title} className="w-full h-64 object-contain bg-muted rounded-lg" />
                    <h1 className="font-medium">{product.title}</h1>
                    <p>${product.price.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}
