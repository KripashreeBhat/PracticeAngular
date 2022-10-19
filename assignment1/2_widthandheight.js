let checkWidthHeight=(width,height)=>{
    return (width>height) ? true : false;
}
let width=+prompt("enter the width",0);
let height=+prompt("enter the height",0);
alert(checkWidthHeight(width,height));
    

