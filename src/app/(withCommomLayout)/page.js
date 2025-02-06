import Link from "next/link";

const HomePage = () => {
  return (
    <div className="">
      <Link className="btn bg-orange-400 w-24 h-12 p-1" href="/profile">
        profile
      </Link>
      <h1 className="text-4xl bg-red-700">hello sadik</h1>
    </div>
  );
};

export default HomePage;
