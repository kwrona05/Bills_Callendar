import { useNavigate } from "react-router-dom";
const Categories = (id, category) => {
  const navigate = useNavigate();
  const showDetails = () => {
    navigate(`${category.nav}`);
  };
  return (
    <div className="container" onClick={showDetails}>
      <img alt={category.img} src={category.link}></img>
    </div>
  );
};
