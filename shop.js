arr1=[900,750,600,680],
arr2=[400,250,650]
budget=1300

for(let num1 of arr1){
    for(let num2 of arr2){
        count=num1+num2;
        
        if(count==budget){
            console.log(count);
            console.log("keyboard-",num1);
            console.log("mouse-",num2);
            
        }
        else 
         {
              rs=budget-count
              console.log(`you'll need another Rs ${rs} to shop`);
              break;
        }  
        break     
    }

}