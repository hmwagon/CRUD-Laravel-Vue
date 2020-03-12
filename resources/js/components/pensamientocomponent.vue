<template>
    <div class="card mt-4">
        <div class="card-header">Publicado el {{pensamiento.create_at}}</div>
        <div class="card-body">
            <input v-if="editMode" type="text" class="form-control" v-model="pensamiento.descripcion">
            <p  v-else>{{pensamiento.descripcion}}</p>
        </div>
        <div class="panel-footer m-3">
            <button v-if="editMode" class="btn btn-success" v-on:click="onClickUpdate()">Guardar</button>
            <button v-else class="btn btn-primary" v-on:click="onClickEdit()">Editar</button>
            <button class="btn btn-danger" v-on:click="onClickDelete()">Eliminar</button>
        </div>
    </div>
</template>

<script>
    export default {
        props:['pensamiento'],
        data(){
            return{
                editMode: false
            };
        }, methods:{
            onClickDelete(){
                this.$emit('delete');
            },
            onClickEdit(){
                this.editMode = true;
            },
            onClickUpdate(){
                this.editMode = false;
            }
        }
    }
</script>
