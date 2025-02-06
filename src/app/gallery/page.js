import Image from "next/image";

const GalleryPage = () => {
  return (
    <div>
      <h1>next js image component</h1>
      <Image
        className="mx-auto"
        src={"https://i.ibb.co.com/1Yvyd4Kd/Adobe-Express-file.jpg"}
        alt="next images"
        width={500}
        height={500}
      />
    </div>
  );
};

export default GalleryPage;
