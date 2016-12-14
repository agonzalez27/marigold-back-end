var FuneralHome = require('../models/funeralHome');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy,
  sendEmail: sendEmail
}

function index(req, res, next) {
  FuneralHome.find({}, function(err, funeralHomes){
    if (err) next(err);

    res.json(funeralHomes)
  }).select('-__v');
}

function create(req, res, next){
  var funeralHome = new FuneralHome(req.body);

  funeralHome.save(function(err, savedFuneralHome){
    if(err) next(err);

    res.json(savedFuneralHome)
  });
}

function show(req, res, next){
  var id = req.params.id;
  var funeralHomeData = {}

  FuneralHome.findById(id, function(err, funeralHome){
    if(err) next(err);
    funeralHomeData = funeralHome
    res.json(funeralHome);
  })
  // .request('https://api.yelp.com/v3/businesses/'+ funeralHomeData.yelpId, headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer DMPhWN0AwnOoL6EVFifWMHH3S2NalpivlG5xFM8Go1cA4mHKHm9hROlxybH-jt-oVc_86l93QZ9NAPwwX0u8M-Y6E3nfTvF4Tx4oLE_9x5k6TQBq9qoAa2dXIZ9RWHYx'
  //     }, function(err, res, body) {
  //       if(err) next(err)
  //       res.json(body)
  //       console.log(body)
  //   });

}

function update(req, res, next){
  var id = req.params.id;

  FuneralHome.findById(id, function(err, funeralHome){
    if(err) next(err);

    funeralHome.name = req.body.name;
    funeralHome.street = req.body.street;
    funeralHome.city = req.body.city;
    funeralHome.county = req.body.county;
    funeralHome.state = req.body.state;
    funeralHome.zip = req.body.zip;
    funeralHome.phone = req.body.phone;
    funeralHome.fax = req.body.fax;
    funeralHome.fd = req.body.fd;
    funeralHome.basic_services_funeral_director = req.body.basic_services_funeral_director;
    funeralHome.embalming = req.body.embalming;
    funeralHome.dressing_casketing = req.body.dressing_casketing;
    funeralHome.bathing_handling = req.body.bathing_handling;
    funeralHome.refrigeration = req.body.refrigeration;
    funeralHome.visitation = req.body.visitation;
    funeralHome.funeral_service = req.body.funeral_service;
    funeralHome.memorial_service = req.body.memorial_service;
    funeralHome.transfer_crematory = req.body.transfer_crematory;
    funeralHome.removal = req.body.removal;
    funeralHome.hearse = req.body.hearse;
    funeralHome.service_vehicle = req.body.service_vehicle;
    funeralHome.alternative_container = req.body.alternative_container;
    funeralHome.rental_casket = req.body.rental_casket;
    funeralHome.basic_services_direct_cremation = req.body.basic_services_direct_cremation;
    funeralHome.crematory_fee = req.body.crematory_fee;
    funeralHome.prayer_cards = req.body.prayer_cards;
    funeralHome.register_book = req.body.register_book;
    funeralHome.urn = req.body.urn;
    funeralHome.casket = req.body.casket;
    funeralHome.direct_cremation_total_cost = req.body.direct_cremation_total_cost;
    funeralHome.traditional_cremation_total_cost = req.body.traditional_cremation_total_cost;
    funeralHome.traditional_burial_total_cost = req.body.traditional_burial_total_cost;
    funeralHome.location_img_url = req.body.location_img_url;
    funeralHome.email = req.body.email;
    funeralHome.yelpId = req.body.yelpId;

    funeralHome.save(function(err, updatedFuneralHome){
      if(err) next(err);

      res.json(updatedFuneralHome);
    });
  });
}

function destroy(req, res, next){
  var id = req.params.id;

  FuneralHome.remove({_id: id}, function(err) {
    if(err) next(err);

    res.json({message: 'Funeral Home Successfully Deleted.'})
  });
}

function sendEmail(req, res) {

var data = req.body;
var id = data.id;
var email = email;
FuneralHome.find({}, function(err, homes){
  console.log(homes);
})

FuneralHome.findById(id, function(err, funeralHome){
  if(err) return console.log(err);

  email = funeralHome.email

  transporter.sendMail({
      from: data.contactEmail,
      to: email,
      subject: 'Message from ' + data.contactName,
      text: data.contactMsg
  });

  res.json(data);

})

};
