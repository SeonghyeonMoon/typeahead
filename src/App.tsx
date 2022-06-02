import styled from 'styled-components';
import AutoComplete from './components/AutoComplete';
import { findMatchedMbtis, findMatchedUsers } from './components/findMatched';
import { User, Mbti } from './components/type';

function App() {
	return (
		<>
			<AutoComplete<User> api={findMatchedUsers} template={UserTemplate} />
			<AutoComplete<Mbti> api={findMatchedMbtis} template={MbtiTemplate} />
		</>
	);
}

export default App;

const UserTemplate = (data: User) => {
	return (
		<UserList>
			{data.name}({data.email})
		</UserList>
	);
};

const UserList = styled.li`
	color: coral;
`

const MbtiTemplate = (data: Mbti) => {
	return (
		<li>
			{data.name}({data.mbti})
		</li>
	);
};
