logger.stream = {
  write: function(message, encoding){
    logger.info(message);
  }
}

module.exports = logger;