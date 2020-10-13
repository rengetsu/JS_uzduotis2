window.players = {
    rows: {
        current: null,
        rows:
		{
			production:{
				device_os: "ios",
				login: "ios_user_1",
				name: "iOS User 1",
				status: "active",
				level: "2",
				coins: "-5000"
			},
			staging:{
				device_os: "ios",
				login: "ios_user_2",
				name: "iOS User 2",
				status: "nctive",
				level: "4",
				coins: "12500"
			}
		},
		//[],
        getRow: function (whereKey = '') {

        },
        updateRow: function (key = '', newvalue = '') {
			players.rows.rows.key = newvalue;
        },
        deleteRow: function (whereKey = '') {

        }
    },
	// Gauti visų serverių vartotojus ir jų duomenis paduoti į "players.rows.rows" (sukurti funkciją);
	getAllServersPlayers : function (){
		
		// Gaunam serveriu sarasa ir uzrasom i masyva
		let mas = servers.getAvailableServers();
			
		// Suzinom kiek serveriu masyve
		let kiek = mas.length;
		
		// Ciklas kuris gauna is kiekvieno serverio vartotojus ir uzraso i players.rows.rows;
		for( let i = 0; i < kiek; i++ )
		{
			// Gaunam server name (serverio varda) is kurio imsim vartotojus
			let server_name = mas[i];
			
			try{
				// Siunciam fetch requesta kad iš JSON failo paimt players (vartotojus)
				players.rows.rows[i] = [ [ players.fetch(server_name, 'players.json') ] ];
				
				// Loginam funkcija jai sekmingai pridejom vartotoju
				logssystem.log("Pridejom vartotoju i players.rows.rows is serverio " + server_name,
				[ [ requests.get(server_name, 'players.json') ] ]);
			}
			catch{
				// Loginam funkcija (jai nutiko erroras)
				logssystem.error("JSON fetch request error!", [ [ requests.get(server_name, 'players.json') ] ]);
			}
		}
	},
	// Gauti visų serverių aktyvius vartotojus (sukurti funkciją);
	getAllServersActivePlayers : function (){
		
		// Gaunam serveriu sarasa ir uzrasom i masyva
		let mas = servers.getAvailableServers();
			
		// Suzinom kiek serveriu masyve
		let kiek = mas.length;
		let players_check = [];
		// Ciklas kuris gauna is kiekvieno serverio vartotojus ir uzraso i players.rows.rows jai player active
		for( let i = 0; i < kiek; i++ )
		{
			// Gaunam server name (serverio varda) is kurio imsim vartotojus
			let server_name = mas[i];
			
			try{
				// Siunciam fetch requesta kad iš JSON failo paimt players (vartotojus)
				players_check[i] = [ [ players.fetch(server_name, 'players.json') ] ];
				
				// tikrinam ar players status active
				if( players_check[i].status == 'active' )
				{
					// Jai sekmingai uzrasom i masyva
					players.rows.rows[i] = players_check[i];
					
					// Loginam funkcija jai sekmingai pridejom active vartotoja
					logssystem.log("Pridejom nauja active vartotoja " + players_check[i].name,
					players_check[i].name);
				}
				else
				{
					// Loginam errora, kad vartotojas ne aktyvus ir todel ne pridejom
					logssystem.error("Vartotojas " + players_check[i].name + " ne aktyvus! Ne pridejom!",
					players_check[i].name);
				}
			}
			catch{
				// Loginam funkcija (jai nutiko erroras)
				logssystem.error("Pridejimo erroras!", players_check[i].name);
			}
		}
	},
	// Gauti visų serverių užblokuotus vartotojus, kurių "status" reikšmė lygi "banned" (sukurti funkciją);
	getAllServersBannedPlayers : function (){
		
		// Gaunam serveriu sarasa ir uzrasom i masyva
		let mas = servers.getAvailableServers();
			
		// Suzinom kiek serveriu masyve
		let kiek = mas.length;
		let players_check = [];
		// Ciklas kuris gauna is kiekvieno serverio vartotojus ir uzraso i players.rows.rows jai player banned;
		for( let i = 0; i < kiek; i++ )
		{
			// Gaunam server name (serverio varda) is kurio imsim vartotojus
			let server_name = mas[i];
			
			try{
				// Siunciam fetch requesta kad iš JSON failo paimt players (vartotojus)
				players_check[i] = [ [ players.fetch(server_name, 'players.json') ] ];
				
				// tikrinam ar players status active
				if( players_check[i].status == 'banned' )
				{
					// Jai sekmingai uzrasom i masyva
					players.rows.rows[i] = players_check[i];
					
					// Loginam funkcija jai sekmingai pridejom active vartotoja
					logssystem.log("Pridejom nauja banned vartotoja " + players_check[i].name,
					players_check[i].name);
				}
				else
				{
					// Loginam errora, kad vartotojas ne aktyvus ir todel ne pridejom
					logssystem.error("Vartotojas " + players_check[i].name + " aktyvus! Ne pridejom!",
					players_check[i].name);
				}
			}
			catch{
				// Loginam funkcija (jai nutiko erroras)
				logssystem.error("Pridejimo erroras!", players_check[i].name);
			}
		}
	},
	// Gauti visų serverių vartotojus, kurių "coins" reikšmė neigiama (sukurti funkciją);
	getAllServersNegativeCoinsPlayers : function (){
		
		// Gaunam serveriu sarasa ir uzrasom i masyva
		let mas = servers.getAvailableServers();
			
		// Suzinom kiek serveriu masyve
		let kiek = mas.length;
		
		// Ciklas kuris gauna is kiekvieno serverio vartotojus ir uzraso i players.rows.rows jai coins neigiama;
		for( let i = 0; i < kiek; i++ )
		{
			// Gaunam server name (serverio varda) is kurio imsim vartotojus
			let server_name = mas[i];
			let players_check = [];
			try{
				// Siunciam fetch requesta kad iš JSON failo paimt players (vartotojus)
				players_check[i] = [ [ players.fetch(server_name, 'players.json') ] ];
				
				// tikrinam ar players status active
				if( players_check[i].coins < 0 )
				{
					// Jai sekmingai uzrasom i masyva
					players.rows.rows[i] = players_check[i];
					
					// Loginam funkcija jai sekmingai pridejom active vartotoja
					logssystem.log("Pridejom nauja vartotoja su neigiama coins" + players_check[i].name,
					players_check[i].name);
				}
				else
				{
					// Loginam errora, kad vartotojas ne aktyvus ir todel ne pridejom
					logssystem.error("Vartotojas " + players_check[i].name + " turi coins! Ne pridejom!",
					players_check[i].name);
				}
			}
			catch{
				// Loginam funkcija (jai nutiko erroras)
				logssystem.error("JSON fetch request error!", players_check[i].name);
			}
		}
	},
	// Vartotojams, kurių "coins" reikšmė neigiama, reikšmę pakeisti į 0 (sukurti funkciją);
	changeNegativeCoinBalance : function (){
		
		// Uzrasom visus players i masyva
		let mas = players.rows.rows;
		
		// Gaunam serveriu sarasa ir uzrasom i masyva
		let masser = servers.getAvailableServers();
			
		// Suzinom kiek serveriu masyve
		let kiek = masser.length;
		
		// Ciklas
		for( let i = 0; i < kiek; i++ )
		{
			let server_name = masser[i];
			if( mas.server_name.coins < 0 )
			{
				players.rows.rows.server_name.coins = 0;
			}
		}
	},
    fetch: function (serverName) {
        requests.get(serverName, 'players.json');
    }
}