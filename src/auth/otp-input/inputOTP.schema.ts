import * as yup from 'yup';

export const otpCodeSchema = yup.object().shape({
  otpCode: yup.string().required('Vui lòng nhập mã OTP của bạn'),
});
