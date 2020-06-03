<template>
    <AppLayout>
        <template v-slot:breadcrumbs>
            <strong>
                <router-link :to="{ name: 'homepage'}">Головна</router-link> > 
                <router-link :to="{ name: 'instruments'}">Каталог інструментів</router-link> > 
                Менеджер класів/об'єктів > 
                Форма
            </strong>
        </template>
        <template v-slot:content>
            <div class="col-lg-12">
                <hr>
                <h3>Загальні дані:</h3><br>

                <div class="form-group">
                    <label>Категорія: <span class="red">*</span></label> <br>

                    <input type="radio" name="name" id="class_category_1" value="library" v-model="class_object.category"> 
                    <label for="class_category_1" class="radio-label"> Бібліотека</label> <br>

                    <input type="radio" name="name" id="class_category_2" value="project" v-model="class_object.category"> 
                    <label for="class_category_2" class="radio-label"> Проект</label>
                </div>

                <div v-if="class_object.category == 'project'" class="form-group">
                    <label>Відноситься до проекту:</label> <router-link :to="{ path: '#add-projects' }">додати проект</router-link>
                    <select class="form-control" v-model="class_object.project_id">
                        <option v-for="(project, index) in createData.projects" :key="index" :value="project.id">{{ project.name }}</option>
                    </select>
                </div>

                <div v-if="class_object.category == 'library'" class="form-group">
                    <label>Відноситься до бібліотеки:</label> <router-link :to="{ path: '#add-libraries' }">додати бібліотеку</router-link>
                    <select class="form-control" v-model="class_object.library_id">
                        <option v-for="(library, index) in createData.libraries" :key="index" :value="library.id">{{ library.name }}</option>
                    </select>
                </div>
                PSR-4 https://www.php-fig.org/psr/psr-4/
            </div>
        </template>
        <template v-slot:modals>
            <AddProjectsModal></AddProjectsModal>
        </template>
    </AppLayout>
</template>

<script>
import Api from '@/Services/Api'
import AppLayout from '@/Layouts/AppLayout.vue'
import AddProjectsModal from '@/Components/Modals/AddProjectsModal.vue'

export default {
    name: 'ClassesManagerFormPage',
    components: {
        AppLayout,
        AddProjectsModal
    },
    data() {
        return {
            class_object: {
                category: '',
                project_id: 0,
                library_id: 0
            },
            createData: {
                projects: [],
                libraries: [],
            }
        }
    },
    mounted: function() {
        this.create();
    },
    methods: {
        create: function() {
            var instance = this;
            Api().get('instruments/classes/create')
                .then(function(result) {
                    instance.createData.projects = result.data.data.projects;
                    instance.createData.libraries = result.data.data.libraries;
                })
                .catch(function (error) {
                   console.log(error);
                });
        }
    }
}
</script>

<style type="text/css">
    .radio-label {
        margin-left: 4px;
    }

    .red {
        color: red;
    }
</style>