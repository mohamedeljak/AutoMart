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
  create(data) {
    const newReflection = {
      stutas: '1' || ' ',
      data :{

         id: uuid.v4(),
         email: data.email ,
         first_name: data.first_name,
         last_name: data.last_name,
         token : uuid.v4(),
         address :data.address ,
         is_admin : data.is_admin ,
         password : data.password
         
         },
      createdDate: moment.now(),
      modifiedDate: moment.now()
    };
    this.reflections.push(newReflection);
    return newReflection
  }
  //////////////////////////////////////End signup
  ///////////////////////////////Signin
  createsignin(data) {
const newReflectionsign = {
      stutas: '1',
      data :{

         id: uuid.v4(),
         email: data.email ,
         first_name: data.first_name,
         last_name: data.last_name ,
         token : uuid.v4(),
         address :data.address ,
         is_admin : data.is_admin ,
         password : data.password
         },
      createdDate: moment.now(),
      modifiedDate: moment.now()
    };
    this.reflectionssignin.push(newReflectionsign);
    return newReflectionsign
  }
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
     const newReflectioncreatecarad = {
    

         id: uuid.v4(),
         user_id:reflection.id,
         email: reflection.email ,
         manufacture:data.manufacture,
         model: data.model ,
         price: data.price,
         state : data.state ,
         status : data.status || 'available' ,
         created_on: moment.now(),
         modified_on: moment.now()
         };
    this.reflectionscreatecaradd.push(newReflectioncreatecarad);
    return newReflectioncreatecarad

    }

    
  }
  //////////////////////////////////////create car post a
  ///////////////////////////////create order post
  createorderad(data,token,car_id) {
    const reflection = user.reflections.find(reflect => reflect.token === token);
    
    if(!reflection){
      const reflectionodernotfound  = {"status":404 , "message": "User not found check please"};
     return reflectionodernotfound ;
       


    }

   else {
     const reflectionfindcartoorder = this.reflectionscreatecaradd.find(reflect => reflect.id === car_id);
      const reflectionfindcartoorderinorder = this.reflectioncreateorder.find(reflect => reflect.car_id === car_id);  
   //   console.log("gggggggggggggggg"+reflectionfindcartoorderinorder);
      
    if (!reflectionfindcartoorder){
          const reflectionorercaridnotfound = {"status":404 , "message": "this car ad not found"};
          return reflectionorercaridnotfound;
          
    } 

  else {

 if(reflectionfindcartoorderinorder){
                 
              const reflectionorercaridnotfoundx = {"status":404 , "message": "this car  had already ordered"};
          return reflectionorercaridnotfoundx;

          }


 else {
    //console.log("carid"+reflectionfindcartoorder.id);
    const newReflectioncreateorder = {
      

         id: uuid.v4(),   
         user_id:reflection.id,
         car_id : reflectionfindcartoorder.id,
         price: data.price,    
         price_offered : data.price_offered,
         status : 'available' ,
         created_on: moment.now(),
         modified_on: moment.now()
        
      
    };
    this.reflectioncreateorder.push(newReflectioncreateorder);
    return newReflectioncreateorder
  }
  }
  }
  }
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

  
updateorderprice(id, data, token) {
  //console.log("jjjjjjjjjjjjjjjjjjjjjjjjj");
    const reflection = this.findoderOne(id);
    const index = this.reflectioncreateorder.indexOf(reflection);
    const reflectionx = user.reflections.find(reflect => reflect.token === token);
    
    if(!reflectionx){
      const reflectioncaraddnotfound  = {"status":404 , "message": "User not found check please"};
     //console.log("cccccccccc"+reflectioncaraddnotfound);
     return reflectioncaraddnotfound;

   }
 
 else {

     if(reflection){
   if (reflection.user_id === reflectionx.id){     
    this.reflectioncreateorder[index].old_price_offered = data['price_offered'] || reflection.price_offered || reflection.new_price_offered  ;
    this.reflectioncreateorder[index].price_offered = this.reflectioncreateorder[index].old_price_offered; 
    delete this.reflectioncreateorder[index].price_offered;
   this.reflectioncreateorder[index].new_price_offered= data.price ;
    /*
    this.reflections[index].lowPoint = data['lowPoint'] || reflection.lowPoint;
    this.reflections[index].takeAway = data['takeAway'] || reflection.takeAway;
    this.reflections[index].modifiedDate = moment.now()
    */
    return this.reflectioncreateorder[index];
  }
  else {

    const reflectioncaraddd = {"status":404 , "message": "Sorry, you are not the order's Owner"};
          return reflectioncaraddd;
  }

  }//  end if refelction 
 
  else {
 
     const reflectionord = {"status":404 , "message": "Order not found"};
          return reflectionord;

  }

}
  

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