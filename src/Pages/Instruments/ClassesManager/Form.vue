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
                    <label>Категорія: <span class="red">*</span></label> <router-link :to="{ path: '#add-projects' }">додати категорію</router-link> <br>

                    <select class="form-control" v-model="class_object.category_id">
                        <option v-for="(category, index) in createData.categories" :key="index" :value="category.id">{{ category.name }}</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Простір імен:</label> <br>
                    <input type="text" name="namespace" v-model="class_object.namespace">
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
                namespace: '',
                category_id: 0
            },
            createData: {
                categories: [],
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
                    instance.createData.categories = result.data.data.categories;
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