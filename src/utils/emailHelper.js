const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendOTP = async (email, otp) => {
  const msg = {
    to: email,
    from: 'your-email@example.com',
    subject: 'Xác nhận đăng ký',
    text: `Mã OTP của bạn là: ${otp}`,
  };
  await sgMail.send(msg);
};

module.exports = { sendOTP };
