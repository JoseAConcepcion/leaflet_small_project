let template = require('./countries.json');

let database = require('../data/data.json');

let countries_t = (template.features);

// console.log(all_data.countries.ven);

function get_element_by_id(obj, id_val) {
    return Object.keys(obj).find(id => id === id_val);
}


function get_geojson(countries_t,database){
    countries_t.forEach(countrie => {
        countrie.id = countrie.id.toLowerCase();
        let id = get_element_by_id(database.countries, countrie.id);
        if (id != null) {
            let properties = countrie.properties;

            // Add base properties
            properties = database.countries[id];

            // Add sports properties
            const sports = database.sports;
            properties.sports
            Object.keys(sports).forEach(sport => {
                let female = sports[sport][female][countries].find(id);
                let male = sports[sport][male][countries].find(id);
                // properties.
            });
        }
        else {
            countrie.properties.no_data = 'No data';
        }
    });
}







