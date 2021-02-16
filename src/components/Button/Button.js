import Styles from './Button.module.css';
export default function Button({ title, disabled }) {
  return (
    <button className={Styles.button} type='submit' disabled={disabled}>
      {title}
    </button>
  );
}
