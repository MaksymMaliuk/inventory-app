'use client'

import { FC, useEffect, useState } from "react";
import { ProductItem } from "../ProductItem/ProductItem";
import { Product } from "@/types/Product";
import styles from './ProductsList.module.scss';
import productsFromServer from '../../products.json';

export const ProductsList: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productsFromServer)
  }, [])

  return (
    <div className={styles['product-list-container']}>
      <ul className={`${styles['product-list']} container`}> 
          {products.map((product) => {
            return (
              <ProductItem key={product.id} product={product}/>
            )
        })}
      </ul>
    </div>
    
  )
}