const app = new Vue({
      el: '#app',
      data: {
         name: '',
         email: '',
         phone: '',
         age:''
      },
       methods:{
                       submitForm: function(){
                     
                         if(this.name != '' && this.email!='' && this.age!='' && this.phone!=''){
                            axios.post('insert.php', {
                                name: this.name,
                                email:this.email,
                                phone:this.phone,
                                age: this.age
                            })
                            .then(function (response) {
                                console.log(response);
                                if(response.status==200){
                                
                                    alert('Data saved successfully');
                                } 
                                 
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                        }else{
                            alert('Please enter all fileds');
                        }                    
                    }
      }  
    });