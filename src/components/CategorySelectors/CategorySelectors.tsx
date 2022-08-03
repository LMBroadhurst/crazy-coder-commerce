import CategoryTile from './CategoryTile/CategoryTile';
import Desktop from "../../Assets/desktopCatTile1.png";
import Laptop from "../../Assets/laptopCatTile1.png";
import KeyboardMouse from "../../Assets/keyboardMouseCatTile1.png";
import Microphone from "../../Assets/micCatTile1.png";

const CategorySelectors = () => {
  return (
    <>
        <section className='flex flex-wrap justify-around content-center items-center w-11/12 mx-auto my-10'>

            <CategoryTile categoryName="Desktops" imageFile={Desktop}/>

            <CategoryTile categoryName="Laptops" imageFile={Laptop} />

            <CategoryTile categoryName="Keyboards & Mice" imageFile={KeyboardMouse} />

            <CategoryTile categoryName="Streaming" imageFile={Microphone}/>

            {/* <CategoryTile categoryName="x" />

            <CategoryTile categoryName="x" /> */}

        </section>
    </>
  )
}

export default CategorySelectors