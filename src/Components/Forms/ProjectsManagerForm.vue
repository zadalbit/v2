<template>
    <div>
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
</template>

<script>
import Api from '@/Services/Api'

export default {
    name: 'ProjectsManagerForm',
    data() {
        return {
            projects: [
                {
                    name: '',
                }
            ]
        }
    },
    methods: {
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
