"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _uuid = _interopRequireDefault(require("uuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Reflection {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.reflections = [];
    this.reflectionssignin = [];
    this.reflectionscreatecaradd = [];
    this.reflectioncreateorder = [];
  }
  /**
   * 
   * @returns {object} reflection object
   */
  ///////////////////////////////Signup


  create(data) {
    const newReflection = {
      stutas: '1' || ' ',
      data: {
        id: _uuid.default.v4(),
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name || ' ',
        token: _uuid.default.v4(),
        address: data.address || ' ',
        is_admin: data.is_admin || ' ',
        password: data.password
      },
      createdDate: _moment.default.now(),
      modifiedDate: _moment.default.now()
    };
    this.reflections.push(newReflection);
    return newReflection;
  } //////////////////////////////////////End signup
  ///////////////////////////////Signin


  createsignin(data) {
    const newReflectionsign = {
      stutas: '1' || ' ',
      data: {
        id: _uuid.default.v4(),
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name || ' ',
        token: _uuid.default.v4(),
        address: data.address || ' ',
        is_admin: data.is_admin || ' ',
        password: data.password
      },
      createdDate: _moment.default.now(),
      modifiedDate: _moment.default.now()
    };
    this.reflectionssignin.push(newReflectionsign);
    return newReflectionsign;
  } //////////////////////////////////////End signin
  ///////////////////////////////create car post ad
  ////////////////  goes to ads model


  createcarad(data) {
    const newReflectioncreatecarad = {
      stutas: '1' || ' ',
      data: {
        id: _uuid.default.v4(),
        email: data.email,
        manufacture: data.manufacture,
        model: data.model || ' ',
        price: data.price,
        state: data.state || 'new',
        status: data.status || 'available',
        created_on: _moment.default.now(),
        modified_on: _moment.default.now()
      }
    };
    this.reflectionscreatecaradd.push(newReflectioncreatecarad);
    return newReflectioncreatecarad;
  } //////////////////////////////////////create car post a
  ///////////////////////////////create order post


  createorderad(data) {
    const newReflectioncreateorder = {
      stutas: '1' || ' ',
      data: {
        id: _uuid.default.v4(),
        car_id: data.car_id,
        price: data.price,
        price_offered: data.price_offered,
        status: 'available',
        created_on: _moment.default.now(),
        modified_on: _moment.default.now()
      }
    };
    this.reflectioncreateorder.push(newReflectioncreateorder);
    return newReflectioncreateorder;
  } ////////////////////////////////////// end create order post

  /**
   * 
   * @param {uuid} id
   * @returns {object} reflection object
   */
  /////////////////////////  end to ads model


  findOne(id) {
    return this.reflections.find(reflect => reflect.id === id);
  }

  findoderOne(id) {
    return this.reflectioncreateorder.find(reflect => reflect.data.id === id);
  }

  findCarOne(id) {
    return this.reflectionscreatecaradd.find(reflect => reflect.data.id === id);
  }

  findA1(success, lowPoint) {
    return this.reflections.filter((reflect => reflect.lowPoint === lowPoint) && (reflect => reflect.success === success));
  } /////  to ads models ////


  findsoldcarpricerange(q) {
    console.log(Object.keys(q).length);
    console.log(q.status);
    console.log(q.min_price);
    console.log(q.max_price); //console.log(min_price);
    //console.log(max_price);

    if (Object.keys(q).length === 0) {
      return this.reflectionscreatecaradd;
    } else if (Object.keys(q).length === 1) {
      return this.reflectionscreatecaradd.filter(reflect => reflect.data.status === q.status);
    } else {
      return this.reflectionscreatecaradd.filter(reflect => reflect.data.status === q.status).filter(reflect => reflect.data.price > parseFloat(q.min_price)).filter(reflect => reflect.data.price < parseFloat(q.max_price));
    }
  }

  findsoldcars(q) {
    return this.reflectionscreatecaradd.filter(reflect => reflect.data.status === status);
  } /////////  to ads model

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
    this.reflections[index].modifiedDate = _moment.default.now();
    return this.reflections[index];
  }

  updateorderprice(id, data, new_price) {
    const reflection = this.findoderOne(id);
    const index = this.reflectioncreateorder.indexOf(reflection);
    this.reflectioncreateorder[index].data.old_price_offered = data.data['price_offered'] || reflection.data.price_offered;
    this.reflectioncreateorder[index].data.price_offered = this.reflectioncreateorder[index].data.old_price_offered;
    delete this.reflectioncreateorder[index].data.price_offered;
    this.reflectioncreateorder[index].data.new_price_offered = new_price;
    /*
    this.reflections[index].lowPoint = data['lowPoint'] || reflection.lowPoint;
    this.reflections[index].takeAway = data['takeAway'] || reflection.takeAway;
    this.reflections[index].modifiedDate = moment.now()
    */

    return this.reflectioncreateorder[index];
  }

  updatecarstatus(id, data) {
    const reflection = this.findCarOne(id);
    const index = this.reflectionscreatecaradd.indexOf(reflection);
    this.reflectionscreatecaradd[index].data.status = "sold";
    return this.reflectionscreatecaradd[index];
  }

  updatecarprice(id, data, car_price) {
    const reflection = this.findCarOne(id);
    const index = this.reflectionscreatecaradd.indexOf(reflection);
    this.reflectionscreatecaradd[index].data.price = parseFloat(car_price);
    return this.reflectionscreatecaradd[index];
  }
  /**
   * 
   * @param {uuid} id 
   */


  deletecarad(id) {
    const reflection = this.findCarOne(id);
    const index = this.reflectionscreatecaradd.indexOf(reflection);
    this.reflectionscreatecaradd.splice(index, 1);
    return {
      'message': 'car  Ad successfully deleted'
    };
  }

  delete(id) {
    const reflection = this.findOne(id);
    const index = this.reflections.indexOf(reflection);
    this.reflections.splice(index, 1);
    return {};
  }

}

var _default = new Reflection();

exports.default = _default;