import { useParams } from "react-router-dom";
import Modal from "../components/ui/Modal";
import useProperties from "../hooks/useProperties";
import { useEffect, useState } from "react";
import { IProperty } from "../interface/IProperty";
import LoadingPage from "../components/ui/LoadingPage";
import PropertyModalContent from "../components/properties/PropertyModalContent";
import EditPropertyModalContent from "../components/properties/EditPropertyModalContent";

const Property = () => {
  const { getPropertyById } = useProperties();
  const [property, setProperty] = useState<IProperty | null>(null);
  const params = useParams();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (params.id) {
      getPropertyById(params.id).then((data) => {
        setProperty(data || null);
      });
    }
  }, [params.id]);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Modal>
      {!property ? (
        <LoadingPage />
      ) : (
        <div className="w-full flex justify-center items-center max-h-[750px] overflow-hidden">
          {isEditing ? (
            <EditPropertyModalContent property={property} handleEdit={handleEdit}/>
          ) : (
            <PropertyModalContent property={property} handleEdit={handleEdit} />
          )}
        </div>
      )}
    </Modal>
  );
};

export default Property;
