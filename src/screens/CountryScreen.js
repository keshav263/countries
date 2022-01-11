/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import InfoItem from "../components/InfoItem";
import ISO from "../iso.json";

export default function CountryScreen(props) {
	const location = useLocation();
	const [item, setItem] = useState(location.state.item);
	const [languages, setLanguages] = useState([]);
	const [borders, setBorders] = useState([]);
	useEffect(() => {
		for (const [key, value] of Object.entries(item.languages)) {
			setLanguages((languages) => [...languages, value]);
		}
	}, []);

	useEffect(() => {
		item.borders.map((border) => {
			ISO.map((country) => {
				if (country["alpha-3"] === border) {
					setBorders((borders) => [...borders, country["name"]]);
				}
			});
		});
	}, []);

	return (
		<Container>
			<Image src="https://image.freepik.com/free-photo/mesmerizing-scenery-green-mountains-with-cloudy-sky-surface_181624-27189.jpg" />
			<Title>{item.name.common}</Title>
			<SubTitle>{item.name.official}</SubTitle>
			<Highlights>
				<InfoItem title="Region" value={item.region} />
				<InfoItem title="Subregion" value={item.subregion} />
				<InfoItem title="Population" value={item.population} />
			</Highlights>
			<div className="languages">
				<span>Languages spoken: </span>
				{languages.map((lang) => (
					<span>{lang}</span>
				))}
			</div>
			<div className="borders">
				<span>Surrounded by: {borders.join(",")} </span>
			</div>
		</Container>
	);
}

const Image = styled.img`
	position: absolute;
	z-index: -1;
	height: 100vh;
	width: 100vw;
`;

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	color: #f1f1f1;
	display: flex;
	flex-direction: column;
	align-items: center;
	& .languages {
		margin-top: 20px;
		font-size: 1.5rem;
		font-family: "Poppins", serif;
	}
	& .borders {
		font-size: 1.5rem;
		font-family: "Poppins", serif;
		width: 60%;
		text-align: center;
	}
`;

const Title = styled.h1`
	color: #000;
	font-size: 6vw;
	margin: 0;
	font-family: "Playfair Display", serif;
	margin-top: 10rem;
`;

const SubTitle = styled.h3`
	font-size: 2vw;
	color: #000;
	margin: 0;

	font-family: "Poppins", serif;
`;

const Highlights = styled.div`
	backdrop-filter: blur(13px) saturate(127%);
	-webkit-backdrop-filter: blur(13px) saturate(127%);
	background-color: rgba(241, 241, 241, 0.4);
	border-radius: 12px;
	border: 1px solid rgba(255, 255, 255, 0.125);
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 10rem;
	border-radius: 1rem;
	width: 80%;
	margin-top: 4rem;
`;
