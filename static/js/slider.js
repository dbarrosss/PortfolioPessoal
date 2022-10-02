radio1 = document.getElementById("radio-competencias1");
radio2 = document.getElementById("radio-competencias2");
radio3 = document.getElementById("radio-competencias3");
radio4 = document.getElementById("radio-competencias4");
radio5 = document.getElementById("radio-competencias5");
radio6 = document.getElementById("radio-competencias6");

function radio1_checked() {
  radio1.checked = true;
  radio2.checked = false;
  radio3.checked = false;
  radio4.checked = false;
  radio5.checked = false;
  radio6.checked = false;

  checked(
    radio1.checked,
    radio2.checked,
    radio3.checked,
    radio4.checked,
    radio5.checked,
    radio6.checked
  );
}

function radio2_checked() {
  radio1.checked = false;
  radio2.checked = true;
  radio3.checked = false;
  radio4.checked = false;
  radio5.checked = false;
  radio6.checked = false;
  checked(
    radio1.checked,
    radio2.checked,
    radio3.checked,
    radio4.checked,
    radio5.checked,
    radio6.checked
  );
}

function radio3_checked() {
  radio1.checked = false;
  radio2.checked = false;
  radio3.checked = true;
  radio4.checked = false;
  radio5.checked = false;
  radio6.checked = false;
  checked(
    radio1.checked,
    radio2.checked,
    radio3.checked,
    radio4.checked,
    radio5.checked,
    radio6.checked
  );
}

function radio4_checked() {
  radio1.checked = false;
  radio2.checked = false;
  radio3.checked = false;
  radio4.checked = true;
  radio5.checked = false;
  radio6.checked = false;
  checked(
    radio1.checked,
    radio2.checked,
    radio3.checked,
    radio4.checked,
    radio5.checked,
    radio6.checked
  );
}

function radio5_checked() {
  radio1.checked = false;
  radio2.checked = false;
  radio3.checked = false;
  radio4.checked = false;
  radio5.checked = true;
  radio6.checked = false;
  checked(
    radio1.checked,
    radio2.checked,
    radio3.checked,
    radio4.checked,
    radio5.checked,
    radio6.checked
  );
}

function radio6_checked() {
  radio1.checked = false;
  radio2.checked = false;
  radio3.checked = false;
  radio4.checked = false;
  radio5.checked = false;
  radio6.checked = true;
  checked(
    radio1.checked,
    radio2.checked,
    radio3.checked,
    radio4.checked,
    radio5.checked,
    radio6.checked
  );
}

function checked(radio1, radio2, radio3, radio4, radio5, radio6) {
  if (radio1 == true) {
    console.log("radio1");
    document.getElementById("radio1").style.border = "3px solid #ca283f";
    document.getElementById("radio2").style.border = "1px solid black";
    document.getElementById("radio3").style.border = "1px solid black";
    document.getElementById("radio4").style.border = "1px solid black";
    document.getElementById("radio5").style.border = "1px solid black";
    document.getElementById("radio6").style.border = "1px solid black";
    document.getElementById("option1").style.display = "block";
    document.getElementById("option2").style.display = "none";
    document.getElementById("option3").style.display = "none";
    document.getElementById("option4").style.display = "none";
    document.getElementById("option5").style.display = "none";
    document.getElementById("option6").style.display = "none";
  } else if (radio2 == true) {
    console.log("radio2");
    document.getElementById("radio1").style.border = "1px solid black";
    document.getElementById("radio2").style.border = "3px solid #ca283f";
    document.getElementById("radio3").style.border = "1px solid black";
    document.getElementById("radio4").style.border = "1px solid black";
    document.getElementById("radio5").style.border = "1px solid black";
    document.getElementById("radio6").style.border = "1px solid black";
    document.getElementById("option1").style.display = "none";
    document.getElementById("option2").style.display = "block";
    document.getElementById("option3").style.display = "none";
    document.getElementById("option4").style.display = "none";
    document.getElementById("option5").style.display = "none";
    document.getElementById("option6").style.display = "none";
  } else if (radio3 == true) {
    console.log("radio3");
    document.getElementById("radio1").style.border = "1px solid black";
    document.getElementById("radio2").style.border = "1px solid black";
    document.getElementById("radio3").style.border = "3px solid #ca283f";
    document.getElementById("radio4").style.border = "1px solid black";
    document.getElementById("radio5").style.border = "1px solid black";
    document.getElementById("radio6").style.border = "1px solid black";
    document.getElementById("option1").style.display = "none";
    document.getElementById("option2").style.display = "none";
    document.getElementById("option3").style.display = "block";
    document.getElementById("option4").style.display = "none";
    document.getElementById("option5").style.display = "none";
    document.getElementById("option6").style.display = "none";
  } else if (radio4 == true) {
    console.log("radio4");
    document.getElementById("radio1").style.border = "1px solid black";
    document.getElementById("radio2").style.border = "1px solid black";
    document.getElementById("radio3").style.border = "1px solid black";
    document.getElementById("radio4").style.border = "3px solid #ca283f";
    document.getElementById("radio5").style.border = "1px solid black";
    document.getElementById("radio6").style.border = "1px solid black";
    document.getElementById("option1").style.display = "none";
    document.getElementById("option2").style.display = "none";
    document.getElementById("option3").style.display = "none";
    document.getElementById("option4").style.display = "block";
    document.getElementById("option5").style.display = "none";
    document.getElementById("option6").style.display = "none";
  } else if (radio5 == true) {
    console.log("radio5");
    document.getElementById("radio1").style.border = "1px solid black";
    document.getElementById("radio2").style.border = "1px solid black";
    document.getElementById("radio3").style.border = "1px solid black";
    document.getElementById("radio4").style.border = "1px solid black";
    document.getElementById("radio5").style.border = "3px solid #ca283f";
    document.getElementById("radio6").style.border = "1px solid black";
    document.getElementById("option1").style.display = "none";
    document.getElementById("option2").style.display = "none";
    document.getElementById("option3").style.display = "none";
    document.getElementById("option4").style.display = "none";
    document.getElementById("option5").style.display = "block";
    document.getElementById("option6").style.display = "none";
  } else if (radio6 == true) {
    console.log("radio6");
    document.getElementById("radio1").style.border = "1px solid black";
    document.getElementById("radio2").style.border = "1px solid black";
    document.getElementById("radio3").style.border = "1px solid black";
    document.getElementById("radio4").style.border = "1px solid black";
    document.getElementById("radio5").style.border = "1px solid black";
    document.getElementById("radio6").style.border = "3px solid #ca283f";
    document.getElementById("option1").style.display = "none";
    document.getElementById("option2").style.display = "none";
    document.getElementById("option3").style.display = "none";
    document.getElementById("option4").style.display = "none";
    document.getElementById("option5").style.display = "none";
    document.getElementById("option6").style.display = "block";
  }
}
