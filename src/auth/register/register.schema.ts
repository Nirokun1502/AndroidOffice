import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  userName: yup.string().required('Vui lòng nhập tên của bạn'),
  email: yup.string().required('Vui lòng nhập email của bạn'),
});
