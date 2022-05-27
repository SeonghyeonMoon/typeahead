import { userDataType } from './type';
export default function findMatched(inputData: string) {
	const json: userDataType[] = require('./generated.json');
	const newData: userDataType[] = [];
	for (let userData of json) {
		for (let data of Object.values(userData)) {
			data = String(data);
			if (data.includes(inputData)) {
				newData.push(userData);
				break;
			}
		}
	}
	return newData;
}
