import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function CountryItem({ item }) {
	const navigate = useNavigate();
	return (
		<Container>
			<Image src={item.flags.png} />
			<Text>{item.subregion}</Text>
			<div>
				<Title>{item.name.common}</Title>
				<StyledButton
					onClick={() =>
						navigate(`${item.name.common}`, { replace: false, state: { item } })
					}
					variant="outlined"
				>
					See more
				</StyledButton>
			</div>
		</Container>
	);
}

const Container = styled.div`
	background-color: #fff;
	height: 14rem;
	min-width: 13rem;
	margin-right: 10px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	box-sizing: border-box;
	overflow: hidden;
	position: relative;
	> div {
		position: absolute;
		bottom: 0rem;
		display: flex;
		align-items: center;
		width: 13rem;
		padding: 20px;
		box-sizing: border-box;
		justify-content: space-between;
	}
`;

const Image = styled.img`
	width: 6rem;
`;

const Text = styled.p`
	color: #000;
	font-size: 0.5rem;
	align-self: flex-start;
	margin: 0;
	position: absolute;
	bottom: 3rem;
`;

const Title = styled.h3`
	color: #000;
	margin: 0;
	max-width: 6rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	align-self: flex-start;
	width: 60%;
`;

const StyledButton = styled(Button)`
	&.css-1rwt2y5-MuiButtonBase-root-MuiButton-root {
		font-size: 0.7rem;
		text-transform: capitalize;
		width: 1rem;
		padding: 0;
		height: 1.5rem;
		color: #000;
		border: 1px solid #000;
		&:hover {
			background-color: #000;
			color: #fff;
		}
	}
`;
