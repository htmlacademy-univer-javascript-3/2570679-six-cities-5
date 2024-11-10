type OfferGoodsProps = {
    goods: string[];
}

function OfferGoods({ goods }: OfferGoodsProps) {
  return (
    <div className="offer__inside">
      <ul className="offer__inside-list">
        {goods.map((item) => (
          <li className="offer__inside-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OfferGoods;
