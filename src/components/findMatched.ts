import { User, Mbti } from './type';
import users from './users.json';
import mbtis from './mbti.json';

export const findMatchedUsers = (keyWord: string) => {
	return users.filter(
		(user: User) => user.name.includes(keyWord) || user.email.includes(keyWord)
		);
	}

export const findMatchedMbtis = (keyWord: string) =>
	mbtis.filter((mbti: Mbti) => mbti.mbti.includes(keyWord));
