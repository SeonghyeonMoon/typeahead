import AutoComplete from './components/AutoComplete';
import { findMatchedMbtis, findMatchedUsers } from './components/findMatched';
import { User, Mbti } from './components/type';

function App() {
	return (
		<>
			<AutoComplete
				getLabel={(item) => `${item.name}(${item.email})`}
				// getLabel={Template}
				api={findMatchedUsers}
			/>
			<AutoComplete
				getLabel={(item) => `${item.name}(${item.email})`}
				// getLabel={Template}
				api={findMatchedMbtis}
			/>
		</>
	);
}

export default App;

interface Props {
	item: User | Mbti;
}

const Template: React.FC<Props> = ({ item }) => {
	return <li>{item.name}</li>;
};
