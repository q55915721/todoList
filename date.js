//jshint esversion:6

exports.getDate = function() {


  let today = new Date();
  let options = {

    day: 'numeric',
    month: 'short',
    year: 'numeric'
  };

  return today.toLocaleDateString('en-US', options);

};