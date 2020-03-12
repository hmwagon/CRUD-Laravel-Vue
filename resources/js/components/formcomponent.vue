<template>
    <div class="card">
        <div class="card-header">En que estas pensando?</div>
        <div class="card-body">
            <form action="" v-on:submit.prevent="newpensamiento()">
                <div class="form-group">
                    <label for="pensar">Ahora estoy pensando en: </label>
                    <input type="text" name="pensar" id="" class="form-control" v-model="descripcion">
                </div>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                descripcion: ''
            }
        },
        methods:{
            newpensamiento(){

                let pensamiento = {
                    id: 2,
                    descripcion: this.descripcion,
                    create_at: '23/04/2020'
                }

                this.$emit('new', pensamiento);
                this.descripcion = '';
            }
        }
    }
</script>
