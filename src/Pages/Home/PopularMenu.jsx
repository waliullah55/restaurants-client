import SectionTittle from "../../Componenets/SectionTittle";
import Button from "../Shared/Button";
import useMenu from './../../hooks/useMenu';
import MenuItem from './../Shared/MenuItem';

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter(item => item.category == 'popular')
    ; return (
      <div className="my-16">
        <SectionTittle
          subHeading={"Check it out"}
          Heading={"FROM OUR MENU"}
        ></SectionTittle>
        <div className="grid md:grid-cols-2 gap-14">
            {popularItems.map((item) => (
                <MenuItem key={item._id} item={item}></MenuItem>
            ))}
        </div>
        <Button btnTitle={'View Full Menu'}/>
      </div>
    );
};

export default PopularMenu;
