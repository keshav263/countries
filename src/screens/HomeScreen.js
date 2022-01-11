import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CountryItem from "../components/CountryItem";
import CircularProgress from "@mui/material/CircularProgress";
import useGetCountries from "../hooks/useGetCountries";

export default function HomeScreen() {
	const [getCountries] = useGetCountries();
	const [countries, setCountries] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(async () => {
		console.log("Here");
		setIsLoading(true);
		const { countries } = await getCountries();
		setIsLoading(false);
		setCountries(countries);
	}, []);
	return (
		<Container>
			<SubContainer>
				<GreetingsContainer>
					<Title>What country will you explore first?</Title>
					<Text>
						Think you have seen all of Asia? There is a lot more to learn with
						the data we provide
					</Text>
				</GreetingsContainer>
				<ListContainer>
					{isLoading ? (
						<div
							style={{
								display: "flex",
								alignItems: "center",
								width: "100%",
								justifyContent: "center",
							}}
						>
							<CircularProgress />
						</div>
					) : (
						countries.map((country) => {
							return <CountryItem key={country} item={country} />;
						})
					)}
				</ListContainer>
			</SubContainer>
		</Container>
	);
}

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	color: #f1f1f1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const SubContainer = styled.div`
	width: 60%;
	height: 40vh;
	background-color: #f6f6f6;
	border-radius: 10px;
	box-sizing: border-box;
	padding: 20px 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const GreetingsContainer = styled.div`
	width: 25%;
`;

const Title = styled.h2`
	color: #000;
`;

const Text = styled.p`
	color: #000;
	font-size: 0.8rem;
	line-height: 1.5;
`;

const ListContainer = styled.div`
	width: 65%;
	display: flex;
	align-items: center;
	overflow-x: scroll;
`;
