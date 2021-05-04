import { Api } from '@selise-react/shared';

export const createProduct = (product) => Api.post('products', product);
