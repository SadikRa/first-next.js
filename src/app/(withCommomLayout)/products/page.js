import ProductCard from "@/app/components/Products/ProductCard";

const AllProductsPage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });

  const products = await res.json();

  return (
    <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[90%]">
      {products.map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default AllProductsPage;
