
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import UseMenu from '../../../Hooks/UseMenu';

const PopularMenu = () => {
    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category == 'popular');

    return (
        <section>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From Our Menu"}
            >
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-4 mb-12'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;