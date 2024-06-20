import { DataProvider, fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/admin';


export default {
	getList: async (resource, params) => {
		const { page, perPage } = params.pagination;
		const { field, order } = params.sort;
		const query = {
			sort: JSON.stringify([field, order]),
			range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
			filter: JSON.stringify(params.filter),
		};
		const url = `${apiUrl}/${resource}/list?${stringify(query)}`;
		const {
			data
		} = await axios.get(url)
		console.log(data)

		return {
			data: data.items,
			total: data.count,
		};
	},
	getOne: async (resource, params) => {
		const category = JSON.parse(localStorage.getItem('show') as string)
		const url = `${apiUrl}/${resource}/one?id=${params.id}&category=${category}`

		const {
			data
		} = await axios.get(url)

		return {
			data: data.productItem
		};
	},
	delete: async (resource, params) => {
		const id = params.previousData && params.previousData.id
		const category = params.previousData && params.previousData.category
		const url = `${apiUrl}/${resource}/delete?id=${id}&category=${category}`

		const {
			data
		} = await axios.get(url)

		return {
			data
		};
	},
} as DataProvider;
