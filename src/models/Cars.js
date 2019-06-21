import moment from 'moment';
import uuid from 'uuid';
import user from '../models/user';
class Reflection {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.reflections = [];
    this.reflectionssignin = [];
    this.reflectionscreatecaradd =[];
    this. reflectioncreateorder = [];
  }
  /**
   * 
   * @returns {object} reflection object
   */
  ///////////////////////////////Signup
  
  //////////////////////////////////////End signin
///////////////////////////////create car post ad
  createcarad(data,token) {
    //console.log("tokenmodel"+token);
    const reflection = user.reflections.find(reflect => reflect.token === token);
    
    if(!reflection){
      const reflectioncaraddnotfound  = {"status":404 , "message": "User not found check please"};
     //console.log("cccccccccc"+reflectioncaraddnotfound);
     return reflectioncaraddnotfound;

       


    }
    else {
      //console.log("found="+reflection.email);
     const  myDate =  moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
     const newReflectioncreatecarad = {
    

         id: uuid.v4(),
         user_id:reflection.id,
         email: reflection.email ,
         manufacture:data.manufacture,
         model: data.model ,
         price: parseFloat(data.price),
         status : data.status || 'available' ,
         created_on: myDate,
         modified_on: myDate
         };
    this.reflectionscreatecaradd.push(newReflectioncreatecarad);
    return newReflectioncreatecarad

    }

    
  }
  //////////////////////////////////////create car post a
  ///////////////////////////////create order post
  
  ////////////////////////////////////// end create order post



  /**
   * 
   * @param {uuid} id
   * @returns {object} reflection object
   */
  findOne(id) {
    return this.reflections.find(reflect => reflect.id === id);
  }






  

  findoderOne(id) {
    return this.reflectioncreateorder.find(reflect => reflect.id === id);
  }

  findCarOne(id) {
    return this.reflectionscreatecaradd.find(reflect => reflect.id === id);
  }



  findA1(success , lowPoint) {
return this.reflections.filter(( reflect => reflect.lowPoint === lowPoint) && (reflect => reflect.success === success));
  }

findsoldcarpricerange(q) {
//console.log(Object.keys(q).length);

//console.log(q.status);
//console.log(q.min_price);
//console.log(q.max_price);
  //console.log(min_price);
  //console.log(max_price);
    if(Object.keys(q).length === 0){
   return this.reflectionscreatecaradd;

    }

else if (Object.keys(q).length === 1) {
   return this.reflectionscreatecaradd.filter((reflect => reflect.status === q.status ));

   }
else {

  return this.reflectionscreatecaradd.filter(
    ( reflect => reflect.status === q.status)).filter(reflect => reflect.price > parseFloat(q.min_price)).filter(reflect => reflect.price < parseFloat(q.max_price));

}
  }

  findsoldcars(q) {
  
return this.reflectionscreatecaradd.filter((reflect => reflect.data.status === status ));
  }

  
  /**
   * @returns {object} returns all reflections
   */
  findAll() {
    return this.reflections;
  }

  findAllsigninusers() {
    return this.reflectionssignin;
  }

  findAllcarsads() {
    return this.reflectionscreatecaradd;
  }

  findAllorders() {
    return this.reflectioncreateorder;
  }
  /**
   * 
   * @param {uuid} id
   * @param {object} data 
   */
  update(id, data) {
    const reflection = this.findOne(id);
    const index = this.reflections.indexOf(reflection);
    this.reflections[index].success = data['success'] || reflection.success;
    this.reflections[index].lowPoint = data['lowPoint'] || reflection.lowPoint;
    this.reflections[index].takeAway = data['takeAway'] || reflection.takeAway;
    this.reflections[index].modifiedDate = moment.now()
    return this.reflections[index];
  }

  


 updatecarstatus(id, data, token) {
    const reflection = this.findCarOne(id);
    const index = this.reflectionscreatecaradd.indexOf(reflection);
    const reflectionx = user.reflections.find(reflect => reflect.token === token);
    if(!reflectionx){
      const reflectioncaraddnotfound  = {"status":404 , "message": "User not found check please"};
     //console.log("cccccccccc"+reflectioncaraddnotfound);
     return reflectioncaraddnotfound;

   }

   else{
   if (reflection){   
    if (reflection.user_id === reflectionx.id){
    this.reflectionscreatecaradd[index].status = "sold" ;
       
    return this.reflectionscreatecaradd[index];
  }

  else {

    const reflectioncaraddd = {"status":404 , "message": "Sorry, you are not the ad's Owner"};
          return reflectioncaraddd;
  }
  }
  else {
    const reflectioncaraddd = {"status":404 , "message": "car add not found to be updated to sold"};
          return reflectioncaraddd;

  }
}
  }

  updatecarprice(id, data, token) {
    const reflection = this.findCarOne(id);
    const index = this.reflectionscreatecaradd.indexOf(reflection);
    
    const reflectionx = user.reflections.find(reflect => reflect.token === token);
    if(!reflectionx){
      const reflectioncaraddnotfound  = {"status":404 , "message": "User not found check please"};
     //console.log("cccccccccc"+reflectioncaraddnotfound);
     return reflectioncaraddnotfound;

   }
  else {

    if(reflection){
     //console.log(reflection.status)
     if (reflection.status === "available"){    

    if (reflection.user_id === reflectionx.id){
      
    this.reflectionscreatecaradd[index].price = parseFloat(data.price) ;
       
    return this.reflectionscreatecaradd[index];
  }
  else {

    const reflectioncaraddd = {"status":404 , "message": "Sorry, you are not the ad's Owner"};
          return reflectioncaraddd;
  }

  }
  else {

    const reflectioncaraddd = {"status":404 , "message": "Can not Update this car is sold"};
          return reflectioncaraddd;
  }
    

    }  // end if refelction
    else {
    const reflectioncaraddd = {"status":404 , "message": "car add not found"};
          return reflectioncaraddd;

    }
    }
  
  }

  /**
   * 
   * @param {uuid} id 
   */

   deletecarad(id) {
    const reflection = this.findCarOne(id);
    const index = this.reflectionscreatecaradd.indexOf(reflection);
    this.reflectionscreatecaradd.splice(index, 1);
    return {'message': 'car  Ad successfully deleted'};
  }
  delete(id) {
    const reflection = this.findOne(id);
    const index = this.reflections.indexOf(reflection);
    this.reflections.splice(index, 1);
    return {};
  }
}
export default new Reflection();