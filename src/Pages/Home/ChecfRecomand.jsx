import SectionTittle from "../../Componenets/SectionTittle";
import img from "../../assets/home/slide1.jpg";

const ChecfRecomand = () => {
  return (
    <div className="my-14">
      <SectionTittle
        Heading={"CHEF RECOMMENDS"}
        subHeading={"Should Try"}
      ></SectionTittle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-none dark:bg-gray-900 dark:text-gray-100">
          <img
            src={img}
            alt=""
            className="object-cover object-center w-full h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-center items-center p-6 space-y-8 bg-[#F3F3F3]">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-semibold tracki">
                Donec lectus leo
              </h2>
              <p className="dark:text-gray-100">
                Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                eget.
              </p>
            </div>
            <button className=" btn bg-[#E8E8E8] w-[200px] border-b-[#BB8506] border-b-4 text-[#BB8506] text-xl font-semibold rounded-lg dark:bg-violet-400 dark:text-gray-900">
              Read more
            </button>
          </div>
        </div>

        <div className="rounded-none dark:bg-gray-900 dark:text-gray-100">
          <img
            src={img}
            alt=""
            className="object-cover object-center w-full h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-center items-center p-6 space-y-8 bg-[#F3F3F3]">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-semibold tracki">
                Donec lectus leo
              </h2>
              <p className="dark:text-gray-100">
                Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                eget.
              </p>
            </div>
            <button className=" btn bg-[#1F2937] w-[200px] border-b-[#BB8506] border-b-4 text-[#BB8506] text-xl font-semibold rounded-lg dark:bg-violet-400 dark:text-gray-900">
              Read more
            </button>
          </div>
        </div>

        <div className="rounded-none dark:bg-gray-900 dark:text-gray-100">
          <img
            src={img}
            alt=""
            className="object-cover object-center w-full h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-center items-center p-6 space-y-8 bg-[#F3F3F3]">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-semibold tracki">
                Donec lectus leo
              </h2>
              <p className="dark:text-gray-100">
                Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                eget.
              </p>
            </div>
            <button className=" btn bg-[#E8E8E8] w-[200px] border-b-[#BB8506] border-b-4 text-[#BB8506] text-xl font-semibold rounded-lg dark:bg-violet-400 dark:text-gray-900">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChecfRecomand;
