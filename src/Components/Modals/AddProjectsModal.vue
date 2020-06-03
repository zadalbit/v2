<template>
    <div @click="reloadRoute" :class="[ 'modal-wrapper', currentRouteHash == '#' + link ? 'show-modal' : '' ]">
        <div class="modal-content">
            <div class="form-group" v-for="(project, index) in projects" :key="index">
                <label :for="'input_project_name_' + index">Назва:</label>
                <input type="text" class="form-control" name="name" :id="'input_project_name_' + index" placeholder="Введіть назву" v-model="project.name">
                <p class="text-right" v-if="index > 0">
                    <span @click="removeProject(index)" class="add-link">- Видалити проект</span>
                </p>
            </div>
            <p class="text-right">
                <span @click="addProject()" class="add-link">+ Додати проект</span>
            </p>
            <button type="submit" class="btn btn-success form-control" @click="processForm()">Зберегти</button>
        </div>
    </div>
</template>

<script>
import Api from '@/Services/Api'

export default {
    name: 'AddProjectsModal',
    data() {
        return {
            link: 'add-projects',
            projects: [
                {
                    name: '',
                }
            ]
        }
    },
    computed: {
        currentRouteHash() {
            return this.$route.hash;
        }
    },
    methods: {
        reloadRoute: function() {
            this.$router.push('#');
        },
        addProject: function() {
            this.projects.push({ name: '' });
        },
        removeProject: function(index) {
            this.projects.splice(index, 1);
        },
        processForm: function() {
            var instance = this;

            var data = new FormData();
            
            this.projects.forEach(function(project, index) {
                data.append('project[' + index + '][name]', project.name)
            });

            Api().post('instruments/projects', data)
                .then(function(result) {
                    console.log(result);
                    if (result.data.error == true) {
                        instance.$notify({
                          group: 'foo',
                          type: 'error',
                          title: 'Error',
                          text: result.data.message
                        });
                    } else {
                        instance.$router.push({ name: 'successpage', query: { title: 'Успіх!', message: 'Проект успішно збережено.', backtitle: 'Повернутись до форми', backlink: 'projects-manager-form', nexttitle: 'Перейти до каталогу', nextlink: 'projects-manager' } });
                    }
                })
                .catch(function (error) {
                   console.log(error);
                   instance.$notify({
                      group: 'foo',
                      type: 'error',
                      title: 'Error',
                      text: 'Something went wrong, check console'
                    });
                });
        }
    }
}
</script>

<style type="text/css">
    .modal-wrapper {
        display: none;
        position: fixed;
        width: 100vw;
        height: 100vw;
        top: 0px;
        left: 0px;
        margin-top: 0px;
        margin-left: 0px;
        background: rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }
    .show-modal {
        display: block;
    }
    .modal-content {
        max-width: 700px;
        padding: 20px;
        margin: 0 auto;
        margin-top: 40px;
    }
</style>
