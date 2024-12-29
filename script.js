{//variables
var elements = document.getElementById("elements");
var comboJump = document.getElementById("comboJump");
var jumpsDefault1 = document.getElementById("jumpsDefault1");
var jumpsDefault2 = document.getElementById("jumpsDefault2");
var jumpsDefault3 = document.getElementById("jumpsDefault3");
var jumps1 = document.getElementById("jumps1");
var jumps2 = document.getElementById("jumps2");
var jumps3 = document.getElementById("jumps3");
var rotations1 = document.getElementById("rotations1");
var rotations2 = document.getElementById("rotations2");
var rotations3 = document.getElementById("rotations3");
var plus1 = document.getElementById("plus1");
var plus2 = document.getElementById("plus2")
var enter = document.getElementById("enter");
var level = document.getElementById("level");
var shortLong = document.getElementById("shortLong");
var levelResult = document.getElementById("levelResult");
var comboSelect = document.getElementById("comboSelect");
var fly = document.getElementById("flyNoFly");
var foot = document.getElementById("changeFoot");
var type = document.getElementById("type");
var spinLevel = document.getElementById("spinLevel");
var stepsChoreo = document.getElementById("stepsChoreo");
var stepLevel = document.getElementById("stepLevel");
var spinResult = "";
var jumpA = "";
var jumpB = "";
var jumpC = "";
var jumpOutput = "";
var BV;
var calculate = document.getElementById("calculate");
var totalNum = document.getElementById("totalNum");
var total = document.getElementById("total");
var bv1 = document.getElementById("bv1");
var element1 = document.getElementById("element1");
var element2 = document.getElementById("element2");
var index = 0;
var numOfElements = document.getElementById("numOfElements");
enter.style.backgroundColor = "white";
}

//useful stuff 
{
function hideAll () {
  comboJump.style.display = "none";
  jumps1.style.display = "none";
  rotations1.style.display = "none";
  plus1.style.display = "none"
  enter.style.display = "none";
  comboSelect.style.display = "none";
  fly.style.display = "none";
  foot.style.display = "none";
  type.style.display = "none";
  spinLevel.style.display = "none";
  rotations1.style.display = "none";
  jumps1.style.display = "none";
  plus1.style.display = "none";
  rotations2.style.display = "none";
  jumps2.style.display = "none";
  plus2.style.display = "none";
  rotations3.style.display = "none";
  jumps3.style.display = "none"
  enter.style.display = "none";
  stepsChoreo.style.display = "none";
  stepLevel.style.display = "none";
}
function defaultAll () {
  comboSelect.value = "default";
  fly.value = "default";
  foot.value = "default";
  type.value = "default";
  spinLevel.value = "default";
  comboJump.value = "default";
  rotations1.value = "default";
  jumpsDefault1.value = "default";
  rotations2.value = "default";
  jumps2.value = "default";
  rotations3.value = "default";
  jumps3.value = "default";
  stepsChoreo.value = "default";
  stepLevel.value = "default";
}
function jumpCodes (num) {
  var jumpsDefault = document.getElementById("jumpsDefault" + num);
  var jumpsNum = document.getElementById("jumps" + num);
  if (jumpsNum.value == "Axel") {
    jumpsNum.value = "default";
    jumpsDefault.text = "A";
  } else if (jumpsNum.value == "Sal") {
    jumpsNum.value = "default";
    jumpsDefault.text = "S";
  } else if (jumpsNum.value == "Toe") {
    jumpsNum.value = "default";
    jumpsDefault.text = "T";
  } else if (jumpsNum.value == "Loop") {
    jumpsNum.value = "default";
    jumpsDefault.text = "Lo";
  } else if (jumpsNum.value == "Flip") {
    jumpsNum.value = "default";
    jumpsDefault.text = "F";
  } else if (jumpsNum.value == "Lutz") {
    jumpsNum.value = "default";
    jumpsDefault.text = "Lz";
  }
}
}

//selecting stuff at the begining
{
var output;
//select program
function levelDropDown () {
  output = level.value + " " + shortLong.value;
  shortLong.style.display = "inline";
  maxElements();
  if (output == "Juvinile Freeskate") {
    elements.style.display = "inline";
  } else if (level.value == "Level" || shortLong.value == "Program") {
    elements.style.display = "none";
  } else {
    elements.style.display = "inline";
  }
  levelResult.innerHTML = output;
  numOfElements.innerHTML = numOfElementsOutput;
}

var numOfElementsOutput;
//elements allowed
function maxElements () {
  if (output == "Juvinile Program" || output == "Juvinile Short" || output == "Juvinile Freeskate") {
    numJumpsNeed = 5;
    output = "Juvinile Freeskate";
    shortLong.style.display = "none";
    numOfElementsOutput = "8 Elements: 5 Jumps, 2 Spins, Choreographic Sequence";
  } else if (output == "Intermediate Short"){
    numJumpsNeed = 3;
    numOfElementsOutput = "6 Elements: 3 Jumps, 2 Spins, Step Sequence";
  } else if (output == "Intermediate Freeskate") {
    numJumpsNeed = 6;
    numOfElementsOutput = "9 Elements: 6 Jumps, 2 Spins, Step Sequence";
  } else if (output == "Novice Short"){
    numJumpsNeed = 3;
    numOfElementsOutput = "6 Elements: 3 Jumps, 2 Spins, Step Sequence";
  } else if (output == "Novice Freeskate") {
    numJumpsNeed = 7;
    numOfElementsOutput = "11 Elements: 7 Jumps, 3 Spins, Choreographic Sequence";
  } else if (output == "Junior Short"){
    numJumpsNeed = 3;
    numOfElementsOutput = "7 Elements: 3 Jumps, 3 Spins, Choreographic Step Sequence";
  } else if (output == "Junior Freeskate") {
    numJumpsNeed = 7;
    numOfElementsOutput = "11 Elements: 7 Jumps, 3 Spins, Choreographic Sequence";
  } else if (output == "Senior Short"){
    numJumpsNeed = 3;
    numOfElementsOutput = "7 Elements: 3 Jumps, 3 Spins, Step Sequence";
  } else if (output == "Senior Freeskate") {
    numJumpsNeed = 7;
    numOfElementsOutput = "12 Elements: 7 Jumps, 3 Spins, Step Sequence, Choreographic Sequence";
  } else {
    numOfElementsOutput = "";
  }
}
}

//drop downs and choosing
{
//Jump spin or step/choreo
function dropDowns () {
  defaultAll();
  if (elements.value == "Jump") {
    hideAll();
    comboJump.style.display = "inline";
  } else if (elements.value == "Spin") {
    hideAll();
    comboSelect.style.display = "inline";
  } else if (elements.value == "Other") {
    hideAll();
    stepsChoreo.style.display = "inline";
  } else if (elements.value == "default") {
    hideAll();
  }
}

//jumps
function comboJumpSelect () {
  rotations1.value = "default";
  jumpsDefault1.value = "default";
  rotations2.value = "default";
  jumps2.value = "default";
  rotations3.value = "default";
  jumps3.value = "default";
  jumpsDefault1.text = "Select Jump";
  jumpsDefault2.text = "Select Jump";
  jumpsDefault3.text = "Select Jump";
  if (comboJump.value == "Solo jump") {
    hideAll();
    comboJump.style.display = "inline";
    rotations1.style.display = "inline";
    jumps1.style.display = "inline";
    plus1.style.display = "none";
    enter.style.display = "inline";
  } else if (comboJump.value == "2 Jump Combination") {
    hideAll();
    comboJump.style.display = "inline";
    rotations1.style.display = "inline";
    jumps1.style.display = "inline";
    plus1.style.display = "inline";
    rotations2.style.display = "inline";
    jumps2.style.display = "inline";
    enter.style.display = "inline";
  } else if (comboJump.value == "3 Jump Combination") {
    rotations1.style.display = "inline";
    jumps1.style.display = "inline";
    plus1.style.display = "inline";
    rotations2.style.display = "inline";
    jumps2.style.display = "inline";
    plus2.style.display = "inline";
    rotations3.style.display = "inline";
    jumps3.style.display = "inline";
    enter.style.display = "inline";
  } else if (comboJump.value == "default") {
    hideAll();
    comboJump.style.display = "inline";
  }
}

//spins
function comboChange () {
  fly.value = "default";
  foot.value = "default";
  type.value = "default";
  spinLevel.value = "default";
  if (comboSelect.value == "Solo spin") {
    fly.style.display = "inline";
    foot.style.display = "inline";
    type.style.display = "inline";
    spinLevel.style.display = "inline";
    enter.style.display = "inline";
  } else if (comboSelect.value == "Combination spin") {
    fly.style.display = "inline";
    foot.style.display = "inline";
    type.style.display = "none";
    spinLevel.style.display = "inline";
    enter.style.display = "inline";
  } else if (comboSelect.value == "default") {
    hideAll();
    comboSelect.style.display = "inline";
  }
}

function spinCode () {
    spinResult = "";
  if (comboSelect.value == "Solo spin" && fly.value == "No fly" && foot.value == "No change of foot") {
    positionSelect();
    spinResult = spinResult + spinLevel.value;
  } else if (comboSelect.value == "Solo spin" && fly.value == "Fly" && foot.value == "No change of foot") {
    positionSelect();
    spinResult = "F" + spinResult + spinLevel.value;
  } else if (comboSelect.value == "Solo spin" && fly.value == "No fly" && foot.value == "Change of foot") {
    positionSelect();
    spinResult = " C" + spinResult + spinLevel.value;
  } else if (comboSelect.value == "Solo spin" && fly.value == "Fly" && foot.value == "Change of foot") {
    positionSelect();
    spinResult = "FC" + spinResult + spinLevel.value;
  } else if (comboSelect.value == "Combination spin" && fly.value == "No fly" && foot.value == "No change of foot") {
    spinResult = " CoSp" + spinLevel.value;
  } else if (comboSelect.value == "Combination spin" && fly.value == "Fly" && foot.value == "No change of foot") {
    spinResult = "FCoSp" + spinLevel.value;
  } else if (comboSelect.value == "Combination spin" && fly.value == "No fly" && foot.value == "Change of foot") {
    spinResult = " CCoSp" + spinLevel.value;
  } else if (comboSelect.value == "Combination spin" && fly.value == "Fly" && foot.value == "Change of foot") {
    spinResult = "FCCoSp" + spinLevel.value;
  }
}

function positionSelect () {
  if (type.value == "Upright") {
    spinResult = "USp"
  } else if (type.value == "Layback") {
    spinResult = "LSp"
  } else if (type.value == "Camel") {
    spinResult = "CSp"
  } else if (type.value == "Sit") {
    spinResult = "SSp"
  } 
}

//step and choreo sequences / other

function stepsOther () {
  if (stepsChoreo.value == "default") {
    enter.style.display = "none";
  } else if (stepsChoreo.value == "Step Sequence") {
    enter.style.display = "inline";
    stepLevel.style.display = "inline";
  } else if (stepsChoreo.value == "Choreographic Sequence") {
    enter.style.display = "inline";
    stepLevel.style.display = "none";
  }
}

var stepOrChoreo = "";
}

//enter delete and edit buttons
{

function enterOrConfirm () {
  if(enter.style.backgroundColor == "white"){
    enterButton();
  } else if(enter.style.backgroundColor == "yellow"){
    confirmButton();
  }
}

function enterButton () {
  index = index + 1;
  var ID = document.getElementById("element" + index);
  var bv = document.getElementById("bv" + index);
  var X = document.getElementById("X" + index);
  var E = document.getElementById("E" + index);
  var output = "";
  if (elements.value == "Jump") {
    if (comboJump.value == "Solo jump") {
      jumpA = rotations1.value + jumpsDefault1.text;
      jumpOutput = jumpA;
      output = index + ".  " + jumpOutput;
      jumpBV("A");
      bv.innerHTML = jumpResult;
      output = index + ".  " + jumpOutput;
    } else if (comboJump.value == "2 Jump Combination") {
      jumpA = rotations1.value + jumpsDefault1.text;
      jumpB = rotations2.value + jumpsDefault2.text;
      jumpOutput = jumpA + "+" + jumpB;
      output = index + ".  " + jumpOutput;
      jumpBV("A");
      jumpBV("B");
      output = index + ".  " + jumpOutput;
      bv.innerHTML = jumpResult;
    } else if (comboJump.value == "3 Jump Combination") {
      jumpA = rotations1.value + jumpsDefault1.text;
      jumpB = rotations2.value + jumpsDefault2.text;
      jumpC = rotations3.value + jumpsDefault3.text
      jumpOutput = jumpA + "+" + jumpB + "+" + jumpC;
      jumpBV("A");
      jumpBV("B");
      jumpBV("C");
      output = index + ".  " + jumpOutput;
      bv.innerHTML = jumpResult;
    }
    jumpsDefault1.text = "Select Jump";
    jumpsDefault2.text = "Select Jump";
    jumpsDefault3.text = "Select Jump";
  } else if (elements.value == "Spin") {
    spinCode();
    spinBV ();
    output = index + ".  " + spinResult;
    bv.innerHTML = BV;
  } else if (elements.value == "Other") {
    if (stepsChoreo.value == "Step Sequence") {
      stepOrChoreo = "StSq" + stepLevel.value;
      stepChoreoBV();
      bv.innerHTML = BV;
      output = index + ".  " + stepOrChoreo;
    } else if (stepsChoreo.value == "Choreographic Sequence") {
      stepOrChoreo = "ChSq";
      stepChoreoBV();
      bv.innerHTML = BV;
      output = index + ".  " + stepOrChoreo;
    }
  }
  ID.innerHTML = output;
  ID.style.display = "inline";
  bv.style.display = "inline";
  elements.value = "default";
  X.style.display = "inline";
  E.style.display = "inline";

  dropDowns();
  if (element1.style.display == "inline" && element2.style.display == "inline") {
    calculate.style.display = "inline";
    total.style.display = "inline";
  }
}

//delete button
function Xdelete (num) {
  var first = document.getElementById("element" + num);
  var second = document.getElementById("element" + (num+1));
  var firstBv = document.getElementById("bv" + num);
  var secondBv;
  var check = false;

  //if theyre removing the last element on the list
  {
  if(first.style.display == "inline" && (second.style.display == "" || second.style.display == "none")){
    first.innerHTML = "";
    firstBv.innerHTML = "0";
    first.style.display = "none";
    firstBv.style.display = "none";
    (document.getElementById("X"+(num))).style.display = "none";
    (document.getElementById("E"+(num))).style.display = "none";
    index = index - 1;
    check = true;
  }
  }

  //if theyre removing an item in the middle of the list
  {
  for (var i = 0; second.style.display == "inline"; i++) {
    if (check == true){
      break;
    }
    first = document.getElementById("element" + num);
    second = document.getElementById("element" + (num+1));
    firstBv = document.getElementById("bv" + num);
    secondBv = document.getElementById("bv" + (num+1));

    first.innerHTML = num + ". " + second.innerText.substring(2);
    firstBv.innerHTML = secondBv.innerText;
    num = num + 1;
  }
  if (check == false){
  second = document.getElementById("element" + (num-1));
  secondBv = document.getElementById("bv" + (num-1));
  second.innerHTML = "";
  secondBv.innerHTML = "0";
  second.style.display = "none";
  secondBv.style.display = "none";
  (document.getElementById("X"+(num-1))).style.display = "none";
  (document.getElementById("E"+(num-1))).style.display = "none";
  index = index - 1;
  }
  }

}

var editNum = 0;
var selectedElement;
var selectedBv;

function edit (num) {
  editNum = num;
  enter.style.backgroundColor = "yellow";
  selectedElement = document.getElementById("element" + num);
  selectedBv = document.getElementById("bv" + num);
  selectedElement.style.backgroundColor = "yellow";
  selectedElement.style.color = "black";
  selectedBv.style.backgroundColor = "yellow";
  selectedBv.style.color = "black";
  elements.style.backgroundColor = "yellow";
}

function confirmButton () {
  if (elements.value == "Jump") {
    if (comboJump.value == "Solo jump") {
      jumpA = rotations1.value + jumpsDefault1.text;
      jumpOutput = jumpA;
      selectedElement.innerHTML = editNum + ".  " + jumpOutput;
      jumpBV("A");
      selectedBv.innerHTML = jumpResult;
      selectedElement.innerHTML = editNum + ".  " + jumpOutput;
    } else if (comboJump.value == "2 Jump Combination") {
      jumpA = rotations1.value + jumpsDefault1.text;
      jumpB = rotations2.value + jumpsDefault2.text;
      jumpOutput = jumpA + "+" + jumpB;
      selectedElement.innerHTML = editNum + ".  " + jumpOutput;
      jumpBV("A");
      jumpBV("B");
      selectedElement.innerHTML = editNum + ".  " + jumpOutput;
      selectedBv.innerHTML = jumpResult;
    } else if (comboJump.value == "3 Jump Combination") {
      jumpA = rotations1.value + jumpsDefault1.text;
      jumpB = rotations2.value + jumpsDefault2.text;
      jumpC = rotations3.value + jumpsDefault3.text
      jumpOutput = jumpA + "+" + jumpB + "+" + jumpC;
      jumpBV("A");
      jumpBV("B");
      jumpBV("C");
      selectedElement.innerHTML = editNum + ".  " + jumpOutput;
      selectedBv.innerHTML = jumpResult;
    }
    jumpsDefault1.text = "Select Jump";
    jumpsDefault2.text = "Select Jump";
    jumpsDefault3.text = "Select Jump";
  } else if (elements.value == "Spin") {
    spinCode();
    spinBV ();
    selectedElement.innerHTML = editNum + ".  " + spinResult;
    selectedBv.innerHTML = BV;
  } else if (elements.value == "Other") {
    if (stepsChoreo.value == "Step Sequence") {
      stepOrChoreo = "StSq" + stepLevel.value;
      stepChoreoBV();
      selectedBv.innerHTML = BV;
      selectedElement.innerHTML = editNum + ".  " + stepOrChoreo;
    } else if (stepsChoreo.value == "Choreographic Sequence") {
      stepOrChoreo = "ChSq";
      stepChoreoBV();
      selectedBv.innerHTML = BV;
      selectedElement.innerHTML = editNum + ".  " + stepOrChoreo;
    }
  }
  dropDowns();
  enter.style.backgroundColor = "white";
  selectedElement.style.backgroundColor = "";
  selectedElement.style.color = "white";
  selectedBv.style.backgroundColor = "";
  selectedBv.style.color = "white";
  elements.style.backgroundColor = "white";
}
}

//bv calculations
{
//jump bv calculations
var jumpId;
var BVB;
var BVC;
var jumpResult;

function jumpBV (letter) {
  if (letter == "A") {
    jumpId = jumpA;
  } else if (letter == "B") {
    BVB = BV;
    jumpId = jumpB;
  } else if (letter == "C") {
    BVC = BVB;
    jumpId =  jumpC;
  }

  if (jumpId == "1T" || jumpId == "1S") {
    BV = 0.40;
  } else if (jumpId == "1Lo" || jumpId == "1F") {
    BV = 0.50;
  } else if (jumpId == "1Lz") {
    BV = 0.60;
  } else if (jumpId == "1A") {
    BV = 1.10;
  } else if (jumpId == "2T" || jumpId == "2S") {
    BV = 1.30;
  } else if (jumpId == "2Lo") {
    BV = 1.70;
  } else if (jumpId == "2F") {
    BV = 1.80;
  } else if (jumpId == "2Lz") {
    BV = 2.10;
  } else if (jumpId == "2A") {
    BV = 3.30;
  } else if (jumpId == "3T") {
    BV = 4.20;
  } else if (jumpId == "3S") {
    BV = 4.30;
  } else if (jumpId == "3Lo") {
    BV = 4.90;
  } else if (jumpId == "3F") {
    BV = 5.30;
  } else if (jumpId == "3Lz") {
    BV = 5.90;
  } else if (jumpId == "3A") {
    BV = 8.00;
  } else if (jumpId == "4T") {
    BV = 9.50;
  } else if (jumpId == "4S") {
    BV = 9.70;
  } else if (jumpId == "4Lo") {
    BV = 10.50;
  } else if (jumpId == "4F") {
    BV = 11.00;
  } else if (jumpId == "4Lz") {
    BV = 11.50;
  } else if (jumpId == "4A") {
    BV = 12.50;
  }

  if (letter == "A") {
    jumpResult = BV;
  } else if (letter == "B") {
    BVB = BVB + BV;
    jumpResult = (BVB);
  } else if (letter == "C") {
    jumpResult = (BVC + BV);
  }
  if (jumpResult % 1 == 0){
    jumpResult = jumpResult + ".00";
  } else {
    jumpResult = jumpResult + "0";
  }
}

//spin bv calculations
function spinBV () {
  if (spinResult.substring(0, 3) == "USp") {
    if (spinResult.substring(3, 4) == "B") {
      BV = 1 + ".00";
    } else if (spinResult.substring(3, 4) == "1"){
      BV = 1.2 + "0";
    } else if (spinResult.substring(3, 4) == "2"){
      BV = 1.5 + "0";
    } else if (spinResult.substring(3, 4) == "3"){
      BV = 1.9 + "0";
    } else if (spinResult.substring(3, 4) == "4"){
      BV = 2.4 + "0";
    }
  } else if (spinResult.substring(0, 3) == "LSp") {
    if (spinResult.substring(3, 4) == "B") {
      BV = 1.2 + "0";
    } else if (spinResult.substring(3, 4) == "1"){
      BV = 1.5 + "0";
    } else if (spinResult.substring(3, 4) == "2"){
      BV = 1.9 + "0";
    } else if (spinResult.substring(3, 4) == "3"){
      BV = 2.4 + "0";
    } else if (spinResult.substring(3, 4) == "4"){
      BV = 2.7 + "0";
    }
  } else if (spinResult.substring(0, 3) == "CSp") {
    if (spinResult.substring(3, 4) == "B") {
      BV = 1.1 + "0";
    } else if (spinResult.substring(3, 4) == "1"){
      BV = 1.4 + "0";
    } else if (spinResult.substring(3, 4) == "2"){
      BV = 1.8 + "0";
    } else if (spinResult.substring(3, 4) == "3"){
      BV = 2.3 + "0";
    } else if (spinResult.substring(3, 4) == "4"){
      BV = 2.6 + "0";
    }
  } else if (spinResult.substring(0, 3) == "SSp") {
    if (spinResult.substring(3, 4) == "B") {
      BV = 1.1 + "0";
    } else if (spinResult.substring(3, 4) == "1"){
      BV = 1.3 + "0";
    } else if (spinResult.substring(3, 4) == "2"){
      BV = 1.6 + "0";
    } else if (spinResult.substring(3, 4) == "3"){
      BV = 2.1 + "0";
    } else if (spinResult.substring(3, 4) == "4"){
      BV = 2.5 + "0";
    }
  } else if (spinResult.substring(0, 4) == "FUSp") {
    if (spinResult.substring(4, 5) == "B"){
      BV = 1.5 + "0";
    } else if (spinResult.substring(4, 5) == "1") {
      BV = 1.7 + "0";
    } else if (spinResult.substring(4, 5) == "2") {
      BV = 2 + ".00";
    } else if (spinResult.substring(4, 5) == "3") {
      BV = 2.4 + "0";
    } else if (spinResult.substring(4, 5) == "4") {
      BV = 2.9 + "0";
    }
  } else if (spinResult.substring(0, 4) == "FLSp") {
    if (spinResult.substring(4, 5) == "B"){
      BV = 1.7 + "0";
    } else if (spinResult.substring(4, 5) == "1") {
      BV = 2 + ".00";
    } else if (spinResult.substring(4, 5) == "2") {
      BV = 2.4 + "0";
    } else if (spinResult.substring(4, 5) == "3") {
      BV = 2.9 + "0";
    } else if (spinResult.substring(4, 5) == "4") {
      BV = 3.2 + "0";
    }
  } else if (spinResult.substring(0, 4) == "FCSp") {
    if (spinResult.substring(4, 5) == "B"){
      BV = 1.6 + "0";
    } else if (spinResult.substring(4, 5) == "1") {
      BV = 1.9 + "0";
    } else if (spinResult.substring(4, 5) == "2") {
      BV = 2.3 + "0";
    } else if (spinResult.substring(4, 5) == "3") {
      BV = 2.8 + "0;"
    } else if (spinResult.substring(4, 5) == "4") {
      BV = 3.2 + "0";
    }
  } else if (spinResult.substring(0, 4) == "FSSp") {
    if (spinResult.substring(4, 5) == "B"){
      BV = 1.7 + "0";
    } else if (spinResult.substring(4, 5) == "1") {
      BV = 2 + ".00";
    } else if (spinResult.substring(4, 5) == "2") {
      BV = 2.3 + "0";
    } else if (spinResult.substring(4, 5) == "3") {
      BV = 2.6 + "0";
    } else if (spinResult.substring(4, 5) == "4") {
      BV = 3 + ".00";
    }
  } else if (spinResult.substring(1, 5) == "CUSp") {
    if (spinResult.substring(5, 6) == "B") {
      BV = 1.5 + "0";
    } else if (spinResult.substring(5, 6) == "1") {
      BV = 1.7 + "0";
    } else if (spinResult.substring(5, 6) == "2") {
      BV = 2 + ".00";
    } else if (spinResult.substring(5, 6) == "3") {
      BV = 2.4 + "0";
    } else if (spinResult.substring(5, 6) == "4") {
      BV = 2.9 + "0";
    }
  } else if (spinResult.substring(1, 5) == "CLSp") {
    if (spinResult.substring(5, 6) == "B") {
      BV = 1.7 + "0";
    } else if (spinResult.substring(5, 6) == "1") {
      BV = 2 + ".00";
    } else if (spinResult.substring(5, 6) == "2") {
      BV = 2.4 + "0";
    } else if (spinResult.substring(5, 6) == "3") {
      BV = 2.9 + "0";
    } else if (spinResult.substring(5, 6) == "4") {
      BV = 3.2 + "0";
    }
  } else if (spinResult.substring(1, 5) == "CCSp") {
    if (spinResult.substring(5, 6) == "B") {
      BV = 1.7 + "0";
    } else if (spinResult.substring(5, 6) == "1") {
      BV = 2 + ".00";
    } else if (spinResult.substring(5, 6) == "2") {
      BV = 2.3 + "0";
    } else if (spinResult.substring(5, 6) == "3") {
      BV = 2.8 + "0";
    } else if (spinResult.substring(5, 6) == "4") {
      BV = 3.2 + "0";
    } 
  } else if (spinResult.substring(1, 5) == "CSSp") {
    if (spinResult.substring(5, 6) == "B") {
      BV = 1.6 + "0";
    } else if (spinResult.substring(5, 6) == "1") {
      BV = 1.9 + "0";
    } else if (spinResult.substring(5, 6) == "2") {
      BV = 2.3 + "0";
    } else if (spinResult.substring(5, 6) == "3") {
      BV = 2.6 + "0";
    } else if (spinResult.substring(5, 6) == "4") {
      BV = 3 + ".00";
    }
  } else if (spinResult.substring(1, 5) == "CoSp") {
    if (spinResult.substring(5, 6) == "B"){
      BV = 1.5 + "0";
    } else if (spinResult.substring(5, 6) == "1"){
      BV = 1.7 + "0";
    } else if (spinResult.substring(5, 6) == "2"){
      BV = 2 + ".00";
    } else if (spinResult.substring(5, 6) == "3"){
      BV = 2.5 + "0";
    } else if (spinResult.substring(5, 6) == "4"){
      BV = 3 + ".00";
    }
  } else if (spinResult.substring(1, 6) == "CCoSp") {
    if(spinResult.substring(6, 7) == "B"){
      BV = 1.7 + "0";
    } else if (spinResult.substring(6, 7) == "1"){
      BV = 2 + ".00";
    } else if (spinResult.substring(6, 7) == "2"){
      BV = 2.5 + "0";
    } else if (spinResult.substring(6, 7) == "3"){
      BV = 3 + ".00";
    } else if (spinResult.substring(6, 7) == "4"){
      BV = 3.5 + "0";
    }
  }
}

//step and choreo bv calculations
function stepChoreoBV () {
  if (stepOrChoreo.substring(0, 4) == "StSq") {
    if (stepOrChoreo.substring(4, 5) == "B") {
      BV = 1.5 + "0";
    } else if (stepOrChoreo.substring(4, 5) == "1") {
      BV = 1.8 + "0";
    } else if (stepOrChoreo.substring(4, 5) == "2") {
      BV = 2.6 + "0";
    } else if (stepOrChoreo.substring(4, 5) == "3") {
      BV = 3.3 + "0";
    } else if (stepOrChoreo.substring(4, 5) == "4") {
      BV = 3.9 + "0";
    }
  } else if (stepOrChoreo == "ChSq") {
    BV = 3 + ".00";
  }
}

//calculate button
function calculateBV () {
  var totalBV = 0;
  for (var i = 1; i <= index; i++) {
    var hm = "bv" + i;
    var thing = document.getElementById(hm);
    var otherThing = thing.innerText;
    var elementBV = parseFloat(otherThing);
    totalBV = totalBV + elementBV;
  }
  if(totalBV % 1 == 0) {
    totalBV = totalBV + ".00";
  } else {
    totalBV = parseFloat(totalBV.toFixed(2));
  }
  totalNum.innerHTML = totalBV;
  totalNum.style.display = "inline";
}
}
