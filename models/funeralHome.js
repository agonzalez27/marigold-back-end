var mongoose = require('mongoose');

var funeralHomeSchema = new mongoose.Schema({
  name: String,
  street: String,
  city: String,
  county: String,
  state: String,
  zip: Number,
  phone: String,
  fax: String,
  fd: String,
  basic_services_funeral_director: Number,
  embalming: Number,
  dressing_casketing: Number,
  bathing_handling: Number,
  refrigeration: Number,
  visitation: Number,
  funeral_service: Number,
  memorial_service: Number,
  transfer_crematory: Number,
  removal: Number,
  hearse: Number,
  service_vehicle: Number,
  alternative_container: Number,
  rental_casket: Number,
  basic_services_direct_cremation: Number,
  crematory_fee: Number,
  prayer_cards: Number,
  register_book: Number,
  urn: Number,
  casket: Number,
  direct_cremation_total_cost: Number,
  traditional_cremation_total_cost: Number,
  traditional_burial_total_cost: Number,
  location_img_url: String 
});


var funeralHome = mongoose.model('funeralHome', funeralHomeSchema);

module.exports = funeralHome;
