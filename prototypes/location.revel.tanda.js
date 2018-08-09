var appRoot = require('app-root-path');
var request = require('request');
var morgan = require('morgan');
var winston = require('winston');
var Promise = require('bluebird');

/*
curl --header "Authorization: bearer 8b948cd56c9df2deb3ee678b688f560beb87dd695eba68ff1ca3c08c87b44121" https://staging.tanda.co/api/v2/locations
curl --header "API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195" https://minor-demo.revelup.com/enterprise/Establishment/?format_json
*/

var options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

/*
var logger = new winston.Logger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false,
});
*/

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info);
  }
}

/**
 * 
 * API Dictionary
 * 
 */
var revel_api_key = 'e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195';
var revel_haeders = {
    'API-AUTHENTICATION' : revel_api_key,  
}

var tanda_api_key = 'bearer 8b948cd56c9df2deb3ee678b688f560beb87dd695eba68ff1ca3c08c87b44121';
var tanda_headers = {
  'content-type' : 'application/json',
  'Authorization': tanda_api_key
}

var revel_get__locations = {
  url: "https://minor-demo.revelup.com/enterprise/Establishment/?format=json",
  headers: revel_haeders
};

var revel_get__location = {
  url: 'https://minor-demo.revelup.com/enterprise/Establishment/?format=json&id=13',
  headers: revel_haeders
};

var revel_get__user = {
  url: 'https://minor-demo.revelup.com/enterprise/User/?format=json',
  headers: revel_haeders
};

var revel_get__address = {
  url: 'https://minor-demo.revelup.com/enterprise/Address',
  headers: revel_haeders
};

var tanda_post__locations = {
  url: 'https://my.tanda.co/api/v2/locations',
  method: 'POST',
  headers: tanda_headers,
  /*body: {
    "name": "Metro Site #1",
    "short_name": "MS1",
    "latitude": -27.467004,
    "longitude": 153.025453,
    "address": "Huakwang"
  }*/
};


var tanda_get__locations = {
  url: 'https://my.tanda.co/api/v2/locations',
  headers: tanda_headers
};


/**
 * ------------------------
 * API Activity
 * ------------------------
 */

 // params.in - for params 
 // params.out - for resolve

function fn_tanda_get__locations(params){
  return new Promise(function(resolve,reject){
    request(tanda_get__locations, function(error, response, body){
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        //console.log(info);
        resolve(info);
      }
      else{
        resolve(error);
      }
    });
  });
}

function fn_revel_get__addresses(params){
/*
  var revel_get__address = {
    url: 'https://minor-demo.revelup.com/enterprise/Address/?format=json',
    headers: revel_haeders
  };
*/
  return new Promise(function(resolve,reject){
    revel_get__address['url'] = revel_get__address['url'] + "?format=json";
    request(revel_get__address, function(error, response, body){
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        console.log(info);
        
        params.out["addresses"] = info;

        resolve({in:params.in, out: params.out });
      }
      else{
        resolve({in:params.in, out: error});
      }
    });

  });
}

function fn_revel_get__locations(params){
  return new Promise(function(resolve,reject){
    request(revel_get__locations, function(error, response, body){
      if (!error && response.statusCode == 200) {        
        var info = JSON.parse(body);         
        params["establishments"] = info;
        resolve(params);
      }
      else{
        resolve({in:params.in, out: error});
      }
    });
  });
}



function fn_tanda_post__locations(params){
  return new Promise(function(resolve,reject){

    request(tanda_post__locations, function(error, response, body){
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        console.log(info);
        resolve(info);
      }
      else{
        resolve(error);
      }
    });

  });
}

function b(params){
  return new Promise(function(resolve,reject){
    //do something
    
    console.log(params);
    
    request(tanda_get__locations, function(error, response, body){
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        //console.log(info);
        resolve(body);
      }
      else{
        resolve(error);
      }
    });

    
  });
}

function a(params){
  return new Promise(function(resolve, reject){
    //do something
    
    console.log(params);
    
    request(revel_get__locations, function(error, response, body){
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        //console.log(info);
        resolve(body);
      }
      else{
        resolve(error);
      }
    });
  });
}


fn_revel_get__locations({})
  .then(function(messageObject){ // log location
    console.log(messageObject);
    return messageObject;
  })
  .then(function(messageObject){ // select location    
    _establishments = messageObject.establishments.objects;
    messageObject["establishments"] = _establishments
    //console.log(messageObject);
    /* select 13 for demo
    for(var i=0; i< messageObject["establishments"].length; i++){
      if( messageObject["establishments"][i].id == 13 ){
        console.log(messageObject["establishments"][i]);
        return {"establishments" : [messageObject["establishments"][i] ]};
      }
    }*/
    return messageObject;
  })
  .then(function(messageObject){
    console.log(messageObject);
    console.log();
    return new Promise(function(resolve,reject){
      request(
        {
          url: 'https://minor-demo.revelup.com/resources/Address/?format=json',
          headers: revel_haeders
        }, function(error, response, body)
        {
          if (!error && response.statusCode == 200) {        
            var info = JSON.parse(body);         
            //params["address"] = info;
            console.log('-- address --');
            console.log(info.objects);
            let  addr_object = {};

            addr_object["address"] = info.objects;
            resolve({old:messageObject ,new: addr_object});
          }
          else{
            reject(new Error());
          }
        }
      );
    });
    
  })
  .then(function(messageObject){
    console.log(messageObject);
     var tmpl_post__location = {
      url: 'https://my.tanda.co/api/v2/locations',
      method: 'POST',
      headers: tanda_headers,
      body: {
        "name": "Springfield",
        "short_name": "S",
        "latitude": -27.467004,
        "longitude": 153.025453,
        "address": "Springfield Powerplant Logistics Centre"        
      }
      
      
    };
/*
    for(var i=0;i< messageObject.establishments.length; i++){
      request()
    }
*/
  });
  /*
  .then(function(messageObject){
    console.log(messageObject);

    //var establishments_addresses = params.out;
    _messageObject = JSON.parse(messageObject);

    var addresses = messageObject.out.addresses;
    var _addresses = {};
    _addresses["latitude"] = addresses.latitude;
    _addresses["longitude"] = addresses.longitude;
    _addresses["line_1"] = addresses.line_1;
    _addresses["line_2"] = addresses.line_2;
    _addresses["district"] = addresses.district;
    _addresses["province"] = addresses.province;
    _addresses["zipcode"] = addresses.zipcode;
    //line_1 + line_2 + district + province + zipcode
    

    return {
      in: params.in,
      out: _establishments.objects
    };


  });
*/
/*
fn_revel_get__locations(params)
  //.then(JSON.parse)
  .then(function(establishments){ // pick up needed element
    //object preparation
    //console.log(establishments);
    _establishments = JSON.parse(establishments);
    //_meta = _establishment.meta;
    //_objects = _establishment.objects;
    return _establishments.objects; 
  })
  .then(function(establishments){ // print needed element
    
//meta.objects[x].address: '/resources/Address/1/' --> https://minor-demo.revelup.com/resources/Address/1/?format=json
//meta.objects[x].name: 'AMMATA'
//meta.objects[x].manager: '/enterprise/User/1/', --> https://minor-demo.revelup.com/resources/User/1/?format=json
//meta.objects[x].email: 'test@guru-services.com',
//meta.objects[x].site_number: 'PZ-3092',

    establishments.forEach(establishment => {
      console.log('======== SITE ========');
      console.log(establishment.address);
      console.log(establishment.name);
      console.log(establishment.manager);
      console.log(establishment.email);
      console.log(establishment.site_number);
    });
    
    return establishments;
  })
  .then(function(establishments){ // fullfil object
    // 1. get address
    // 2. get manager
    // 3. 
    
   // var obj = JSON.parse(jsonStr);
//obj['theTeam'].push({"teamId":"4","status":"pending"});
//jsonStr = JSON.stringify(obj);
    return establishments;
  })
  //.then(fn_tanda_post__locations)
  //.then(JSON.parse)
  //.then(function(locations){

//"latitude": 37.7898646, 
//"longitude": -122.3979229, 
//"line_1": "47/16 หมู่ที่6 ตำบลดอนหัวฬอ", 
//"line_2": "อำเภอเมืองชลบุรี จังหวัดชลบุรี", 
//"district": "",
//"province": "Chon Buri", 
//"zipcode": "20000"
//line_1 + line_2 + district + province + zipcode
  //  console.log(locations);
  //})
  */