
const Button = ({btnTitle}) => {
    return (
        <div className="text-center my-8">
          <button className="btn btn-outline border-0 border-b-4 text-[#1F2937] ">
            {btnTitle}
          </button>
        </div>
    );
};

export default Button;