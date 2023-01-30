const knex = require("../db");
async function getAll(){
    try {
        let result = await knex('package_status')
                            .select('*').where('deleted',0);
                            // .select('*');
        return result;            
    } catch (error) {
        throw error;
        console.log("--------------------------------------error---------------------------------")
        console.log("error");
        console.log("--------------------------------------error---------------------------------")
    }
}
async function getById(idPackage){
    try {
        let result = await knex('package_status').select('*').where('id',idPackage);
        return result            
    } catch (error) {
        throw error;
        console.log("--------------------------------------error---------------------------------")
        console.log("error");
        console.log("--------------------------------------error---------------------------------")
    }
}
async function insert(obj){
    try {
        console.log(obj);
        let result = await knex('package_status').insert(obj);
        return result            
    } catch (error) {
        throw error;
        console.log("--------------------------------------error---------------------------------")
        console.log("error");
        console.log("--------------------------------------error---------------------------------")
    }
}
async function update(obj){
    try {
        console.log(obj);
        let result = await knex('package_status').where("id",obj.id).update(obj);
        return result            
    } catch (error) {
        throw error;
        console.log("--------------------------------------error---------------------------------")
        console.log("error");
        console.log("--------------------------------------error---------------------------------")
    }
}
module.exports ={getAll,getById,insert,update} ;