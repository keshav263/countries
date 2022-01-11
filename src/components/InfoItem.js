import React from "react";
import styled from "styled-components";

const InfoItem = (props) => {
	return (
		<Container>
			<h2>{props.title}</h2>
			<p>{props.value}</p>
		</Container>
	);
};

const Container = styled.div`
	> h2 {
		color: #000;
		margin: 0;
		font-family: "Poppins", serif;
	}
	> p {
		color: #000;
		margin: 0;
	}
`;

export default InfoItem;
