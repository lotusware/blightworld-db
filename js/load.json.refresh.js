
  var refresher = setInterval(timer, 1000);
  function timer() {$.getJSON("https://spreadsheets.google.com/feeds/list/1JPCdDNxz002gK2zQC5ailXhYwDpTXv1z7Bg8kdwckJE/1/public/full?alt=json", function(data) {
     var sheetData = data.feed.entry;

var CURAP = data.feed.entry[0][playerName]['$t'];
var MAXAP = data.feed.entry[1][playerName]['$t'];
var CURHP = data.feed.entry[2][playerName]['$t'];
var MAXHP = data.feed.entry[3][playerName]['$t'];
var CURFP = data.feed.entry[4][playerName]['$t'];
var MAXFP = data.feed.entry[5][playerName]['$t'];
var FORT = data.feed.entry[6][playerName]['$t'];
var FORTB = data.feed.entry[7][playerName]['$t'];
var FORTE = data.feed.entry[8][playerName]['$t'];
var FIN = data.feed.entry[9][playerName]['$t'];
var FINB = data.feed.entry[10][playerName]['$t'];
var FINE = data.feed.entry[11][playerName]['$t'];
var STR = data.feed.entry[12][playerName]['$t'];
var STRB = data.feed.entry[13][playerName]['$t'];
var STRE = data.feed.entry[14][playerName]['$t'];
var SKL = data.feed.entry[15][playerName]['$t'];
var SKLB = data.feed.entry[16][playerName]['$t'];
var SKLE = data.feed.entry[17][playerName]['$t'];
var INT = data.feed.entry[18][playerName]['$t'];
var INTB = data.feed.entry[19][playerName]['$t'];
var INTE = data.feed.entry[20][playerName]['$t'];
var INS = data.feed.entry[21][playerName]['$t'];
var INSB = data.feed.entry[22][playerName]['$t'];
var INSE = data.feed.entry[23][playerName]['$t'];
var AGILITY = data.feed.entry[24][playerName]['$t'];
var DODGE = data.feed.entry[25][playerName]['$t'];
var RANGED = data.feed.entry[26][playerName]['$t'];
var RANGEDROLL = data.feed.entry[27][playerName]['$t'];
var MELEE = data.feed.entry[28][playerName]['$t'];
var MELLEROLL = data.feed.entry[29][playerName]['$t'];
var FLUX = data.feed.entry[30][playerName]['$t'];
var FLUXROLL = data.feed.entry[31][playerName]['$t'];
var EQ = data.feed.entry[32][playerName]['$t'];
var EQTYPE = data.feed.entry[33][playerName]['$t'];
var EQROLL = data.feed.entry[34][playerName]['$t'];
var EQDESC = data.feed.entry[35][playerName]['$t'];
var Accuracy = data.feed.entry[36][playerName]['$t'];
var Endurance = data.feed.entry[37][playerName]['$t'];
var Resist = data.feed.entry[38][playerName]['$t'];
var Acuity = data.feed.entry[39][playerName]['$t'];
var Wilderness = data.feed.entry[40][playerName]['$t'];
var Engineering = data.feed.entry[41][playerName]['$t'];
var Intuition = data.feed.entry[42][playerName]['$t'];
var Perception = data.feed.entry[43][playerName]['$t'];
var Persuasion = data.feed.entry[44][playerName]['$t'];
var Knack = data.feed.entry[45][playerName]['$t'];
var AccuracyE = data.feed.entry[46][playerName]['$t'];
var EnduranceE = data.feed.entry[47][playerName]['$t'];
var ResistE = data.feed.entry[48][playerName]['$t'];
var AcuityE = data.feed.entry[49][playerName]['$t'];
var WildernessE = data.feed.entry[50][playerName]['$t'];
var EngineeringE = data.feed.entry[51][playerName]['$t'];
var IntuitionE = data.feed.entry[52][playerName]['$t'];
var PerceptionE = data.feed.entry[53][playerName]['$t'];
var PersuasionE = data.feed.entry[54][playerName]['$t'];
var KnackE = data.feed.entry[55][playerName]['$t'];
var AccuracyB = data.feed.entry[56][playerName]['$t'];
var EnduranceB = data.feed.entry[57][playerName]['$t'];
var ResistB = data.feed.entry[58][playerName]['$t'];
var AcuityB = data.feed.entry[59][playerName]['$t'];
var WildernessB = data.feed.entry[60][playerName]['$t'];
var EngineeringB = data.feed.entry[61][playerName]['$t'];
var IntuitionB = data.feed.entry[62][playerName]['$t'];
var PerceptionB = data.feed.entry[63][playerName]['$t'];
var PersuasionB = data.feed.entry[64][playerName]['$t'];
var KnackB = data.feed.entry[65][playerName]['$t'];
var AccuracyDIFF = data.feed.entry[66][playerName]['$t'];
var EnduranceDIFF = data.feed.entry[67][playerName]['$t'];
var ResistDIFF = data.feed.entry[68][playerName]['$t'];
var AcuityDIFF = data.feed.entry[69][playerName]['$t'];
var WildernessDIFF = data.feed.entry[70][playerName]['$t'];
var EngineeringDIFF = data.feed.entry[71][playerName]['$t'];
var IntuitionDIFF = data.feed.entry[72][playerName]['$t'];
var PerceptionDIFF = data.feed.entry[73][playerName]['$t'];
var PersuasionDIFF = data.feed.entry[74][playerName]['$t'];
var KnackDIFF = data.feed.entry[75][playerName]['$t'];
var AccuracyIMP = data.feed.entry[76][playerName]['$t'];
var EnduranceIMP = data.feed.entry[77][playerName]['$t'];
var ResistIMP = data.feed.entry[78][playerName]['$t'];
var AcuityIMP = data.feed.entry[79][playerName]['$t'];
var WildernessIMP = data.feed.entry[80][playerName]['$t'];
var EngineeringIMP = data.feed.entry[81][playerName]['$t'];
var IntuitionIMP = data.feed.entry[82][playerName]['$t'];
var PerceptionIMP = data.feed.entry[83][playerName]['$t'];
var PersuasionIMP = data.feed.entry[84][playerName]['$t'];
var KnackIMP = data.feed.entry[85][playerName]['$t'];
var WEP0 = data.feed.entry[86][playerName]['$t'];
var WEP1 = data.feed.entry[87][playerName]['$t'];
var WEP2 = data.feed.entry[88][playerName]['$t'];
var WEP3 = data.feed.entry[89][playerName]['$t'];
var WEP4 = data.feed.entry[90][playerName]['$t'];
var WEP0E = data.feed.entry[91][playerName]['$t'];
var WEP1E = data.feed.entry[92][playerName]['$t'];
var WEP2E = data.feed.entry[93][playerName]['$t'];
var WEP3E = data.feed.entry[94][playerName]['$t'];
var WEP4E = data.feed.entry[95][playerName]['$t'];
var WEP0DESC = data.feed.entry[96][playerName]['$t'];
var WEP1DESC = data.feed.entry[97][playerName]['$t'];
var WEP2DESC = data.feed.entry[98][playerName]['$t'];
var WEP3DESC = data.feed.entry[99][playerName]['$t'];
var WEP4DESC = data.feed.entry[100][playerName]['$t'];
var WEP0TYPE = data.feed.entry[101][playerName]['$t'];
var WEP1TYPE = data.feed.entry[102][playerName]['$t'];
var WEP2TYPE = data.feed.entry[103][playerName]['$t'];
var WEP3TYPE = data.feed.entry[104][playerName]['$t'];
var WEP4TYPE = data.feed.entry[105][playerName]['$t'];
var WEP0ROLL = data.feed.entry[106][playerName]['$t'];
var WEP1ROLL = data.feed.entry[107][playerName]['$t'];
var WEP2ROLL = data.feed.entry[108][playerName]['$t'];
var WEP3ROLL = data.feed.entry[109][playerName]['$t'];
var WEP4ROLL = data.feed.entry[110][playerName]['$t'];
var HEAD0 = data.feed.entry[111][playerName]['$t'];
var HEAD1 = data.feed.entry[112][playerName]['$t'];
var HEAD2 = data.feed.entry[113][playerName]['$t'];
var HEAD0E = data.feed.entry[114][playerName]['$t'];
var HEAD1E = data.feed.entry[115][playerName]['$t'];
var HEAD2E = data.feed.entry[116][playerName]['$t'];
var HEAD0DESC = data.feed.entry[117][playerName]['$t'];
var HEAD1DESC = data.feed.entry[118][playerName]['$t'];
var HEAD2DESC = data.feed.entry[119][playerName]['$t'];
var BODY0 = data.feed.entry[120][playerName]['$t'];
var BODY1 = data.feed.entry[121][playerName]['$t'];
var BODY2 = data.feed.entry[122][playerName]['$t'];
var BODY0E = data.feed.entry[123][playerName]['$t'];
var BODY1E = data.feed.entry[124][playerName]['$t'];
var BODY2E = data.feed.entry[125][playerName]['$t'];
var BODY0DESC = data.feed.entry[126][playerName]['$t'];
var BODY1DESC = data.feed.entry[127][playerName]['$t'];
var BODY2DESC = data.feed.entry[128][playerName]['$t'];
var ITEM0 = data.feed.entry[129][playerName]['$t'];
var ITEM1 = data.feed.entry[130][playerName]['$t'];
var ITEM2 = data.feed.entry[131][playerName]['$t'];
var ITEM3 = data.feed.entry[132][playerName]['$t'];
var ITEM4 = data.feed.entry[133][playerName]['$t'];
var ITEM5 = data.feed.entry[134][playerName]['$t'];
var ITEM6 = data.feed.entry[135][playerName]['$t'];
var ITEM7 = data.feed.entry[136][playerName]['$t'];
var ITEM0QTY = data.feed.entry[137][playerName]['$t'];
var ITEM1QTY = data.feed.entry[138][playerName]['$t'];
var ITEM2QTY = data.feed.entry[139][playerName]['$t'];
var ITEM3QTY = data.feed.entry[140][playerName]['$t'];
var ITEM4QTY = data.feed.entry[141][playerName]['$t'];
var ITEM5QTY = data.feed.entry[142][playerName]['$t'];
var ITEM6QTY = data.feed.entry[143][playerName]['$t'];
var ITEM7QTY = data.feed.entry[144][playerName]['$t'];
var ITEM0DESC = data.feed.entry[145][playerName]['$t'];
var ITEM1DESC = data.feed.entry[146][playerName]['$t'];
var ITEM2DESC = data.feed.entry[147][playerName]['$t'];
var ITEM3DESC = data.feed.entry[148][playerName]['$t'];
var ITEM4DESC = data.feed.entry[149][playerName]['$t'];
var ITEM5DESC = data.feed.entry[150][playerName]['$t'];
var ITEM6DESC = data.feed.entry[151][playerName]['$t'];
var ITEM7DESC = data.feed.entry[152][playerName]['$t'];
var ITEM0ROLL = data.feed.entry[153][playerName]['$t'];
var ITEM1ROLL = data.feed.entry[154][playerName]['$t'];
var ITEM2ROLL = data.feed.entry[155][playerName]['$t'];
var ITEM3ROLL = data.feed.entry[156][playerName]['$t'];
var ITEM4ROLL = data.feed.entry[157][playerName]['$t'];
var ITEM5ROLL = data.feed.entry[158][playerName]['$t'];
var ITEM6ROLL = data.feed.entry[159][playerName]['$t'];
var ITEM7ROLL = data.feed.entry[160][playerName]['$t'];
var ITEM0TYPE = data.feed.entry[161][playerName]['$t'];
var ITEM1TYPE = data.feed.entry[162][playerName]['$t'];
var ITEM2TYPE = data.feed.entry[163][playerName]['$t'];
var ITEM3TYPE = data.feed.entry[164][playerName]['$t'];
var ITEM4TYPE = data.feed.entry[165][playerName]['$t'];
var ITEM5TYPE = data.feed.entry[166][playerName]['$t'];
var ITEM6TYPE = data.feed.entry[167][playerName]['$t'];
var ITEM7TYPE = data.feed.entry[168][playerName]['$t'];
var LOG0 = data.feed.entry[169][playerName]['$t'];
var LOG1 = data.feed.entry[170][playerName]['$t'];
var LOG2 = data.feed.entry[171][playerName]['$t'];
var LOG3 = data.feed.entry[172][playerName]['$t'];
var LOG4 = data.feed.entry[173][playerName]['$t'];
var LOG5 = data.feed.entry[174][playerName]['$t'];
var LOG6 = data.feed.entry[175][playerName]['$t'];
var LOG7 = data.feed.entry[176][playerName]['$t'];
var LOG8 = data.feed.entry[177][playerName]['$t'];
var LOG9 = data.feed.entry[178][playerName]['$t'];
var LOG10 = data.feed.entry[179][playerName]['$t'];
var LOG11 = data.feed.entry[180][playerName]['$t'];
var LOG12 = data.feed.entry[181][playerName]['$t'];
var LOG13 = data.feed.entry[182][playerName]['$t'];
var LOG14 = data.feed.entry[183][playerName]['$t'];
var LOG15 = data.feed.entry[184][playerName]['$t'];
var LOG16 = data.feed.entry[185][playerName]['$t'];
var LOG17 = data.feed.entry[186][playerName]['$t'];
var LOG18 = data.feed.entry[187][playerName]['$t'];
var LOG19 = data.feed.entry[188][playerName]['$t'];
var LOG20 = data.feed.entry[189][playerName]['$t'];
var LOG21 = data.feed.entry[190][playerName]['$t'];
var LOG22 = data.feed.entry[191][playerName]['$t'];
var LOG23 = data.feed.entry[192][playerName]['$t'];
var LOG24 = data.feed.entry[193][playerName]['$t'];
var LOG25 = data.feed.entry[194][playerName]['$t'];
var LOG26 = data.feed.entry[195][playerName]['$t'];
var LOG27 = data.feed.entry[196][playerName]['$t'];
var LOG28 = data.feed.entry[197][playerName]['$t'];
var LOG29 = data.feed.entry[198][playerName]['$t'];
var LOG30 = data.feed.entry[199][playerName]['$t'];
var LOG31 = data.feed.entry[200][playerName]['$t'];
var LOG32 = data.feed.entry[201][playerName]['$t'];
var LOG33 = data.feed.entry[202][playerName]['$t'];
var LOG34 = data.feed.entry[203][playerName]['$t'];
var LOG35 = data.feed.entry[204][playerName]['$t'];
var LOG36 = data.feed.entry[205][playerName]['$t'];
var LOG37 = data.feed.entry[206][playerName]['$t'];
var LOG38 = data.feed.entry[207][playerName]['$t'];
var LOG39 = data.feed.entry[208][playerName]['$t'];
var LOG40 = data.feed.entry[209][playerName]['$t'];
var LOG41 = data.feed.entry[210][playerName]['$t'];
var LOG42 = data.feed.entry[211][playerName]['$t'];
var LOG43 = data.feed.entry[212][playerName]['$t'];
var LOG44 = data.feed.entry[213][playerName]['$t'];
var LOG45 = data.feed.entry[214][playerName]['$t'];
var LOG46 = data.feed.entry[215][playerName]['$t'];
var LOG47 = data.feed.entry[216][playerName]['$t'];
var LOG48 = data.feed.entry[217][playerName]['$t'];
var LOG49 = data.feed.entry[218][playerName]['$t'];
var LOG50 = data.feed.entry[219][playerName]['$t'];
var NAME = data.feed.entry[220][playerName]['$t'];
var APMETER = data.feed.entry[221][playerName]['$t'];
var HPMETER = data.feed.entry[222][playerName]['$t'];





// Populate app
document.getElementById('NAME').innerHTML = NAME;
document.getElementById('CURAP').innerHTML = CURAP;
document.getElementById('MAXAP').innerHTML = MAXAP;
document.getElementById('CURHP').innerHTML = CURHP;
document.getElementById('MAXHP').innerHTML = MAXHP;
document.getElementById('CURFP').innerHTML = CURFP;
document.getElementById('MAXFP').innerHTML = MAXFP;
document.getElementById('FORT').innerHTML = FORT;
document.getElementById('FORTB').innerHTML = FORTB;
document.getElementById('FORTE').innerHTML = FORTE;
document.getElementById('FIN').innerHTML = FIN;
document.getElementById('FINB').innerHTML = FINB;
document.getElementById('FINE').innerHTML = FINE;
document.getElementById('STR').innerHTML = STR;
document.getElementById('STRB').innerHTML = STRB;
document.getElementById('STRE').innerHTML = STRE;
document.getElementById('SKL').innerHTML = SKL;
document.getElementById('SKLB').innerHTML = SKLB;
document.getElementById('SKLE').innerHTML = SKLE;
document.getElementById('INT').innerHTML = INT;
document.getElementById('INTB').innerHTML = INTB;
document.getElementById('INTE').innerHTML = INTE;
document.getElementById('INS').innerHTML = INS;
document.getElementById('INSB').innerHTML = INSB;
document.getElementById('INSE').innerHTML = INSE;
document.getElementById('AGILITY').innerHTML = AGILITY;
document.getElementById('DODGE').innerHTML = DODGE;
document.getElementById('RANGED').innerHTML = RANGED;
document.getElementById('RANGEDROLL').innerHTML = RANGEDROLL;
document.getElementById('MELEE').innerHTML = MELEE;
document.getElementById('MELLEROLL').innerHTML = MELLEROLL;
document.getElementById('FLUX').innerHTML = FLUX;
document.getElementById('FLUXROLL').innerHTML = FLUXROLL;
document.getElementById('EQ').innerHTML = EQ;
document.getElementById('EQTYPE').innerHTML = EQTYPE;
document.getElementById('EQROLL').innerHTML = EQROLL;
document.getElementById('EQDESC').innerHTML = EQDESC;
document.getElementById('Accuracy').innerHTML = Accuracy;
document.getElementById('Endurance').innerHTML = Endurance;
document.getElementById('Resist').innerHTML = Resist;
document.getElementById('Acuity').innerHTML = Acuity;
document.getElementById('Wilderness').innerHTML = Wilderness;
document.getElementById('Engineering').innerHTML = Engineering;
document.getElementById('Intuition').innerHTML = Intuition;
document.getElementById('Perception').innerHTML = Perception;
document.getElementById('Persuasion').innerHTML = Persuasion;
document.getElementById('Knack').innerHTML = Knack;
document.getElementById('AccuracyE').innerHTML = AccuracyE;
document.getElementById('EnduranceE').innerHTML = EnduranceE;
document.getElementById('ResistE').innerHTML = ResistE;
document.getElementById('AcuityE').innerHTML = AcuityE;
document.getElementById('WildernessE').innerHTML = WildernessE;
document.getElementById('EngineeringE').innerHTML = EngineeringE;
document.getElementById('IntuitionE').innerHTML = IntuitionE;
document.getElementById('PerceptionE').innerHTML = PerceptionE;
document.getElementById('PersuasionE').innerHTML = PersuasionE;
document.getElementById('KnackE').innerHTML = KnackE;
document.getElementById('AccuracyB').innerHTML = AccuracyB;
document.getElementById('EnduranceB').innerHTML = EnduranceB;
document.getElementById('ResistB').innerHTML = ResistB;
document.getElementById('AcuityB').innerHTML = AcuityB;
document.getElementById('WildernessB').innerHTML = WildernessB;
document.getElementById('EngineeringB').innerHTML = EngineeringB;
document.getElementById('IntuitionB').innerHTML = IntuitionB;
document.getElementById('PerceptionB').innerHTML = PerceptionB;
document.getElementById('PersuasionB').innerHTML = PersuasionB;
document.getElementById('KnackB').innerHTML = KnackB;
document.getElementById('AccuracyDIFF').innerHTML = AccuracyDIFF;
document.getElementById('EnduranceDIFF').innerHTML = EnduranceDIFF;
document.getElementById('ResistDIFF').innerHTML = ResistDIFF;
document.getElementById('AcuityDIFF').innerHTML = AcuityDIFF;
document.getElementById('WildernessDIFF').innerHTML = WildernessDIFF;
document.getElementById('EngineeringDIFF').innerHTML = EngineeringDIFF;
document.getElementById('IntuitionDIFF').innerHTML = IntuitionDIFF;
document.getElementById('PerceptionDIFF').innerHTML = PerceptionDIFF;
document.getElementById('PersuasionDIFF').innerHTML = PersuasionDIFF;
document.getElementById('KnackDIFF').innerHTML = KnackDIFF;
document.getElementById('AccuracyIMP').innerHTML = AccuracyIMP;
document.getElementById('EnduranceIMP').innerHTML = EnduranceIMP;
document.getElementById('ResistIMP').innerHTML = ResistIMP;
document.getElementById('AcuityIMP').innerHTML = AcuityIMP;
document.getElementById('WildernessIMP').innerHTML = WildernessIMP;
document.getElementById('EngineeringIMP').innerHTML = EngineeringIMP;
document.getElementById('IntuitionIMP').innerHTML = IntuitionIMP;
document.getElementById('PerceptionIMP').innerHTML = PerceptionIMP;
document.getElementById('PersuasionIMP').innerHTML = PersuasionIMP;
document.getElementById('KnackIMP').innerHTML = KnackIMP;
document.getElementById('WEP0').innerHTML = WEP0;
document.getElementById('WEP1').innerHTML = WEP1;
document.getElementById('WEP2').innerHTML = WEP2;
document.getElementById('WEP3').innerHTML = WEP3;
document.getElementById('WEP4').innerHTML = WEP4;
document.getElementById('WEP0E').innerHTML = WEP0E;
document.getElementById('WEP1E').innerHTML = WEP1E;
document.getElementById('WEP2E').innerHTML = WEP2E;
document.getElementById('WEP3E').innerHTML = WEP3E;
document.getElementById('WEP4E').innerHTML = WEP4E;
document.getElementById('WEP0DESC').innerHTML = WEP0DESC;
document.getElementById('WEP1DESC').innerHTML = WEP1DESC;
document.getElementById('WEP2DESC').innerHTML = WEP2DESC;
document.getElementById('WEP3DESC').innerHTML = WEP3DESC;
document.getElementById('WEP4DESC').innerHTML = WEP4DESC;
document.getElementById('WEP0TYPE').innerHTML = WEP0TYPE;
document.getElementById('WEP1TYPE').innerHTML = WEP1TYPE;
document.getElementById('WEP2TYPE').innerHTML = WEP2TYPE;
document.getElementById('WEP3TYPE').innerHTML = WEP3TYPE;
document.getElementById('WEP4TYPE').innerHTML = WEP4TYPE;
document.getElementById('WEP0ROLL').innerHTML = WEP0ROLL;
document.getElementById('WEP1ROLL').innerHTML = WEP1ROLL;
document.getElementById('WEP2ROLL').innerHTML = WEP2ROLL;
document.getElementById('WEP3ROLL').innerHTML = WEP3ROLL;
document.getElementById('WEP4ROLL').innerHTML = WEP4ROLL;
document.getElementById('HEAD0').innerHTML = HEAD0;
document.getElementById('HEAD1').innerHTML = HEAD1;
document.getElementById('HEAD2').innerHTML = HEAD2;
document.getElementById('HEAD0E').innerHTML = HEAD0E;
document.getElementById('HEAD1E').innerHTML = HEAD1E;
document.getElementById('HEAD2E').innerHTML = HEAD2E;
document.getElementById('HEAD0DESC').innerHTML = HEAD0DESC;
document.getElementById('HEAD1DESC').innerHTML = HEAD1DESC;
document.getElementById('HEAD2DESC').innerHTML = HEAD2DESC;
document.getElementById('BODY0').innerHTML = BODY0;
document.getElementById('BODY1').innerHTML = BODY1;
document.getElementById('BODY2').innerHTML = BODY2;
document.getElementById('BODY0E').innerHTML = BODY0E;
document.getElementById('BODY1E').innerHTML = BODY1E;
document.getElementById('BODY2E').innerHTML = BODY2E;
document.getElementById('BODY0DESC').innerHTML = BODY0DESC;
document.getElementById('BODY1DESC').innerHTML = BODY1DESC;
document.getElementById('BODY2DESC').innerHTML = BODY2DESC;
document.getElementById('ITEM0').innerHTML = ITEM0;
document.getElementById('ITEM1').innerHTML = ITEM1;
document.getElementById('ITEM2').innerHTML = ITEM2;
document.getElementById('ITEM3').innerHTML = ITEM3;
document.getElementById('ITEM4').innerHTML = ITEM4;
document.getElementById('ITEM5').innerHTML = ITEM5;
document.getElementById('ITEM6').innerHTML = ITEM6;
document.getElementById('ITEM7').innerHTML = ITEM7;
document.getElementById('ITEM0QTY').innerHTML = ITEM0QTY;
document.getElementById('ITEM1QTY').innerHTML = ITEM1QTY;
document.getElementById('ITEM2QTY').innerHTML = ITEM2QTY;
document.getElementById('ITEM3QTY').innerHTML = ITEM3QTY;
document.getElementById('ITEM4QTY').innerHTML = ITEM4QTY;
document.getElementById('ITEM5QTY').innerHTML = ITEM5QTY;
document.getElementById('ITEM6QTY').innerHTML = ITEM6QTY;
document.getElementById('ITEM7QTY').innerHTML = ITEM7QTY;
document.getElementById('ITEM0DESC').innerHTML = ITEM0DESC;
document.getElementById('ITEM1DESC').innerHTML = ITEM1DESC;
document.getElementById('ITEM2DESC').innerHTML = ITEM2DESC;
document.getElementById('ITEM3DESC').innerHTML = ITEM3DESC;
document.getElementById('ITEM4DESC').innerHTML = ITEM4DESC;
document.getElementById('ITEM5DESC').innerHTML = ITEM5DESC;
document.getElementById('ITEM6DESC').innerHTML = ITEM6DESC;
document.getElementById('ITEM7DESC').innerHTML = ITEM7DESC;
document.getElementById('ITEM0ROLL').innerHTML = ITEM0ROLL;
document.getElementById('ITEM1ROLL').innerHTML = ITEM1ROLL;
document.getElementById('ITEM2ROLL').innerHTML = ITEM2ROLL;
document.getElementById('ITEM3ROLL').innerHTML = ITEM3ROLL;
document.getElementById('ITEM4ROLL').innerHTML = ITEM4ROLL;
document.getElementById('ITEM5ROLL').innerHTML = ITEM5ROLL;
document.getElementById('ITEM6ROLL').innerHTML = ITEM6ROLL;
document.getElementById('ITEM7ROLL').innerHTML = ITEM7ROLL;
document.getElementById('ITEM0TYPE').innerHTML = ITEM0TYPE;
document.getElementById('ITEM1TYPE').innerHTML = ITEM1TYPE;
document.getElementById('ITEM2TYPE').innerHTML = ITEM2TYPE;
document.getElementById('ITEM3TYPE').innerHTML = ITEM3TYPE;
document.getElementById('ITEM4TYPE').innerHTML = ITEM4TYPE;
document.getElementById('ITEM5TYPE').innerHTML = ITEM5TYPE;
document.getElementById('ITEM6TYPE').innerHTML = ITEM6TYPE;
document.getElementById('ITEM7TYPE').innerHTML = ITEM7TYPE;
document.getElementById('LOG0').innerHTML = LOG0;
document.getElementById('LOG1').innerHTML = LOG1;
document.getElementById('LOG2').innerHTML = LOG2;
document.getElementById('LOG3').innerHTML = LOG3;
document.getElementById('LOG4').innerHTML = LOG4;
document.getElementById('LOG5').innerHTML = LOG5;
document.getElementById('LOG6').innerHTML = LOG6;
document.getElementById('LOG7').innerHTML = LOG7;
document.getElementById('LOG8').innerHTML = LOG8;
document.getElementById('LOG9').innerHTML = LOG9;
document.getElementById('LOG10').innerHTML = LOG10;
document.getElementById('LOG11').innerHTML = LOG11;
document.getElementById('LOG12').innerHTML = LOG12;
document.getElementById('LOG13').innerHTML = LOG13;
document.getElementById('LOG14').innerHTML = LOG14;
document.getElementById('LOG15').innerHTML = LOG15;
document.getElementById('LOG16').innerHTML = LOG16;
document.getElementById('LOG17').innerHTML = LOG17;
document.getElementById('LOG18').innerHTML = LOG18;
document.getElementById('LOG19').innerHTML = LOG19;
document.getElementById('LOG20').innerHTML = LOG20;
document.getElementById('LOG21').innerHTML = LOG21;
document.getElementById('LOG22').innerHTML = LOG22;
document.getElementById('LOG23').innerHTML = LOG23;
document.getElementById('LOG24').innerHTML = LOG24;
document.getElementById('LOG25').innerHTML = LOG25;
document.getElementById('LOG26').innerHTML = LOG26;
document.getElementById('LOG27').innerHTML = LOG27;
document.getElementById('LOG28').innerHTML = LOG28;
document.getElementById('LOG29').innerHTML = LOG29;
document.getElementById('LOG30').innerHTML = LOG30;
document.getElementById('LOG31').innerHTML = LOG31;
document.getElementById('LOG32').innerHTML = LOG32;
document.getElementById('LOG33').innerHTML = LOG33;
document.getElementById('LOG34').innerHTML = LOG34;
document.getElementById('LOG35').innerHTML = LOG35;
document.getElementById('LOG36').innerHTML = LOG36;
document.getElementById('LOG37').innerHTML = LOG37;
document.getElementById('LOG38').innerHTML = LOG38;
document.getElementById('LOG39').innerHTML = LOG39;
document.getElementById('LOG40').innerHTML = LOG40;
document.getElementById('LOG41').innerHTML = LOG41;
document.getElementById('LOG42').innerHTML = LOG42;
document.getElementById('LOG43').innerHTML = LOG43;
document.getElementById('LOG44').innerHTML = LOG44;
document.getElementById('LOG45').innerHTML = LOG45;
document.getElementById('LOG46').innerHTML = LOG46;
document.getElementById('LOG47').innerHTML = LOG47;
document.getElementById('LOG48').innerHTML = LOG48;
document.getElementById('LOG49').innerHTML = LOG49;
document.getElementById('LOG50').innerHTML = LOG50;
document.getElementById('APMETER').innerHTML = APMETER;
document.getElementById('HPMETER').innerHTML = HPMETER;
});}
