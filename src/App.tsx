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

// 사용자가 타입, 라벨, 스타일 코드만 지정하도록 변경 필요
const UserTemplate = (data: User, isSelected: boolean, _onClick: (data: User) => void) => {
	return (
		<UserItem isSelected={isSelected} onClick={() => {_onClick}}>
			{data.name}({data.email})
		</UserItem>
	);
};

const UserItem = styled.li<{isSelected: boolean}>`
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

const MbtiTemplate = (data: Mbti, isSelected: boolean, _onClick: (data: Mbti) => void) => {
	return (
		<MbtiItem isSelected={isSelected} onClick={() => {_onClick}}>
			{data.name}({data.mbti})
		</MbtiItem>
	);
};

const MbtiItem = styled.li<{isSelected: boolean}>`
	color: beige;
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