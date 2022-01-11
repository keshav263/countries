export default function getCountries() {
	const getCountries = async () => {
		try {
			const response = await fetch(
				"https://restcountries.com/v3.1/region/asia",
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			// console.log(response);
			const responseJson = await response.json();
			// console.log(responseJson);
			return {
				countries: responseJson,
			};
		} catch (error) {
			console.log(error);
		}
	};
	return [getCountries];
}
