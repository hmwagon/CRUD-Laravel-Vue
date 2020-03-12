<template>
    <div class="row justify-content-center">
        <div class="col-md-8">

            <form-component @new="addpensamiento"></form-component>

            <pensamiento-component v-for="(pensamiento, index) in pensamientos" :key="pensamiento.id" :pensamiento="pensamiento" 
            @update="updatepensamiento(index, ...arguments)" 
            @delete="deletepensamiento(index)"
            ></pensamiento-component>

        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
               pensamientos: [{
                   'id': 1,
                   'descripcion': 'abc',
                    'create_at': '23/04/2020'
               }]
            }
        },
        methods:{
            addpensamiento(pensamiento){
                this.pensamientos.push(pensamiento);
            }, 
            updatepensamiento(index, pensamiento){
                this.pensamientos[index] = pensamiento;
            },
            deletepensamiento(index){
                this.pensamientos.splice(index, 1);
            }
        }
    }
</script>