
const api = {
		domain 	: 'https://api.coinmarketcap.com' 	,
		path 	:'/v1/ticker/?limit=100' 			,
		headers : {
			Accept 	: 'application/json' 			,
			headers : {
				'Content-Type' : 'application/json'
			}
		}
	};

export default {
	
	get : async function () {

		return fetch ( api.domain + api.path , {
			...api.headers ,
			method : 'GET'
		});
	}

};
