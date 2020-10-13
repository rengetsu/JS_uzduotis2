window.servers = {
    rows: {
        available: [],
        current: "production",
        rows: {
            production: {
                url: "/data/production/",
                name: "Production Server",
                status: "enabled"
            },
            staging: {
                url: "/data/staging/",
                name: "Staging Server",
                status: "enabled"
            },
            dev: {
                url: "/data/staging/",
                name: "Staging Server",
                status: "disabled"
            }
        },
        getRow: function (whereKey = '') {
        },
        updateRow: function (object) {
        },
        deleteRow: function (whereKey = '') {
        }
    },
    getAvailableServers: function (){
		// Iš servers.rows.rows objekto surinktų visus "keys" į masyvą
		let serveriai = Object.keys(servers.rows.rows);
		
		// Būtų gerai, jei atsifiltruotum serverius pagal "status" reikšmę
		let masyvo_ilgis = serveriai.length;
		
		let serveriai_status = [
			[servers.rows.rows.production.status],
			[servers.rows.rows.staging.status],
			[servers.rows.rows.dev.status]
			];
		
		// sort count - skaitiklis atfiltruotams serveriams is available masyvo
		let sort_count = 0;
		
		for( let i = 0; i < masyvo_ilgis; i++ )
		{
			// ir grąžintum tik tuos, kurių "status" reikšmė lygi "enabled";
			if( serveriai_status[i][0] == 'enabled' )
			{
				// servers.rows.available reikšmė turi būti nustatyta į gautą masyvą;
				servers.rows.available[sort_count] = serveriai[i];
				
				// Pridėdam 1 prie to, kiek serverių jau filtruota
				sort_count++;				
			}
			else if( serveriai_status[i][0] == 'disabled' )
			{
				// Nieko neįvyksta
			}
		}
		
		// Funkcija turi užloginti su logssystem.js;
		logssystem.log("Gražinam atsifiltruotą serverių masyvą", servers.rows.available);
		
		// Funkcija turi grąžinti masyvą, pvz.: ['production', 'staging']
		return servers.rows.available;
    }
}