import { User, Mbti } from './type';
import users from './users.json';
import mbtis from './mbti.json';

export const findMatchedUsers = (keyWord: string) => {
	keyWord = keyWord.toLowerCase();
	return users.filter(
		(user: User) =>
			user.name.toLowerCase().includes(keyWord) ||
			user.email.toLowerCase().includes(keyWord)
	);
};

export const findMatchedMbtis = (keyWord: string) => {
	keyWord = keyWord.toLowerCase();
	return mbtis.filter((mbti: Mbti) =>
		mbti.mbti.toLowerCase().includes(keyWord.toLowerCase())
	);
};
