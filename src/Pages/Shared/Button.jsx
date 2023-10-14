import { Link } from "react-router-dom";

const Button = ({ btnTitle, whereGo }) => {
  return (
    <div className="text-center my-8">
      <Link to={`/order/${whereGo}`}>
        <button className="btn btn-outline border-0 border-b-4 text-[#1F2937] ">
          {btnTitle}
        </button>
      </Link>
    </div>
  );
};

export default Button;