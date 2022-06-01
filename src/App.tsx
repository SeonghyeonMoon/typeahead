import AutoComplete from './components/AutoComplete';
import { findMatchedMbtis, findMatchedUsers } from './components/findMatched';
import { User, Mbti } from './components/type';

function App() {
	return (
		<>
			<AutoComplete<User> api={findMatchedUsers}>
				<Template />
			</AutoComplete>

			<AutoComplete<Mbti> api={findMatchedMbtis}>
				<Template />
			</AutoComplete>
		</>
	);
}

export default App;

interface Props {
	item: User | Mbti;
}

const Template: React.FC<Props> = ({ item }) => {
	return (
		<li>
			{item.name}({item.email})
		</li>
	);
};
