function takeANumber(currentLine, newPerson){
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`;
}

function nowServing(currentLine){
  if(currentLine.length == 0){
    return "There is nobody waiting to be served!";
  }
  else{
    var nowServing = currentLine[0];
    return `Currently serving ${nowServing}`
  }

}
