

const MenuItem = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
        <div className="flex gap-6 ">
            <img  style={{borderRadius: '0px 200px 200px 200px'}} className="w-[112px]" src={image} alt="" />
            <div>
                <h2 className="text-[#151515] text-xl" > {name}-----------</h2>
                <p className="text-[#737373]">{recipe}</p>
            </div>
            <p className="text-[#BB8506] text-xl">${price}</p>
        </div>
    );
};

export default MenuItem;