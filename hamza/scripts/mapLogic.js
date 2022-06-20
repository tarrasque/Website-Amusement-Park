var map;
  
//Define an HTML template for a custom infobox.
var infoboxTemplate = '<div class="customInfobox"><div class="title">{title}</div><div class="description">{description}</div></div>';

function GetMap() {
    map = new Microsoft.Maps.Map('#Map',
        {});

    map.setView({
      mapTypeId: Microsoft.Maps.MapTypeId.aerial,
      center: new Microsoft.Maps.Location(35.027222, -111.0225),
      zoom: 13
    });

    var center = map.getCenter();

    //A title and description for the infobox.
    var title = 'Thrill City';
    var description = '<img src="img/logo-b.png" class="logo"/>The place to be!';

    //Pass the title and description into the template and pass it into the infobox as an option.
    var infobox = new Microsoft.Maps.Infobox(center, {
        htmlContent: infoboxTemplate.replace('{title}', title).replace('{description}', description)
    });

    //Assign the infobox to a map instance.
    infobox.setMap(map);
    
  //Create custom Pushpin
  var pin = new Microsoft.Maps.Pushpin(center, {
      title: 'Thrill City',
      subTitle: 'The Place To Be!',
      text: ''
  });

  //Add the pushpin to the map
  map.entities.push(pin);
}