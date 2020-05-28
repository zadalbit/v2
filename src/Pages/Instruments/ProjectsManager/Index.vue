<template>
    <AppLayout>
        <template v-slot:breadcrumbs>
            <strong>
                <router-link :to="{ name: 'homepage'}">Головна</router-link> > 
                <router-link :to="{ name: 'instruments'}">Каталог інструментів</router-link> > 
                Менеджер проектів > 
                Каталог
            </strong>
        </template>
        <template v-slot:content>
            <div class="col-lg-12">
                Кількіть записів:<br>
                Сторінка:<br>
                Сортувати:<br>
                Шукати:<br>
            </div>
        </template>
    </AppLayout>
</template>

<script>
import Api from '@/Services/Api'
import AppLayout from '@/Layouts/AppLayout.vue'
import IsEmptyMixin from '@/Mixins/IsEmptyMixin.vue'

export default {
    name: 'ProjectsManagerIndexPage',
    components: {
        AppLayout
    },
    mixins: [ IsEmptyMixin ],
    data() {
        return {
            projects: [],
            records_numb: {
                value:'all',
                options: [
                    1,
                    5,
                    10,
                    15,
                    'all'
                ]
            },
            page_numb: {
                value: '',
                options: []
            },
            sort_by: {
                value: '',
                options: []
            },
            search: {
                query: '',
                value: 'all',
                options: [
                    'all'
                ]
            }
        }
    },
    mounted: function() {
        // this.createSearch();
        this.getProjects();
    },
    methods: {
        /*createSearch: function() {
            // var instance = this;
            Api().get('search/create?entity=project')
                .then(function(result) {
                    console.log(result);
                })
                .catch(function (error) {
                   console.log(error);
                });
        },*/
        getProjects: function() {
            // var instance = this;
            Api().get('instruments/projects?orderBy=name')
                .then(function(result) {
                    console.log(result);
                })
                .catch(function (error) {
                   console.log(error);
                });
        }
    }
}
</script>
