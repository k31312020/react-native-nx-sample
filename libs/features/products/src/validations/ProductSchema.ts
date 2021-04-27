import * as yup from 'yup';

const Schema = yup.object().shape({
  skuid: yup.string().required(),
  productName: yup.string().required(),
  quantity: yup.number().required().positive().moreThan(0),
  price: yup.number().min(1).positive().moreThan(0),
  description: yup.string().max(200),
});

export default Schema;
