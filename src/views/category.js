import { useParams } from "react-router-dom";
import ItemListContainer from "../components/itemListContainer"
import { Layout } from "../components/Layout";

const CategoryView = () => {
  const { category } = useParams();
  

  return (
    <Layout>
      <ItemListContainer />
    </Layout>
  );
};

export default CategoryView;