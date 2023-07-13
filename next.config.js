 const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');


module.exports = (phase) =>{
   
   if(phase === PHASE_DEVELOPMENT_SERVER){
    return{
        env:{
            mongodb_username: 'ajaykumar',
            mongodb_password: 'jack1008',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'nextjs-site-dev',
        }
    }
   }
    return{

    env:{
        mongodb_username: 'ajaykumar',
        mongodb_password: 'jack1008',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'nextjs-site',
    }
}
};