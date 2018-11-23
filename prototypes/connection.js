module.exports = {
  revel: {
    minor_demo: {
      host: 'https://minor-demo.revelup.com',
      api_key: 'e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195',
      tpl_headers: {
        API_AUTHENTICATION: api_authentication
      }
    }
  },
  tanda: {
    staging: {
      host: 'https://staging.tanda.co/api/v2',
      api_key: 'bearer 8b948cd56c9df2deb3ee678b688f560beb87dd695eba68ff1ca3c08c87b44121',
      tpl_headers:{
        content_type: 'application/json',
        Authorization: api_key
      }
    }
  }
};