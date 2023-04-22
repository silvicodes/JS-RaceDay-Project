let raceNumber = Math.floor(Math.random() * 1000);

const runnerRegistered = false;

const age = 24;

if(runnerRegistered && age > 18){
  raceNumber += 1000;
}

if(runnerRegistered && age > 18 ){
  console.log(`Race time will be at 9:30am for Racer: ${raceNumber}.`);
}else if(!runnerRegistered && age > 18){
  console.log(`Race time will be at 11:00am for Racer: ${raceNumber}.`);
}else if(age < 18){
  console.log(`Youth Race will be at 12:30pm for Racer: ${raceNumber}.`);
}else{
  console.log(`Runner who are ${age} should see the registration desk.`);
}