import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchInput from "../SearchInput/SearchInput";

const ProductFilter = () => {
  return (
    <>
        <section className="flex flex-col items-center py-5 bg-black">
            <div className="flex justify-between items-center text-2xl lg:py-4 lg:text-4xl text-white">
                <h4 className="pr-5 text-white">Filter products</h4>
                <FontAwesomeIcon icon={faBars} className="pl-5 sm:hidden" />
            </div>
            
            <ul className=" hidden grid-cols-1 sm:grid sm:grid-cols-2 md:grid-cols-4 pt-3 gap-3">
                <SearchInput name={"Name"}/>
                <SearchInput name={"Detail"}/>
                <SearchInput name={"Min. price"}/>
                <SearchInput name={"Max. price"}/>
            </ul>
        </section>
    </>
  )
}

export default ProductFilter;