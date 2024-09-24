const { connect,getHazelcastClient } = require('./../connection/hazelcastClient');

async function createStudent(body) {
    try {
        if(getHazelcastClient() != undefined || getHazelcastClient() != null){
            const map = await getHazelcastClient().getMap('student');
            await map.put(body.key, body.value);
            console.log(`Entry created: ${body.key} => ${body.value}`);
            return true;
        }else{
            return false;
        }
        
    } catch (err) {
        console.error('Error creating entry:', err);
    }
}

module.exports = {
    createStudent
};
