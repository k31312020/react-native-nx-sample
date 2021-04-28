import * as yup from 'yup';

const error_text = {
  type: 'Invalid format',
};

const Schema = yup.object().shape({
  skuid: yup.string().required(),
  productName: yup.string().typeError(error_text.type).required(),
  quantity: yup.number().typeError(error_text.type).required().moreThan(0),
  price: yup.number().typeError(error_text.type).required().moreThan(0),
  description: yup.string().typeError(error_text.type).max(200),
});

export default Schema;
