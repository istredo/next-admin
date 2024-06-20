
import { Admin, Resource } from 'react-admin';
import authProvider from './authProvider';
import { GoodsList } from '../components/GoodsList/GoodsList'
import { ProductShow } from '../components/ProductShow/ProductShow'
import dataProvider from './dataProvider';

export const App = () => (
	<Admin authProvider={authProvider} dataProvider={dataProvider}>
		<Resource name="goods" list={GoodsList} show={ProductShow} />
	</Admin>
);

