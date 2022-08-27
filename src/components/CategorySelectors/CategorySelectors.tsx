import CategoryTile from './CategoryTile/CategoryTile';
import Desktop from "../../Assets/desktopCatTile1.png";
import Laptop from "../../Assets/laptopCatTile1.png";
import Microphone from "../../Assets/micCatTile1.png";
import Course from "../../Assets/course.png";
import { Link } from 'react-router-dom';

const CategorySelectors = () => {
  return (
    <>
      <section>

        <h3 className='text-center text-4xl pb-8 lg:pb-16'>Shop by category</h3>

        <section className='grid grid-cols-2 columns-auto w-2/3 mx-auto duration-300 sm:grid-cols-4 sm:w-11/12 md:w-5/6 lg:w-7/12'>

          <Link to={"/desktops"}>
            <CategoryTile categoryName="Desktops" imageFile={Desktop}/>
          </Link>

          <Link to={"/laptops"}>
            <CategoryTile categoryName="Laptops" imageFile={Laptop} />
          </Link>

          <CategoryTile categoryName="Accessories" imageFile={Microphone} />

          <CategoryTile categoryName="Courses" imageFile={Course}/>

        </section>

      </section>
    </>
  )
}

export default CategorySelectors