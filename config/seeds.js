var mongoose = require('./database');

var FuneralHome = require('../models/funeralHome');

var funeralHomes = [
 {
   "name": "Funeraria Del Angel Oxnard",
   "street": "401 West Channel Islands Blvd. ",
   "city": "Oxnard",
   "county": "Ventura County ",
   "state": "California",
   "zip": 93033,
   "phone": "(805) 487-4911",
   "fax": "(805) 487-8970",
   "fd": "FD 1104",
   "basic_services_funeral_director": 1595,
   "embalming": 895,
   "dressing_casketing": 395,
   "bathing_handling": 150,
   "refrigeration": 895,
   "visitation": 395,
   "funeral_service": 195,
   "memorial_service": 195,
   "transfer_crematory": 125,
   "removal": 495,
   "hearse": 295,
   "service_vehicle": 195,
   "alternative_container": 145,
   "rental_casket": 1295,
   "basic_services_direct_cremation": 380,
   "crematory_fee": 275,
   "prayer_cards": 50,
   "register_book": 80,
   "urn": 295,
   "casket": 1195,
   "direct_cremation_total_cost": 2315,
   "traditional_cremation_total_cost": 5275,
   "traditional_burial_total_cost": 5785,
   "location_img_url": "http://imgur.com/a/sjvM7"
 },
 {
   "name": "Funeraria Garcia Mortuary ",
   "street": "629 South A St.",
   "city": "Oxnard",
   "county": "Ventura County ",
   "state": "California",
   "zip": 93030,
   "phone": "(805) 486-9148",
   "fax": "(805) 483-4439",
   "fd": "FD 1338",
   "basic_services_funeral_director": 997,
   "embalming": 647,
   "dressing_casketing": 197,
   "bathing_handling": 197,
   "refrigeration": 500,
   "visitation": 500,
   "funeral_service": 400,
   "memorial_service": null,
   "transfer_crematory": null,
   "removal": 397,
   "hearse": 395,
   "service_vehicle": 195,
   "alternative_container": 75,
   "rental_casket": 950,
   "basic_services_direct_cremation": null,
   "crematory_fee": null,
   "prayer_cards": 150,
   "register_book": 35,
   "urn": null,
   "casket": 950,
   "direct_cremation_total_cost": 1200,
   "traditional_cremation_total_cost": 3971.5,
   "traditional_burial_total_cost": 4863,
   "location_img_url": "http://imgur.com/a/sjvM7"
 },
 {
   "name": "Reardon Funeral Home ",
   "street": "511 North A St. ",
   "city": "Oxnard",
   "county": "Ventura County ",
   "state": "California",
   "zip": 93030,
   "phone": "(805) 487-1720",
   "fax": "NA",
   "fd": "FD 2069",
   "basic_services_funeral_director": 1095,
   "embalming": 650,
   "dressing_casketing": 195,
   "bathing_handling": null,
   "refrigeration": null,
   "visitation": 400,
   "funeral_service": 400,
   "memorial_service": null,
   "transfer_crematory": null,
   "removal": 390,
   "hearse": 385,
   "service_vehicle": null,
   "alternative_container": 60,
   "rental_casket": 995,
   "basic_services_direct_cremation": null,
   "crematory_fee": null,
   "prayer_cards": 95,
   "register_book": 40,
   "urn": null,
   "casket": 995,
   "direct_cremation_total_cost": 1200,
   "traditional_cremation_total_cost": 5455,
   "traditional_burial_total_cost": 4645,
   "location_img_url": "http://imgur.com/a/sjvM7"
 }
]

FuneralHome.remove({}, function(err) {
  if(err) console.log(err);
  FuneralHome.create(funeralHomes, function(err, savedFuneralHomes) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + savedFuneralHomes.length + " funeral homes.");
      mongoose.connection.close();
    }
    process.exit();
  });
});
