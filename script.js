function tikrinkViska(event){
    event.preventDefault();
    let kodas = document.getElementById("kodas").value;
    let skaiciai = kodas.split("");
    let ilgis = kodas.toString().length;

    function kiekSkaitmenu(){
        //patikrina ar skaitmenų yra 11
        if(ilgis == 11){
            return true;
        }else{
            return false;
        }
    }

    function arSkaicius(){
        //patikrina ar yra įvestas skaičius ir ar jis nėra neigiamas
        if(Number.isInteger(parseInt(kodas)) && kodas>0){
            return true;
        }else{
            return false;
        }
    }

    function pirmasSkaitmuo(){
        //tikrina pirmąjį skaitmenį
        if(skaiciai[0]>=1 && skaiciai[0]<=6){
            return true;
        }else if(skaiciai[0]==9){
            return true;
        }else{
            return false;
        }
        
    }

    function ketvirtasSkaitmuo(){
        //ketvirtas skaitmuo nurodo pirmąjį mėnesio skaitmenį, kadangi mėnesių yra tik 12, šis skaičius gali būti tik 1 arba 2
        //pamiršusiems gimimo datą yra vedamas 0, todėl viskas gerai
        if(skaiciai[3] == 0 || skaiciai[3]== 1){
            return true;
        }else{
            return false;
        }
    }

    function penktasSkaitmuo(){
        //jei pirmas mėnesio skaitmuo yra 1, tai antras skaitmuo gali būti tik 0, 1 arba 2, nes yra 12 mėnesių
        //pamiršusiems gimimo datą yra vedamas 0, todėl viskas gerai
        if(skaiciai[3] == 1 && skaiciai[4]==0){
            return true;
        }else if(skaiciai[3] == 1 && skaiciai[4]==1){
            return true;
        }else if(skaiciai[3] == 1 && skaiciai[4]==2){
            return true;
        }else if (skaiciai[3] == 0 && skaiciai[4]>=0 && skaiciai[4]<=9){
            return true;
        }else{
            return false;
        }
    }

    function sestasSkaitmuo(){
        //dienos pirmas skaitmuo gali būti tik 0, 1, 2 arba 3, nes mėnuo turi daugiausia 31 dieną
        if(skaiciai[5] == 0 || skaiciai[5] == 1 || skaiciai[5] == 2){
            return true;
        }else if(skaiciai[4] == 2 && skaiciai[5] == 3){
            //vasario mėnesį 6 skaitmuo nebus 3, nes vasaris turi tik 29 dienas
            return false;
        }else if (skaiciai[4] !== 2 && skaiciai[5] == 3){
            return true;
        }else{
            return false;
        }
    }

    function vienuoliktasSkaitmuo(){
        //tikrina kontrolinį skaitmenį
        let s1 = skaiciai[0]*1 + skaiciai[1]*2 + skaiciai[2]*3 + skaiciai[3]*4 + skaiciai[4]*5 + skaiciai[5]*6 + skaiciai[6]*7 + skaiciai[7]*8 + skaiciai[8]*9 + skaiciai[9]*1;
        let liekana1 = s1%11;
        let s2 = skaiciai[0]*3 + skaiciai[1]*4 + skaiciai[2]*5 + skaiciai[3]*6 + skaiciai[4]*7 + skaiciai[5]*8 + skaiciai[6]*9 + skaiciai[7]*1 + skaiciai[8]*2 + skaiciai[9]*3;
        let liekana2 = s2%11;

        if(liekana1 !== 10 && skaiciai[10] == liekana1){
            return true;
        }else if (liekana2 !== 10 && skaiciai[10] == liekana2){
            return true;
        }else if (liekana2 == 10 && skaiciai[10] == 0){
            return true;
        }else{
            return false;
        }
    }
        //patikrina ar skaičius yra asmens kodas
        if(arSkaicius() && kiekSkaitmenu() && pirmasSkaitmuo() && ketvirtasSkaitmuo() && penktasSkaitmuo() && sestasSkaitmuo() && vienuoliktasSkaitmuo()){
            alert("Ačiū, asmens kodas užregistruotas!");
        }else if(arSkaicius() == false){
            alert("Netinkamas skaičiaus formatas");
        }else if(kiekSkaitmenu() == false){
            alert("Asmens kodas turi būti 11 skaitmenų");
        }else{
            console.log("galutinis");
            alert("Neteisingas asmens kodas!");
        }
    }