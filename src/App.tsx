import styled from 'styled-components';
import AutoComplete from './components/AutoComplete';
import { findMatchedMbtis, findMatchedUsers } from './components/findMatched';
import { User, Mbti } from './components/type';

function App() {
	return (
		<>
			<AutoComplete<User> api={findMatchedUsers} template={UserTemplate} />
			{/* <AutoComplete<Mbti> api={findMatchedMbtis} template={MbtiTemplate} /> */}
		</>
	);
}

export default App;

const UserTemplate = (data: User, isSelected: boolean, _onClick: (data: User) => void) => {
	return (
		<UserList isSelected={isSelected} onClick={() => {_onClick}}>
			{data.name}({data.email})
		</UserList>
	);
};

const UserList = styled.li<{isSelected: boolean}>`
	color: coral;
	padding: 10px 20px;
	${({ isSelected }) => isSelected && 'background-color: black; color: white;'}
	& + & {
		border-top: 1px solid black;
	}
	&:hover {
		background-color: black;
		color: white;
	}
`

const MbtiTemplate = (data: Mbti) => {
	return (
		<li>
			{data.name}({data.mbti})
		</li>
	);
};
