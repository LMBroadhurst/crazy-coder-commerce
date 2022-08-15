import CategoryTile from './CategoryTile/CategoryTile';
import Desktop from "../../Assets/desktopCatTile1.png";
import Laptop from "../../Assets/laptopCatTile1.png";
import KeyboardMouse from "../../Assets/keyboardMouseCatTile1.png";
import Microphone from "../../Assets/micCatTile1.png";

const CategorySelectors = () => {
  return (
    <>
        <section className='flex flex-wrap justify-around content-center items-center w-11/12 mx-auto'>

            <CategoryTile categoryName="Desktops" imageFile={Desktop}/>

            <CategoryTile categoryName="Laptops" imageFile={Laptop} />

            <CategoryTile categoryName="Accessories" imageFile={KeyboardMouse} />

            <CategoryTile categoryName="Courses" imageFile={Microphone}/>

        </section>
    </>
  )
}

export default CategorySelectors