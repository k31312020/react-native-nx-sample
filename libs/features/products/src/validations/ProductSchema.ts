import * as yup from 'yup';

const error_text = {
  type: 'Invalid format',
};

const Schema = yup.object().shape({
  skuid: yup.number().typeError(error_text.type).required(),
  productName: yup.string().typeError(error_text.type).required(),
  quantity: yup.number().typeError(error_text.type).required().moreThan(0),
  price: yup.number().typeError(error_text.type).required().moreThan(0),
  category: yup.string().typeError(error_text.type).required(),
  color: yup.string().typeError(error_text.type).required(),
  description: yup.string().typeError(error_text.type).max(200),
});

export default Schema;
