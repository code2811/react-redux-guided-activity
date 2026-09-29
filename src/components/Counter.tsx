import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../store/actions/counterActions';
import type { RootState } from '../store/store';
import styles from './Counter.module.css';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.counterContainer}>
      <h2 className={styles.counterValue}>Counter: {count}</h2>
      <div className={styles.buttonRow}>
        <button type="button" className={styles.button} onClick={() => dispatch(increment())}>
          +
        </button>
        <button type="button" className={styles.button} onClick={() => dispatch(decrement())}>
          -
        </button>
        <button type="button" className={`${styles.button} ${styles.resetButton}`} onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
