const knex = require("../db");
async function getAll(){
    try {
        let result = await knex('company')
                            .select('*').where('deleted',0);
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
        let result = await knex('company').select('*').where('id',idPackage);
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
        let result = await knex('company').insert(obj);
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
        let result = await knex('company').where("id",obj.id).update(obj);
        return result            
    } catch (error) {
        throw error;
        console.log("--------------------------------------error---------------------------------")
        console.log("error");
        console.log("--------------------------------------error---------------------------------")
    }
}
module.exports ={getAll,getById,insert,update} ;