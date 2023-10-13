

const SectionTittle = ({Heading, subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8">
            <p className="text-[#D99904] text-xl font italic mb-2" >--- {subHeading} ---</p>
            <h2 className="text-[#151515] text-3xl border-y-8 py-4 ">{Heading}</h2>
        </div>
    );
};

export default SectionTittle;