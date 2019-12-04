<template>
<div  class="container mt-1 p-2" style="background:white;border-radius:10px;">
  <ul class="list-group">
      <li v-for="document  in documents" class="p-4 list-group-item m-1" style="background:whitesmoke;border-radius:10px;border:2px solid black" :key="document.id"> 
          <div class="row">
              <div class="col-2">
                  {{document.id}}
              </div>
              <div class="col-2">
                  {{document.type}}
              </div>
              <div class="col-2">
                  {{document.responsable}}
              </div>
              <div class="col-2">
                  {{document.modulo}}
              </div>
              <div class="col-2">
                  {{document.referencia}}
              </div>
              <div class="col-2">
                  {{ getTime(document.date)}}
              </div>
              <div class="col-2">
                  <button class="btn btn-danger" @click="delet(document.id)">Borrar</button>
              </div>
                <div class="col-2">
                  <ul>
                  <li >
                      {{document.user1}}
                  </li>
                  <li >
                      {{document.user2}}
                  </li>
                  <li >
                      {{document.user3}}
                  </li>
                  <li >
                      {{document.user4}}
                  </li>
                  <li >
                      {{document.user5}}
                  </li>
              </ul>
              </div>
              
          </div>
          
          
          
          
          <hr>
      </li>
  </ul>
  <br>
    <div style="background:whitesmoke;border-radius:10px;border:2px solid gray" class="p-4">
        <div class="row">
            <div class="col-4">
                <label for="Tittle">type</label>
                <input type="text" class="form-control" v-model="type">
            </div>

             <div class="col-4">
                <label for="Tittle">responsable</label>
                 <input type="text" class="form-control" v-model="responsable">
            </div>
            <div class="col-4">
                <label for="Tittle">modulo</label>
                 <input type="text" class="form-control" v-model="modulo">
            </div>
            <div class="col-4">
                <label for="Tittle">referencia</label>
                 <input type="number" class="form-control" v-model="referencia">
            </div>
            
        </div>
        
    </div>
  
  
 <div class="p-3 m-5">
 <button class="btn btn-dark m-1" @click="get()">Listar</button>
 <button class="btn btn-dark m-1" @click="getId()">Listar x mensaje</button>
 <button class="btn btn-dark m-1" @click="add()">Agregar</button>
 </div>
</div>
    
</template>
<script>
    import { db } from '@/data/db.js'
    import { Timestamp } from '@/data/db.js'
export default {
  data() {
    return {
      documents: [],
      docs:[],
      type:'',
      responsable:'',
      modulo:'',
      referencia:''
    }
  },
    methods:{
        getTime(date){
           return new Date(date)
        },
        get(){
            db.collection('messages')
            .get()
            .then(querySnapshot => {
                this.docs = querySnapshot.docs.map(doc => doc.data())
               
            })
        },
        getId(){
            
            db.collection('messages')
            .doc("2abZ6g0Bp982lM4jNJER")
            .get()
            .then(snapshot => {
                this.docs = snapshot.data()
                // do something with document
            })
        },
        Modificar(id){
            
            const user = {tittle:this.tittle,text:this.text }

            db.collection('messages')
            .doc("2abZ6g0Bp982lM4jNJER")
            .set(user)
            .then(() => {
                console.log('user updated!')
            })
           
        },
        delet(id){
            db.collection('messages')
            .doc(id)
            .delete()
        },
         add(){
            let date=new Date()
            const user = {
            type:this.type,
            responsable:this.responsable,
            modulo:this.modulo,
            referencia:this.referencia,
            user1:false,
            user2:false,
            user3:false,
            user4:false,
            user5:false,
            date: date.getTime(),
            }
             db.collection('messages').add(user)
        }
    },
  firestore: {
    documents: db.collection('messages').orderBy('date',"desc"),
  },
  
}
</script>
