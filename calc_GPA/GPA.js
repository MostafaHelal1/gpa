var num_of_sub = window.prompt("Enter number of subjects: "); // array size
let x = [];
let y =[];
let element = 0;
let GPA = 0;
if((num_of_sub <=6)&&(num_of_sub>=1))
{
for (let i = 0; i < num_of_sub; i++) {
    x[i]=prompt("Enter grade number ["+(i+1)+"] ")   
    
}
for (let i = 0; i < x.length; i++) {
    if(x[i] >= 50 && x[i] <60)
        y.push(6)
    else if(x[i] >= 60 && x[i] <65)
        y.push(6.6)
    else if(x[i] >= 65 && x[i] <70)
        y.push(7.2)
    else if(x[i] >= 70 && x[i] <75)
        y.push(8.1)
    else if(x[i] >= 75 && x[i] <80)
        y.push(9)
    else if(x[i] >= 80 && x[i] <85)
        y.push(9.9)
    else if(x[i] >= 85 && x[i] <90)
        y.push(11.1)
    else if(x[i] >= 90 && x[i] <=100)
        y.push(12)
    else
        y.push(0);          

    
}
for (let i = 0; i < y.length; i++) {
    element+= y[i];
    
}
num_of_hours = num_of_sub*3;
GPA = element / num_of_hours;
document.write("Your GPA = "+GPA);
}
else{
    document.write("You entered invalid number of subjects");


}
