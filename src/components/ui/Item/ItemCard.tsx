import heartIcon from "../../../assets/icons/heart-icon.svg";
import defaultImg from "../../../assets/images/item-default-img-md.svg";
import { Link } from "react-router-dom";
import "./ItemCard.css";
import { Product } from "../../../domains/product/index";

interface ItemCardProps {
  item: Product;
}

function ItemCard({ item }: ItemCardProps) {
  return (
    <Link to={`/items/${item.id}`} className="item-link">
      <div className="itemCard">
        <img src={item.images && item.images.length > 0 ? item.images[0] : defaultImg} className="itemCardThumbnail" />
        <div className="itemSummary">
          <h2 className="itemName">{item.name}</h2>
          <p className="itemPrice">{item.price.toLocaleString()}원</p>
          <div className="favoriteCount">
            <img src={heartIcon} alt="좋아요" />
            &nbsp;{item.favoriteCount}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
