import { IProperty } from "../../interface/IProperty";
import PropertyCard from "./PropertyCard";

interface PropertiesListWrapperProps {
  propertiesAmount: number;
  properties: IProperty[];
  handleNextPage: () => void;
  handlePrevPage: () => void;
  pagination: {
    page: number;
    limit: number;
    totalPages: number;
  };
}

const PropertiesListWrapper = ({
  propertiesAmount,
  properties,
  handleNextPage,
  handlePrevPage,
  pagination,
}: PropertiesListWrapperProps) => {
  return (
    <section className="fixed z-3 transform translate-z-0 lg:mx-8 lg:mb-24 bg-white right-0 bottom-0 h-[calc(100vh-205px)] shadow-md rounded p-2 max-w-xl w-full overflow-hidden">
      <div className="p-5">
        <span className="font-semibold text-gray-500">
          {propertiesAmount.toLocaleString("en-US")} Propiedades
        </span>
      </div>

      <div className="flex items-center justify-center mb-3">
        <button
          onClick={handlePrevPage}
          className="px-4 py-2 mx-2 bg-gray-200 rounded hover:bg-gray-300"
          disabled={pagination.page === 1}
        >
          &lt;
        </button>
        <span className="px-4 py-2 mx-2 bg-gray-100 rounded">
          {pagination.page} / {pagination.totalPages}
        </span>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 mx-2 bg-gray-200 rounded hover:bg-gray-300"
          disabled={pagination.page === pagination.totalPages}
        >
          &gt;
        </button>
      </div>

      {
        <div className="overflow-scroll h-full pb-24 flex flex-wrap flex-row justify-evenly">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      }
    </section>
  );
};

export default PropertiesListWrapper;