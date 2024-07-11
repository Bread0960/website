var a=Math.floor(Math.random()*11);
var isFind=false;
while(isFind==false)
{
    var b=prompt("Schreiben Sie eine Zahl (von 0 bis 10)");
    if(b>a)
    {
        alert(`Zahl ${b} ist zu groß`);
    }
    else if(b<a)
    {
        alert(`Zahl ${b} ist zu klein`);
    }
    else if(b==a)
    {
        alert("Herzlichen Glückwunsch!");
        isFind=true;
    }
    else
    {
        alert("Schreiben Sie eine Zahl!");
    }
}

