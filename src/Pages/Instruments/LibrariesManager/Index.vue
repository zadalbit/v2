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

export default {
    name: 'LibrariesManagerIndexPage',
    components: {
        AppLayout
    },
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
        this.createSearch();
    },
    methods: {
        createSearch: function() {
            // var instance = this;
            Api().get('search/create?entity=library')
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
