
// Javascript for Via clinica del paciente diabetico con enfermedad cardiovascular

$(document).ready(function(){ 
			$('#myTab li:eq(1) a').tab('show');
			});
		
		function totalDiaCar() {
			// VARIABLES
			var age = parseFloat(document.getElementById("age").value); 
			var gender = parseFloat(document.getElementById("gender").value);
			var weight = parseFloat(document.getElementById("weight").value);
			var height = parseFloat(document.getElementById("height").value);
			var syspre = parseFloat(document.getElementById("syspre").value);
			var dyapre = parseFloat(document.getElementById("dyapre").value);
			var lvef = parseFloat(document.getElementById("lvef").value);
			var glufast = parseFloat(document.getElementById("glufast").value);
			var hbinA1 = parseFloat(document.getElementById("hbinA1").value);
			var LDLcol = parseFloat(document.getElementById("LDLcol").value);
			var HDLcol = parseFloat(document.getElementById("HDLcol").value);
			var trigliks = parseFloat(document.getElementById("trigliks").value);
			var gluintoler = parseFloat(document.getElementById("gluintoler").value);
			var creatyn = parseFloat(document.getElementById("creatyn").value);	
			
			var previousEcv = document.getElementById("previousEcv").checked;
			var hyperten = document.getElementById("hyperten").checked;
			var hypercolfam = document.getElementById("hypercolfam").checked;
			var tabak = document.getElementById("tabak").checked;
			var enoly = document.getElementById("enoly").checked;
			var ckd = document.getElementById("ckd").checked;
			var proteynuria = document.getElementById("proteynuria").checked;
			var hyperten = document.getElementById("hyperten").checked;
			var hepatynsuf = document.getElementById("hepatynsuf").checked;
			var desnutry = document.getElementById("desnutry").checked;
			var posynd = document.getElementById("posynd").checked;
			var dyab1 = document.getElementById("dyab1").checked;
			var dyabAFamil = document.getElementById("dyabAFamil").checked;
			var diabpregn = document.getElementById("diabpregn").checked;
			var dyana = document.getElementById("dyana").checked;
			var microangy = document.getElementById("microangy").checked;
			var retyno = document.getElementById("retyno").checked;
			
			var ttoBBly = document.getElementById("ttoBBly").checked;
			var ttoIECAy = document.getElementById("ttoIECAy").checked;
			var ttoARA2y = document.getElementById("ttoARA2y").checked;
			var ttoTiazy = document.getElementById("ttoTiazy").checked;
			var ttoStatins = document.getElementById("ttoStatins").checked;
			var ttoCaAntagy = document.getElementById("ttoCaAntagy").checked;
			var ttoACOy = document.getElementById("ttoACOy").checked;
			var ttoDihidropiridiny = document.getElementById("ttoDihidropiridiny").checked;
			var ttoAASy = document.getElementById("ttoAASy").checked;
			var ttoIPCSKy = document.getElementById("ttoIPCSKy").checked;
			var ttoInsulin = document.getElementById("ttoInsulin").checked;
			var ttoMetformin = document.getElementById("ttoMetformin").checked;
			var ttoRepaglinide = document.getElementById("ttoRepaglinide").checked;
			var ttoiDPP4y = document.getElementById("ttoiDPP4y").checked;
			var ttoaGLP1y = document.getElementById("ttoaGLP1y").checked;
			var ttoiSGLT2y = document.getElementById("ttoiSGLT2y").checked;
			var contraBBly = document.getElementById("contraBBly").checked;
			var contraIECAy = document.getElementById("contraIECAy").checked;
			var contraARA2y = document.getElementById("contraARA2y").checked;
			var contraTiazy = document.getElementById("contraTiazy").checked;
			var contraStatins = document.getElementById("contraStatins").checked;
			var contraCaAntagy = document.getElementById("contraCaAntagy").checked;
			var contraACOy = document.getElementById("contraACOy").checked;
			var contraTicagrely = document.getElementById("contraTicagrely").checked;
			var contraPrasugrely = document.getElementById("contraPrasugrely").checked;
			var contraAASy = document.getElementById("contraAASy").checked;
			var contraIPCSKy = document.getElementById("contraIPCSKy").checked;
			var contraInsulin = document.getElementById("contraInsulin").checked;
			var contraMetformin = document.getElementById("contraMetformin").checked;
			var contraRepaglinide = document.getElementById("contraRepaglinide").checked;
			var contraiDPP4y = document.getElementById("contraiDPP4y").checked;
			var contraaGLP1y = document.getElementById("contraaGLP1y").checked;
			var contraiSGLT2y = document.getElementById("contraiSGLT2y").checked;
			
			//DATA
			var pointHbA1glucose = {
				"HbA1": [
					6,
					7,
					8,
					9,
					10,
					11,
					12
				],
				"GluMedia": [
					126,
					154,
					183,
					212,
					240,
					269,
					298
				]
			}
			var hbA1Table = pointHbA1glucose["HbA1"]; //.slice().reverse()
			var glumediaTable = pointHbA1glucose["GluMedia"]; 
			function checkHbA1(hemoglobA1) { 
				return hemoglobA1 >= hbinA1; 
			}
			var indexHb1Ac = hbA1Table.findIndex(checkHbA1); //returns index of the value in the array
			if (indexHb1Ac == -1) { //when supposed index is outside the array: gives -1
				indexHb1Ac = hbA1Table.length-1; //-1: fix length to correctly reflect table indices
			} else {
				indexHb1Ac = indexHb1Ac;
			}
			document.getElementById("equivHbGlu").innerHTML = glumediaTable[indexHb1Ac];
		
			
			//FORMULAS
			//Bmi
			var heightMetre = height*0.01
			var bmi = (weight / Math.pow(heightMetre, 2) ).toFixed(1);
			document.getElementById("bmi").innerHTML = bmi;
			
			//Cockroft
			var fgr = ((140-age)*weight) / (creatyn*72);
			if (gender == 1 ) {
				fgr = fgr*0.85;
			} else {
				fgr = fgr;
			}
			fgr = fgr.toFixed(1);
			document.getElementById("fgr").innerHTML = fgr;
			
			
			
			//DERIVED VARIABLES
			if (bmi > 25) {
				var obeso = 1;
			} else {
				var obeso = 0;
			} 
			if (syspre <= 139 & dyapre <= 89) {
				var HTAlta = 0;
				var numFcosHTA = 0;
			} else {
				if (syspre <= 160 & dyapre <= 100) {
					var HTAlta = 1;
					var numFcosHTA = 1;
				} else {
					var HTAlta = 1;
					var numFcosHTA = 2;
				}
			} 
			if (ttoIECAy == 1 | ttoARA2y == 1) {
				var ttoIECAoARAy = 1; // condicion aglutinante para facilitar condicionales ad hoc
			} else {
				var ttoIECAoARAy = 0;
			}
			if (ttoCaAntagy == 1 | ttoBBly == 1 | ttoTiazy == 1) {
				var ttoCaTiazBB = 1;
			} else {
				var ttoCaTiazBB = 0;
			}
			var escalonHTA = 0;
			if (numFcosHTA == 1 & ttoIECAoARAy = 0) {
				var escalonHTA = 1;
			} else {
				if (numFcosHTA == 1 & ttoIECAoARAy = 1 & ttoCaTiazBB == 1) {
					var escalonHTA = 2;
				} 
			}
			////////////////////////////////
			if (escalonHTA == 2 & ttoCaAntagy == 0 & ttoBBly == 0 & ttoTiazy == 0) {
				var messageHTA = "A&ntilde;adir Antagonista del Calcio o bien Tiazidas o bien Betabloqueantes";
			} else {
				if (escalonHTA == 2 & ttoCaAntagy == 1 & ttoBBly == 0 & ttoTiazy == 0){
					var messageHTA = "A&ntilde;adir Antagonista del Calcio o bien Tiazidas o bien Betabloqueantes";
				} else {
					if (escalonHTA == 2 & ttoCaAntagy == 0 & ttoBBly == 1 & ttoTiazy == 0) {
						var messageHTA = "A&ntilde;adir Antagonista del Calcio o bien Tiazidas";
					} else {
						if (escalonHTA == 2 & ttoCaAntagy == 0 & ttoBBly == 0 & ttoTiazy == 1) {
							var messageHTA = "A&ntilde;adir Antagonista del Calcio o bien Betabloqueantes";
						} else {
							if (escalonHTA == 2 & ttoCaAntagy == 1 & ttoBBly == 1 & ttoTiazy == 0) {
								var messageHTA = "A&ntilde;adir Tiazidas";
							} else {
								if (escalonHTA == 2 & ttoCaAntagy == 1 & ttoBBly == 0 & ttoTiazy == 1) {
									var messageHTA = "A&ntilde;adir Betabloqueantes";
								} else {
									if (escalonHTA == 2 & ttoCaAntagy == 0 & ttoBBly == 1 & ttoTiazy == 1) {
										var messageHTA = "A&ntilde;adir Antagonista del Calcio";
									} else {
										var messageHTA = "A&ntilde;adir otros antihipertensivos";
									}
								}
							}
						} 
					}
				}
			}
			document.getElementById("messageHTA").innerHTML = messageHTA;
			////////////////////////////////
			if (fgr <= 30) {
				var ircSevera = 1;
				document.getElementById("contraMetformin").checked = true; 
				document.getElementById("contraRepaglinide").checked = true; 
				document.getElementById("contraiDPP4y").checked = true; 
				document.getElementById("contraaGLP1y").checked = true; 
				document.getElementById("contraiSGLT2y").checked = true; 
			} else {
				var ircSevera = 0;
			}
			if (glufast >= 100 & glufast <= 125) {
				var glufastAltered = 1;
			} else {
				if (glufast > 125) {
					var glufastAltered = 0;
					var isDiabetes = 1;
				} else {
					var glufastAltered = 0;
					var isDiabetes = 0;
				}
			}
			if (gluintoler >= 140 & gluintoler <= 199) { //GP2h con 75g TTOG
				var gluIntolerance = 1;
			} else {
				if (gluintoler > 199) {
					var gluIntolerance = 0;
					var isDiabetes = 1;
				} else {
					var gluIntolerance = 0;
					var isDiabetes = 0;
				}
			}
			if (hbinA1 >= 5.7 & hbinA1 <= 6.4) {
				var preDiabetes = 1;
			} else {
				if (hbinA1 > 6.4) {
					var preDiabetes = 0;
					var isDiabetes = 1;
				} else {
					var preDiabetes = 0;
					var isDiabetes = 0;
				}
			}
			var objetivoHbA1c = 7;
			if (dyana == true | microangy == true | retyno == true | ttoInsulin == true) {
				objetivoHbA1c = 8;
			} else {
				if (dyana == false & microangy == false & retyno == false & ttoInsulin == false) {
					objetivoHbA1c = 6.5;
				} else {
					objetivoHbA1c = objetivoHbA1c;
				}
			}
			
			
			
			
			//MESSAGES PATIENT
			if (tabak == true ) {
				var pedirTabaqui = "- Debe Ud. abandonar el tabaco.<br>";
			} else {
				var pedirTabaqui = "";
			}
			document.getElementById("pedirTabaqui").innerHTML = pedirTabaqui;
			if (microangy == true | retyno == true) {
				var pedirEjercicioMicroangio = "- Tenga en cuenta que debe hacer ejercicio no intenso, evitando los impactos.<br>";
			} else {
				var pedirEjercicioMicroangio = "";
			}
			document.getElementById("pedirEjercicioMicroangio").innerHTML = pedirEjercicioMicroangio;
			if (obeso == 1 ) {
				var pedirObesi = "- Debe Ud. reducir su peso.<br>";
			} else {
				var pedirObesi = "";
			}
			document.getElementById("pedirObesi").innerHTML = pedirObesi;
			
			
		}

		function resetForm() {
			document.getElementById("age").value = 0; 
			document.getElementById("gender").value = 0; 
			document.getElementById("weight").value = 0; 
			document.getElementById("height").value = 0; 
			document.getElementById("syspre").value = 0; 
			document.getElementById("dyapre").value = 0; 
			document.getElementById("lvef").value = 0; 
			document.getElementById("glufast").value = 0; 
			document.getElementById("hbinA1").value = 0; 
			document.getElementById("LDLcol").value = 0; 
			document.getElementById("HDLcol").value = 0; 
			document.getElementById("trigliks").value = 0; 
			document.getElementById("gluintoler").value = 0; 
			document.getElementById("creatyn").value = 0; 
			document.getElementById("previousEcv").checked = false; 
			document.getElementById("hyperten").checked = false; 
			document.getElementById("hypercolfam").checked = false; 
			document.getElementById("tabak").checked = false; 
			document.getElementById("enoly").checked = false; 
			document.getElementById("ckd").checked = false; 
			document.getElementById("proteynuria").checked = false; 
			document.getElementById("hyperten").checked = false; 
			document.getElementById("hepatynsuf").checked = false; 
			document.getElementById("desnutry").checked = false; 
			document.getElementById("posynd").checked = false; 
			document.getElementById("dyab1").checked = false; 
			document.getElementById("dyabAFamil").checked = false; 
			document.getElementById("diabpregn").checked = false; 
			document.getElementById("dyana").checked = false; 
			document.getElementById("microangy").checked = false; 
			document.getElementById("retyno").checked = false; 
			
			document.getElementById("ttoBBly").checked = false; 
			document.getElementById("ttoIECAy").checked = false; 
			document.getElementById("ttoARA2y").checked = false; 
			document.getElementById("ttoTiazy").checked = false; 
			document.getElementById("ttoStatins").checked = false; 
			document.getElementById("ttoCaAntagy").checked = false; 
			document.getElementById("ttoACOy").checked = false; 
			document.getElementById("ttoDihidropiridiny").checked = false; 
			document.getElementById("ttoAASy").checked = false; 
			document.getElementById("ttoIPCSKy").checked = false; 
			document.getElementById("ttoInsulin").checked = false; 
			document.getElementById("ttoMetformin").checked = false; 
			document.getElementById("ttoRepaglinide").checked = false; 
			document.getElementById("ttoiDPP4y").checked = false; 
			document.getElementById("ttoaGLP1y").checked = false; 
			document.getElementById("ttoiSGLT2y").checked = false; 
			document.getElementById("contraBBly").checked = false; 
			document.getElementById("contraIECAy").checked = false; 
			document.getElementById("contraARA2y").checked = false; 
			document.getElementById("contraTiazy").checked = false; 
			document.getElementById("contraStatins").checked = false; 
			document.getElementById("contraCaAntagy").checked = false; 
			document.getElementById("contraACOy").checked = false; 
			document.getElementById("contraTicagrely").checked = false; 
			document.getElementById("contraPrasugrely").checked = false; 
			document.getElementById("contraAASy").checked = false; 
			document.getElementById("contraIPCSKy").checked = false; 
			document.getElementById("contraInsulin").checked = false; 
			document.getElementById("contraMetformin").checked = false; 
			document.getElementById("contraRepaglinide").checked = false; 
			document.getElementById("contraiDPP4y").checked = false; 
			document.getElementById("contraaGLP1y").checked = false; 
			document.getElementById("contraiSGLT2y").checked = false; 
			//document.getElementById("haclinica").reset();
		}

