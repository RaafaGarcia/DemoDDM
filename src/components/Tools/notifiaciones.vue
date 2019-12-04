<template>
<div  id="notification_li" class="nav" >
	<section class="demo-section">
      <section>
        <mdb-row center>
          <mdb-popover trigger="click" :options="{placement: 'bottom'}" :maxWidth="450">
            <div slot="body">

              <mdb-jumbotron v-for="document  in documents" :key="document.id"  :class="document[user] == false ? 'p-2 btn btn-block btn-outline-info ':'p-2 btn btn-block btn-white '"  style="color:black">
                <div class="row">
					
					<div class="col-3">
						<img src="../../assets/user.png" width="60" alt="">
					</div>
					<div class="col-9" style="border-left:1px solid black">
						<div v-if="document.type=='Mod'">

							<label  class="h6"><b>{{document.responsable}}</b> ha modificado en <b>{{document.modulo}}</b>  la referencia #<b>{{document.referencia}}</b> </label>
							<br>
							<a :href="'#/'+document.modulo+'/'+document.referencia" @click="Modificar(document)"><mdb-btn slot="reference" color="elegant" size="sm" style="border-radius:5px"> Ver {{document.modulo}}</mdb-btn></a>

						</div>
						

					</div>
					
				</div>
				
              </mdb-jumbotron>
				<label v-if="documents==null | documents==[]"> Sin notificaciones</label>
            </div>
            <mdb-btn slot="reference"   title="Notificaciones" color="black">
				
             <mdb-icon icon="bell"  size="lg" /> 
				<mdb-badge color="danger" class="ml-2" ><span class="h6">{{count}}</span></mdb-badge>
    				<span class="sr-only">unread messages</span>
            </mdb-btn>
          </mdb-popover>
         
        </mdb-row>
      </section>
    </section>
	
	<!-- <span id="notification_count">99</span>
		<button  @click="abrir()" id="notificationLink" class=""><i  style="color:gray;font-size:20px" class="fas fa-bell"></i></button>

		<div v-if="noti==true" id="notificationContainer">

			<div id="notificationTitle">Notifications</div>

			<div id="notificationsBody" class="notifications"> -->
				
    			<!-- <div v-for="noti in notifications" :key="noti.id">
					
					<div v-if="noti.TYPE == 'Mod'" @click="noti[user] = 1" :class="noti[user] == 1 ? 'p-2 btn btn-block btnRead active':'p-2 btn btn-block btnNoti '" style="color:black;height:40px;border-bottom: 1px solid gray;box-shadow: 11px 14px 33px -13px rgba (0,0,0,0.75)">
						<a :href="'#/'+noti.modulo+'/'+noti.ID">
							<div class="row">
								<div class="col-md-1">
									<i class="fas fa-user-edit ml-3"  style="color:black"></i>
								</div>
								<div class="col-md-11">
									<label  class="h6"><b>{{noti.RESPONSABLE}}</b> a modificado en <b>{{noti.MODULO}}</b> el id <b>{{noti.ID_NOTI}}</b> </label>
								</div>
							</div>
						 	
						</a>
					</div>

				</div> -->
				<!-- En construcción ...
			</div>

			<div id="notificationFooter"><a href="#">Ver todas</a></div>
		</div> -->


</div>
</template>
<script  >
import { hostname } from '@/data/hostinger.js';
 import { db } from '@/data/db.js'
    import { Timestamp } from '@/data/db.js'
import { mdbPopover,mdbBadge, mdbRow, mdbBtn, mdbContainer, mdbIcon, mdbJumbotron, mdbView, mdbMask, mdbCardTitle } from 'mdbvue';
import { type } from 'os'

export default {
	components: {
    mdbPopover,
    mdbRow,
    mdbBtn,
    mdbContainer,
    mdbIcon,
    mdbJumbotron,
    mdbView,
    mdbMask,
	mdbCardTitle,
	mdbBadge
  },
    data () {
		return {
			hostName:hostname,
			documents: [],
			docs:[],
			tittle:'',
			text:'',
			zzz: false,
				notifications:[
					{
						ID_NOTI:1,
						TYPE:"Mod",
						RESPONSABLE:"Alfonso",
						STATUS:false,
						MODULO:"Orden",
						REFERENCIA:4,
						USER1:false,
						USER2:false,
						USER3:false,
						USER4:false,
						USER5:false,
					}
					
				],
				user:0,
				noti:false
		}
	},
	methods:{
		abrir(){
			this.noti =! this.noti
			
		},
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
        Modificar(doc){
            
           doc[this.user]=true

            db.collection('messages')
            .doc(doc.id)
            .set(doc)
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
            const user = {tittle:this.tittle,text:this.text,date: date.getTime()}
             db.collection('messages').add(user)
        }
    },
  firestore: {
    documents: db.collection('messages').orderBy('date',"desc"),
  },
	computed: {
		count(){
			let cont=0
			this.documents.forEach(element => {
				if(element[this.user] == false){
					cont +=1
				}
			});
			return cont
		}
	},
	watch: {
	
	},
	created(){
		
		this.user="user"+localStorage.id_usuario
		// this.getNotis()
	},
	
}

</script>
<style >
/* .nav{list-style:none;margin: 0px;padding: 0px;} */
/* .nav{
	
	margin-right: 100px;
	font-size: 14px;
	font-weight:bold;
}
.nav  a{color:#333333;text-decoration:none}
.nav  a:hover{color:#006699;text-decoration:none}
#notification_li
{
position: relative;
}
#notificationContainer 
{

	background-color: #fff;
	border: 1px solid rgba(100, 100, 100, .4);
	-webkit-box-shadow: 0 3px 8px rgba(0, 0, 0, .25);

	position: absolute;
	top: 55px;
	margin-left: -175px;
	width: 400px;
	z-index: 100;

}
#notification_count 
{
	padding: 3px 7px 3px 7px;
	background: #cc0000;
	color: #ffffff;
	font-weight: bold;
	margin-left: 30px;
	border-radius: 9px;
	-moz-border-radius: 9px; 
	-webkit-border-radius: 9px;
	position: absolute;
	margin-top: -11px;
	font-size: 11px;
}
#notificationContainer:before {
	content: '';
	display: block;
	position: absolute;
	width: 0;
	height: 0;
	color: transparent;
	border: 10px solid black;
	border-color: transparent transparent white;
	margin-top: -20px;
	margin-left: 188px;
}
#notificationTitle
{
	font-weight: bold;
	padding: 8px;
	font-size: 13px;
	background-color: #ffffff;

	z-index: 1000;
	width: 384px;
	border-bottom: 1px solid #dddddd;
}
#notificationsBody
{
	padding: 10px 0px 0px 0px !important;
	min-height:300px;
}
#notificationFooter
{
	background-color: #e9eaed;
	text-align: center;
	font-weight: bold;
	padding: 8px;
	font-size: 12px;
	border-top: 1px solid #dddddd;
}

.btnNoti {
  padding: 5px 5px;
  margin: 4px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  background: lightblue;
  color: white;
  
  border: 2px double lightblue
}
.btnNoti:hover {
 
 background: transparent;
  color: white;
}

.btnRead {
  padding: 5px 5px;
  margin: 4px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  background: whitesmoke;
  color: black;
  
  border: 2px double gray
}
.btnRead:hover {
 
 background: transparent;
  color: black; */



</style>