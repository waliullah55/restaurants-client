import SectionTittle from "../../Componenets/SectionTittle";
import featuredImage from "../../assets/home/featured.jpg";
import '../Shared/CustomCSS.css';

const Featured = () => {
  return (
    <div className="featured bg-fixed pb-8 pt-4 my-12 ">
      <SectionTittle
        subHeading={"Check it out"}
        Heading={"FROM OUR MENU"}
      ></SectionTittle>
      <div className="md:flex items-center justify-center pb-16 pt-6 px-36 bg-black bg-opacity-25">
        <img className="w-1/2" src={featuredImage} alt="" />
        <div className="text-white space-y-2 md:ml-10">
            <h3 className="text-2xl">March 20, 2023</h3>
            <h1 className="text-3xl">WHERE CAN I GET SOME?</h1>
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
            <button className="btn btn-outline border-0 border-b-4 border-b-white text-white font-semibold text-xl px-6">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
