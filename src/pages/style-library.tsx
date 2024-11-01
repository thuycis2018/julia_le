import Tab from "../components/blocks/Tab";
import Formv1 from "../components/blocks/Formv1";
import Formv2 from "../components/blocks/Formv2";
import MegaMenu from "../components/blocks/MegaMenu";
import Table from "../components/blocks/Table";
import PhotoSlideshow from "../components/blocks/PhotoSlideshow";
import SkillBar from "../components/SkillBar";
import Footer from "../components/Footer";
import pic1 from "../assets/images/stacked_image1.jpg";
import pic2 from "../assets/images/stacked_image2.jpg";
import pic3 from "../assets/images/stacked_image3.jpg";
import pic4 from "../assets/images/stacked_image4.jpg";
import pic5 from "../assets/images/stacked_image5.jpg";

const StyleLibraryPage: React.FC = () => {
  const headers = ["Name", "Age", "Location"];
  const rows = [
    { Name: "John Doe", Age: "30", Location: "New York" },
    { Name: "Jane Smith", Age: "25", Location: "San Francisco" },
    { Name: "Michael Brown", Age: "35", Location: "Chicago" },
  ];

  const photos = [
    { id: 1, url: pic1, alt: "Photo 1" },
    { id: 2, url: pic2, alt: "Photo 2" },
    { id: 3, url: pic3, alt: "Photo 3" },
    { id: 4, url: pic4, alt: "Photo 4" },
    { id: 5, url: pic5, alt: "Photo 5" },
  ];
  return (
    <>
      <div className='w-full max-w-3xl p-6 mb-6 bg-white rounded-2xl border border-gray-200 mx-auto m-10 p-10 shadow-lg'>
        <h2 className='font-bold p-4 text-center'>Style Library</h2>
        <SkillBar />
        <Tab />
        <Formv1 />
        <Formv2 />
        <div className='p-6'>
          <Table headers={headers} rows={rows} />
        </div>

        <div className='p-6'>
          <PhotoSlideshow photos={photos} />
        </div>
        <MegaMenu />
      </div>
      <Footer />
    </>
  );
};

export default StyleLibraryPage;
