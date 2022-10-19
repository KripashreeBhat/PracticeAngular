let emp ={
    name :"kiran",
    age : 10,
    ask:function(){
    //    let self = this;
    //     setTimeout(function(){console.log(self.name);},2000)
    setTimeout(()=>{console.log(this.name);},2000)    
    }
};
emp.ask();
        