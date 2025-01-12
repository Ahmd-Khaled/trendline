import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (msg, type) => {
  if (type === "warn") toast.warn(msg);
  if (type === "success") toast.success(msg);
  if (type === "error") toast.error(msg);
  
};

export default notify;