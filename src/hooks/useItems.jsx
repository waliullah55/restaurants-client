import MenuItem from './../Pages/Shared/MenuItem';

const useItems = ({selectItems}) => {
    return (
        <div className="grid md:grid-cols-2 gap-14">
            {{ selectItems }.map((item) => (
                <MenuItem key={item._id} item={item}></MenuItem>
            ))}
        </div>
    );
};

export default useItems;