import CategoryTile from './CategoryTile/CategoryTile';
import Desktop from "../../Assets/desktopCatTile1.png";
import Laptop from "../../Assets/laptopCatTile1.png";
import Microphone from "../../Assets/micCatTile1.png";
import Course from "../../Assets/course.png";

const CategorySelectors = () => {
  return (
    <>
      <section>

        <h3 className='text-center pb-16 text-4xl'>Shop by category</h3>

        <section className='flex flex-wrap justify-around content-center items-center w-7/12 mx-auto duration-300'>

          <CategoryTile categoryName="Desktops" imageFile={Desktop}/>

          <CategoryTile categoryName="Laptops" imageFile={Laptop} />

          <CategoryTile categoryName="Accessories" imageFile={Microphone} />

          <CategoryTile categoryName="Courses" imageFile={Course}/>

        </section>

      </section>
    </>
  )
}

export default CategorySelectors