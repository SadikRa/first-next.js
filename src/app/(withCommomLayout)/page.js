import Link from "next/link";
import ProductCard from "../components/Products/ProductCard";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 5,
    },
  });

  const products = await res.json();

  return (
    <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[90%]">
      {products.slice(0, 3).map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
      <Link href={"/products"}>
        <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
          see all
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
