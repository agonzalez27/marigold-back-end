var FuneralHome = require('../models/funeralHome')

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
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

  FuneralHome.findById(id, function(err, funeralHome){
    if(err) next(err);

    res.json(funeralHome);
  })
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

    FuneralHome.save(function(err, updatedFuneralHome){
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
