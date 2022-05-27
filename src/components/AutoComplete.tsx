import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import findMatched from './findMatched';
import { userDataType } from './type';

const AutoComplete = () => {
	const [inputData, setInputData] = useState('');
	const [matchedList, setMatchedList] = useState<userDataType[]>([]);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
		setInputData(value);
		setSelectedIndex(0);
	};

	const changeSelete = ({ keyCode }: KeyboardEvent<HTMLInputElement>) => {
		if (keyCode === 38) {
			setSelectedIndex(
				(prev) => (prev - 1 + matchedList.length) % matchedList.length
			);
		} else if (keyCode === 40) {
			setSelectedIndex((prev) => (prev + 1) % matchedList.length);
		}
	};

	useEffect(() => {
		setMatchedList(findMatched(inputData));
	}, [inputData]);

	useEffect(() => {
		console.log(selectedIndex);
		scrollToSeleted();
	}, [selectedIndex]);

	const selectedRef = useRef<HTMLDivElement>(null);

	const scrollToSeleted = () => {
		selectedRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<Container>
			<Input
				type='text'
				value={inputData}
				onChange={onChange}
				onKeyDown={changeSelete}
				onBlur={() => setSelectedIndex(0)}
			/>
			<MatchedList>
				{matchedList &&
					matchedList.map(
						({ id, name, email, age, gender, phone, address }, index) => (
							<MatchedUser key={id} isSelected={index === selectedIndex}>
								{index === selectedIndex && <div ref={selectedRef} />}
								<p>Name : {name}</p>
								<p>Age : {age}</p>
								<p>Email : {email}</p>
								<p>Gender : {gender}</p>
								<p>Phone : {phone}</p>
								<p>Address : {address}</p>
							</MatchedUser>
						)
					)}
			</MatchedList>
		</Container>
	);
};

export default AutoComplete;

const Container = styled.div`
	width: 500px;
	height: 500px;
	margin: 50px auto;
	* {
		box-sizing: border-box;
		list-style: none;
	}
`;

const Input = styled.input`
	width: 500px;
	height: 50px;
	border-radius: 10px;
	padding: 10px;
	&:focus + * {
		display: block;
	}
`;

const MatchedList = styled.ul`
	display: none;
	height: 1250px;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 5px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #000;
		border-radius: 10px;
	}
`;

const MatchedUser = styled.li<{ isSelected: boolean }>`
	height: 250px;
	padding: 10px 20px;
	${({ isSelected }) => isSelected && 'background-color: black; color: white;'}
	& + & {
		border-top: 1px solid black;
	}
`;
