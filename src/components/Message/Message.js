import './Message.css';

export default function Message(props) {
  const { message, type } = props;
  
  return <p className={`Message ${type === 'error' ? 'ErrorMessage' : ''} ${type === 'loading' ? 'LoadingMessage' : "" } ${type === 'success' ? 'SuccessMessage' : "" } `}>{message}</p>;
}
