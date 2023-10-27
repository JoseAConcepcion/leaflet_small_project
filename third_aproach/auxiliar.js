const {countriesData} = require('./countries');
const countries = require('./countries.json');
const database = require('../data/data.json');

const found = [];
Object.keys(database.countries).forEach(id => {
    const find = countriesData.features.find(country => country.id === id);

    if(find == undefined){
        found.push(id);
    }
});
console.log(found);

// console.log(all_data.countries.ven);

function get_element_by_id(obj, id_val) {
    return Object.keys(obj).find(id => id === id_val);
}


function get_feautures(template,database){

    let countries_t = (template.features);
    countries_t.forEach(countrie => {
        countrie.id = countrie.id.toLowerCase();
        let id = get_element_by_id(database.countries, countrie.id);
        if (id != undefined) {
            let properties = countrie.properties;

            // Add base properties
            properties = database.countries[id];

            // Add sports properties
            const sports = database.sports;
            properties.sports = {};

            Object.keys(sports).forEach(sport => {
                let female = sports[sport].female.countries.find(e => e.country_id == id);
                let male = sports[sport].male.countries.find(e => e.country_id == id);

                properties.sports[sport] = {"male":"","female":""}

                properties.sports[sport].male = 'No participation';
                properties.sports[sport].female = 'No participation';

                if(male != null){properties.sports[sport].male = male;}
                if(female!=null){properties.sports[sport].female = female;}
            });

            
            countrie.properties = properties;
        }
        else {
            countrie.properties.country_name = countrie.properties.name;
        }
        
    });
    // Object.keys(database.countries).forEach(c_db => {

        
    // });
    return countries_t;
}

function get_geojson(template,database) {
    const features = get_feautures(template,database);
    // console.log(features);
    let geojson = (template);
    geojson.features = features;
    return geojson;
}


// const countries_info = get_geojson(template,database);










