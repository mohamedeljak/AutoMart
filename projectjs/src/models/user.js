import moment from 'moment';
import uuid from 'uuid';

class user {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.reflections = [];
    this.reflectionssignin = [];
      }
  /**
   * 
   * @returns {object} reflection object
   */
  ///////////////////////////////Signup
  create(data) {
    const newReflection = {
      stutas: '1' ,
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
    this.reflections.push(newReflection);
    return newReflection
  }
  //////////////////////////////////////End signup
  ///////////////////////////////Signin
  createsignin(data) {
    const newReflectionsign = {
      stutas: '1' ,
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
 
  findOne(id) {
    return this.reflections.find(reflect => reflect.id === id);
  }

  

  


  findA1(success , lowPoint) {
return this.reflections.filter(( reflect => reflect.lowPoint === lowPoint) && (reflect => reflect.success === success));
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

  
 
  

  /**
   * 
   * @param {uuid} id 
   */

   
  delete(id) {
    const reflection = this.findOne(id);
    const index = this.reflections.indexOf(reflection);
    this.reflections.splice(index, 1);
    return {};
  }
}
export default new user();