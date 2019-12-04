<template>
  <mdb-container>
    
<mdb-modal :show="tipo==1" @close="tipo = 0,emit()" success>
      <mdb-modal-header>
        <mdb-modal-title>Completo!</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body  class="text-center">
          <mdb-icon icon="check" size="4x" class="mb-3 animated rotateIn"/>
          <p>{{mensajes}}
          </p>
        </mdb-modal-body>
        <mdb-modal-footer center>
          <mdb-btn color="success" @click.native="tipo = 0,emit()">Aceptar <mdb-icon icon="diamond" class="ml-1" color="white"/></mdb-btn>
          <!-- <mdb-btn outline="success" @click.native="tipo = 0">No, thanks</mdb-btn> -->
        </mdb-modal-footer>
      </mdb-modal>

    
   <mdb-modal :show="tipo==2" @close="tipo = 0,emit()" info>
      <mdb-modal-header>
        <mdb-modal-title >Info!</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <mdb-icon icon="info" size="4x" class="mb-3 animated rotateIn"/>
        <p class="text-center">
          {{mensajes}}
        </p>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn color="primary" @click.native="tipo = 0,emit()">Aceptar <mdb-icon icon="diamond" class="ml-1" color="white"/></mdb-btn>
        
      </mdb-modal-footer>
    </mdb-modal>

    
   <mdb-modal :show="tipo==3" @close="tipo = 0,emit()" danger>
      <mdb-modal-header>
        <mdb-modal-title>Error!</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <mdb-row>
          <mdb-col col="3" class="text-center"><mdb-icon icon="times" size="4x" style="color:red"/></mdb-col>
          <mdb-col col="9">
            <p> {{mensajes}}</p>
            
          </mdb-col>
        </mdb-row>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn color="danger" @click.native="tipo = 0,emit()">Aceptar<mdb-icon icon="diamond" class="ml-1" color="white"/></mdb-btn>
        
      </mdb-modal-footer>
    </mdb-modal>

    
    <mdb-modal :show="tipo==4" @close="tipo = 0,emit()" warning>
      <mdb-modal-header>
        <mdb-modal-title>Advertencia!</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <mdb-row>
          <mdb-col col="3" class="text-center">
             <mdb-col col="3" class="text-center"><mdb-icon icon="exclamation-triangle" size="4x" style="color:orange"/></mdb-col>
    
          </mdb-col>
          <mdb-col col="9">
            <p> {{mensajes}}</p>
          </mdb-col>
        </mdb-row>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn color="success" @click.native="tipo = 0,emit(),result(ask,iditem)">Aceptar <mdb-icon icon="diamond" class="ml-1" color="white"/></mdb-btn>
        <mdb-btn color="danger" @click.native="tipo = 0,emit(),result('cancel')">Cancelar</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbIcon, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn, mdbBadge, mdbCol } from 'mdbvue';
import { watch } from 'fs';
export default {
    
  name:'ModalStylesPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbBtn,
    mdbBadge,
    mdbCol
  },
  props:{
      type:{
          type:Number,
          default:0
          },
      question:{
      type:String,
      default:''
      },
      item:{
      type:[String,Number],
      default:""
      },
      text:{
          type:String,
          default:"Sin mensaje"
          }
          
     
      },
  data() {
      
    return {
        iditem:this.item,
        ask:this.question,
        tipo:this.type,
      mensajes: this.text,
      
    }
  },
  methods:{
    result(res,id){
      this.$emit('result',{res:res,id:id})
    },
    emit(){
      this.$emit('type', this.tipo)    
    }
  },
  watch: {
    type: function (type) {
      this.tipo =type
      
    },
    text: function (text) {
      this.mensajes =text
    },
    question: function (question) {
      this.ask =question
    },
    item: function (item) {
      this.iditem =item
    },
  }
};
</script>