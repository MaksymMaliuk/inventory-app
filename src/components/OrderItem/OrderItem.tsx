import styles from './OrderItem.module.scss';

export const OrderItem = () => {
  return (
    <li className={`${styles['order-item']} row gx-0`}>
      <div className='col gx-0 d-flex justify-content-center'>
        <span className={styles['order-item__title']}>
          Very long long order name
        </span>
      </div>


      <div className={`${styles['order-item__content']} col-2 gx-0`}>
        <span className={styles['content__button']}>
          <button>BUTTON</button>
        </span>

        <span className={styles['content__counter']}>
          23
        </span>
      </div>

      <div className={`${styles['order-item__date']} col-2 gx-0`}>
        <span className={styles['order-item__date--short']}>
          01/08
        </span>

        <span className={styles['order-item__date--long']}>
          01/Aug/2023
        </span>
      </div>

      <div className={`${styles['order-item__total-price']} col-2 gx-0`}>
        <span className={styles['order-item__total-price--usd']}>
          100
        </span>
        
        <span className={styles['order-item__total-price--uah']}>
          3800
        </span>

      </div>
    </li>
  )
}