console.log('\'Allo \'Allo!');
function initMap() {
  var myLatLng = {lat: 44.4498, lng: 26.0991};
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
      center: myLatLng,
      zoom: 17
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Ecolage'
  });
}

var teamMembers = [
  ['laura.png' ,'Laura Opriș', 'Carismatică și cu o capacitate de negociere fantastică, Laura a reușit să bifeze un număr impresionant de realizări în cariera sa. Este partener fondator la agenția de branding și comunicare Communication ON, fondatoare la Travel & Travel, PR Manager la una dintre cele mai mari companii farmaceutice din România și manageriază peste 50 de conturi, în tot ceea ce înseamnă branding și comunicare. Totuși, acest parcurs de carieră are la bază multă muncă și studiu deopotrivă. A terminat Relații Internaționale și Studii Europene la Babeș Bolyai, dar se pare că ramura nu i-a surâs atât de tare încât să se dedice pe deplin. Așadar, a continuat cu masterul la Științe Politice, unde a încheiat cu lucrarea ”Egalitatea de șanse și discriminarea de gen”.  Cu toate acestea, nu se consideră o feministă, ci doar o persoană hotărâtă, cu principii puternice și o viziune aparte despre viitor.'],
  ['sonia.png' ,'Sonia Nechifor', 'Sonia Nechifor este Managing Partner al Agenţiei de Comunicare şi PR, Communication ON, cu sedii în Bucureşti şi în Cluj. A pus bazele companiei în anul 2011, în Cluj Napoca, când a ales să urmeze calea antreprenoriatului după o experienţă de peste 6 ani în domeniu, în calitate de Director de Comunicare al unei importante universităţi clujene. Activitatea de comunicator o îmbină cu cea de Director Editorial al Revistei Bulevard, revistă lansată în 2011. Dorinţa ei de a găsi idei simple care să transforme gânduri obișnuite în fapte extraordinare, a înconjurat-o de proiecte frumoase şi oameni valoroşi, adevărate personalităţi a căror poveste o conturează zi de zi din ”Laboratorul” de Branding pe care îl conduce. “Cultiv în comunicare elemente provocatoare, inedite și imprevizibile.  In timp, mi-am dezvoltat o preferință pentru tot ce iese din comun, pentru radicalii liberi și rebeli și pentru mediile inca neexploatate.”'],
  ['raluca.png' ,'Raluca Michailov', 'Cu o experiență de peste 17 ani în presă, Raluca Michailov este fondatorul și proprietarul companiei BP Publishing Media, editorul revistelor Forbes Romania, Forbes Life, Up by Forbes, Lifetime și Pap Tot. Raluca Michailov crede cu tărie în Dumnezeu, în supraviețuirea și propășirea presei scrise de calitate, în etică și corectitudine, în echidistanță și în pasiune. În cei peste trei ani de antreprenoriat, Raluca și-a consolidat echipa, a transformat Forbes România în cea mai dinamică licență din rețeaua mondială Forbes, a implementat și consolidat noi concepte de evenimente, noi produse editoriale și proiecte speciale.'],
  ['sandra.png' ,'Sandra Gătejeanu-Gheorghe', 'Sandra Gătejeanu Gheorghe este directorul de protocol al Casei Regale a României din anul 2008.  În această calitate aa coordonat, în ultimii opt ani vizitele oficiale ale Familiei Regale a României în străinătate, dar și Călătoriile Regale realizate în România de membrii Familiilor Regale străine, la invitația Principesei Moștenitoare și a Principelui Radu, a păstrat legătura cu Casele Regale Europene și ale lumii, am organizat prezența membrilor Familiei Regale Române la evenimentele publice din țară, am gestionat legătura cu misiunile diplomatice acreditate la București, dar și cu misiunile României din străinătate, am organizat evenimentele Familiei Regale, fie că a fost vorba despre Jubilee sau Seri ale Palatului Elisabeta, Dineuri, Ceremonii de Decorări.În perioada 2008 – 2014 a fost colaborator extern al Facultății de Drept la disciplinele Introducere în Dreptul Roman , Teoria obligațiilor în Dreptul Roman și Istoria Statului și Dreptului Românesc. Din martie 2015 este asistent universitar doctor în cadrul Universității din București.Începând cu anul 2011 Sandra a devenit lector al Institutului Diplomatic Român, susținând prelegeri despre Protocolul și Ceremonialul Regal în cadrul cursurilor organizate de acestă instituție. Sandra Gătejeanu Gheorghe a fost decorată de Majestatea Sa Regele Mihai I cu Medalia Regele Mihai I pentru loialitate (2010) și Ordinul Coroana României în grad de Ofițer (2013).Preocuparea pentru protocol și diplomație a făcut-o să aprofundez cunoștințele în aceste domenii la International School of Protocol and Diplomacy (Bruxelles).'],
  ['monica.png' ,'Monica-Magdalena Perțea', 'Convinsă că o comunicare asertivă poate aduce rezultate pozitive și din dorința de a afla modalități eficiente pentru soluționarea problemelor interpersonale, a decis să urmeze Facultatea de Comunicare și Relații Publice. După absolvire, Monica nu pierde ocazia de a activa în domeniul turismului maritim european, acumulând o experiență de 4 ani în Silver Service. Evenimentele internaționale la care a participat, o fac să creadă cu tărie în etichetă și protocol, instrumente necesare în activitățile zilnice, care îți pot asigura drumul către succes.'],
];

function setImages(centerIndex) {

  var leftMember = $('#left-member-image');
  var centerMember = $('#center-member-image');
  var rightMember = $('#right-member-image');
  centerMember.attr('src', 'images/' + teamMembers[centerIndex][0]);

  if (centerIndex == 0) {
    leftMember.attr('src', 'images/' + teamMembers[4][0]);
  }
  else {
    leftMember.attr('src', 'images/' + teamMembers[centerIndex-1][0]);
  }
  if (centerIndex == 4) {
    rightMember.attr('src', 'images/' + teamMembers[0][0]);
  }
  else {
    rightMember.attr('src', 'images/' + teamMembers[centerIndex+1][0]);
  }
}

function setTexts(centerIndex) {
  var name = $('#team-member-name');
  var description = $('#team-member-text');
  name.text(teamMembers[centerIndex][1]);
  description.text(teamMembers[centerIndex][2]);
}

// initialize members and texts
$(document).ready(function() {
  var leftArrow = $('#back-arrow');
  var rightArrow = $('#front-arrow');

  var centeredMemberIndex = 0;

  setImages(centeredMemberIndex);
  setTexts(centeredMemberIndex);

  leftArrow.click(function(){
    centeredMemberIndex == 0 ? centeredMemberIndex = 4 : centeredMemberIndex--;
    setImages(centeredMemberIndex);
    setTexts(centeredMemberIndex);
  });
  rightArrow.click(function(){
    centeredMemberIndex == 4 ? centeredMemberIndex = 0 : centeredMemberIndex++;
    setImages(centeredMemberIndex);
    setTexts(centeredMemberIndex);
  });

$( '#background-menu' ).fadeOut();
$( '#mobile-menu-expanded' ).hide();
$( '.hamburger' ).click(function() {
$( '.hamburger' ).fadeOut();
$( '#mobile-menu-expanded' ).slideToggle( 'slow', function() {
});
$( '#background-menu' ).fadeIn();
});

});

function sayHello() {
$( '.hamburger' ).fadeIn();
  $( '#mobile-menu-expanded' ).slideToggle( 'slow', function() {
  });

  $( '#background-menu' ).fadeOut();
}
