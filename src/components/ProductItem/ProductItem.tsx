import { FC } from "react"
import styles from './ProductItem.module.scss'
import { Price, Product } from "../../types/Product";
import { Button } from "../Button";
import trashCan from '../../assets/icon_trash.svg';

type Props = {
  product: Product
}

export const ProductItem: FC<Props> = ({ product }) => {
  const {
    title,
    price,
    type,
    date
  } = product;

  const findPriceBySymbol = (price: Price[], symbol: string) => {
    const foundPrice = price.find(item => item.symbol === symbol);
    return foundPrice ? foundPrice.value : undefined;
  };

  const uahPrice = findPriceBySymbol(price, 'UAH'); 
  const usdPrice = findPriceBySymbol(price, 'USD'); 

  return(
    <li className={`${styles['product']} row gx-0`}>
      <div className={`${styles['product__title']} col`}>
        {title}
      </div>

      <div className={`${styles['product__type']} col-2`}>
        {type}
      </div>

      <div className={`${styles['product__date']} col-2`}>
        {date}
      </div>

      <div className={`${styles['product__price']} col-2`}>
        <span className={styles['product__price--uah']}>
          {uahPrice}
        </span>

        <span className={styles['product__price--usd']}>
          {usdPrice}
        </span>
      </div>

      <div className={`${styles['product__delete-button']} col-2`}>
        <Button iconPath={trashCan} />
      </div>
    </li>
  )
}