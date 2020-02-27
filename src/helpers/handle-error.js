import { toast } from 'react-toastify';

const handleError = e => {
  const errorMessage =
    (e.response &&
      e.response.data &&
      e.response.data.data &&
      e.response.data.data.error &&
      e.response.data.data.error.message) ||
    e.message;

  return toast.error(errorMessage);
};

export default handleError;
