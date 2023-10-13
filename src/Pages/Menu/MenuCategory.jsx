
import Button from '../Shared/Button';
import Cover from '../Shared/Cover';
import MenuItem from './../Shared/MenuItem';

const MenuCategory = ({ items, bgImg, title, btnTitle }) => {
    return (
        <div className='my-16'>
            {title && <Cover bgImg={bgImg} title={title} />}
            <div className="grid md:grid-cols-2 gap-14 mt-12">
                {items.map((item) => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
            </div>
            <Button btnTitle={btnTitle} />
        </div>
    );
};

export default MenuCategory;