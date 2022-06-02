import AutoComplete from './components/AutoComplete';
import { findMatchedMbtis, findMatchedUsers } from './components/findMatched';
import { User, Mbti } from './components/type';

function App() {
	return (
		<>
			<AutoComplete<User> api={findMatchedUsers}>
				<UserTemplate />
			</AutoComplete>

			<AutoComplete<Mbti> api={findMatchedMbtis}>
				<MbtiTemplate />
			</AutoComplete>
		</>
	);
}

export default App;

interface Props {
	item: User | Mbti;
}

const UserTemplate = ({ item }: Props) => {
	return (
		<li>
			{item.name}({item.email})
		</li>
	);
};

const MbtiTemplate = ({ item }: Props) => {
	return (
		<li>
			{item.name}({item.email})
		</li>
	);
};
