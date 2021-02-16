import Style from './TextInput.module.css'
export default function TextInput(props) {
  const { defaultValue = '', handleChange, placeholder = '' } = props;
  return (
    <input
      placeholder={placeholder}
      type='text'
      className={Style.TextInput}
      defaultValue={defaultValue}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
    />
  );
}
