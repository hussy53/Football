
    //list of available posiitons
    let positions = [];


    //changes player name based on position
    function changePlayerName(){
      let name = document.getElementById("input_text").value
      let position = document.getElementById("position").value;

      document.getElementById(position).innerHTML=name;
    }

    //function to add players for both sides given position and count
    function addPlayer(pos,count){
      className1 = "TEAM1_"+pos;
      className2 = "TEAM2_"+pos;
      let parentClass1 = document.getElementById(className1);
      let parentClass2 = document.getElementById(className2);
      parentClass1.innerHTML="";
      parentClass2.innerHTML="";
      for(var i= 1;i<=count;i++){
        let childObj1 = document.createElement('p');
        childObj1.id ="TEAM1_"+pos+i;
        childObj1.innerHTML=pos;
        positions.push(childObj1.id);
        let childObj2 = document.createElement('p');
        childObj2.id ="TEAM2_"+pos+i;
        childObj2.innerHTML=pos;
        positions.push(childObj2.id);
        parentClass1.appendChild(childObj1);
        parentClass2.appendChild(childObj2);
        positions.push()

      }

    }

    function addPositions(){
      let PositonsClass = document.getElementById("position");
      for(var i= 0;i<positions.length;i++){
        let positionOption = document.createElement('option');
        positionOption.value = positions[i];
        positionOption.innerHTML = positions[i];
        PositonsClass.appendChild(positionOption);

      }
    }


   //changes team format
    function selectOption() {
      let optionValue = document.getElementById("playerCount").value;
      positions.splice(0, positions.length);
      if(optionValue==6){
        addPlayer("GK",1);
        addPlayer("DEF",2);
        addPlayer("MID",2);
        addPlayer("ST",1);

      }
      else if (optionValue==7){
        addPlayer("GK",1);
        addPlayer("DEF",3);
        addPlayer("MID",2);
        addPlayer("ST",1);
      }
      else if (optionValue==8){
        addPlayer("GK",1);
        addPlayer("DEF",3);
        addPlayer("MID",3);
        addPlayer("ST",1);
      }
      else if (optionValue==9){
        addPlayer("GK",1);
        addPlayer("DEF",3);
        addPlayer("MID",3);
        addPlayer("ST",2);
      }
      else if (optionValue==10){
        addPlayer("GK",1);
        addPlayer("DEF",4);
        addPlayer("MID",3);
        addPlayer("ST",2);
      }
      else if (optionValue==11){
        addPlayer("GK",1);
        addPlayer("DEF",4);
        addPlayer("MID",3);
        addPlayer("ST",3);
      }
      console.log(positions);
      addPositions();

    }
