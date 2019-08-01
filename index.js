function takeANumber(currentLine, newperson) {
  currentLine.push(newperson) //add new person into line(array)
  return `Welcome, ${newperson}. You are number ${currentLine.length} in line.`
} //use template literals

var totalpeople= 12;
function takeaNumber2(){
  totalpeople++;
  console.log( `Welcome, you are ticket number ${totalpeople}.`);
}
takeaNumber2();
takeaNumber2();
takeaNumber2();

function nowServing(currentLine) {
  if(currentLine.length > 0){
    var first = currentLine[0];
    currentLine.shift();
    return "Currently serving " + first + "."
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(currentLine) {
  var counter = 0;
  var string = "The line is currently: "
  if(counter < currentLine.length){   //First check if there is anyone in line
    while (counter < currentLine.length) {  //While there is still someone in line that hasnt been added to the string, keep repeating
      if ((counter + 1)===currentLine.length) { //If last person in line, don't add apostrophe at the end of the string
        string = string + `${counter+1}. ${currentLine[counter]}`
        counter++;
      }
      else { //Add next person in line to the exisiting string to be printed at the end
        string = string + `${counter+1}. ${currentLine[counter]}, `
        counter++;
      }
    }
    return string //Return string with everyone in line
  }
  else { //write this if no one is in line
    return "The line is currently empty."
  }
  // var newlist = [];
  // for(var i=0; i<currentLine.length; i++){
  //  newlist.push(`${i+1}. ${currentLine[i]}`)
  // }
  // if(currentLine.length===0) {return "The line is currently empty."}
  // else {return `The line is currently: ${newlist.join(", ")}`}
}
